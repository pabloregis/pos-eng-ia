importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest");

const MODEL_PATH = `yolov5n_web_model/model.json`;
const LABELS_PATH = `yolov5n_web_model/labels.json`;
const INPUT_MODEL_DIMENTIONS = 640;

let _labels = [];
let _model = null;

async function loadModelAndLabel() {
  await tf.ready();
  _labels = await (await fetch(LABELS_PATH)).json();
  _model = await tf.loadGraphModel(MODEL_PATH);

  //   warmup
  const dummyInputs = tf.ones(_model.inputs[0].shape);

  await _model.executeAsync(dummyInputs);
  tf.dispose(dummyInputs);

  postMessage({ type: "model-loaded" });
}

/**
 * Pré-processa a imagem para o formato aceito pelo YOLO:
 * - tf.browser.fromPixels(): converte ImageBitmap/ImageData para tensor [H, W, 3]
 * - tf.image.resizeBilinear(): redimensiona para [INPUT_DIM, INPUT_DIM]
 * - .div(255): normaliza os valores para [0, 1]
 * - .expandDims(0): adiciona dimensão batch [1, H, W, 3]
 *
 * Uso de tf.tidy():
 * - Garante que tensores temporários serão descartados automaticamente,
 *   evitando vazamento de memória.
 */
function preprocessImage(input) {
  return tf.tidy(() => {
    const image = tf.browser.fromPixels(input);

    return tf.image
      .resizeBilinear(image, [INPUT_MODEL_DIMENTIONS, INPUT_MODEL_DIMENTIONS])
      .div(255)
      .expandDims(0);
  });
}

async function runInference(tensor) {
  const output = await _model.executeAsync(tensor);
  tf.dispose(tensor);

  // Assume que as 3 primeiras saidas são:
  // caixas (boxes), pontuações (scores) e classes (classes)
  const [boxes, scores, classes] = output.slice(0, 3);
  const [boxesData, scoresData, classesData] = await Promise.all([
    boxes.data(),
    scores.data(),
    classes.data(),
  ]);

  output.forEach((t) => t.dispose());

  return {
    boxes: boxesData,
    scores: scoresData,
    classes: classesData,
  };
}

loadModelAndLabel();

self.onmessage = async ({ data }) => {
  if (data.type !== "predict") return;
  if (!_model) return;

  const input = preprocessImage(data.image);

  const { width, height } = data.image;

  const inferenceResults = await runInference(input);

  // stopping but not inspecting element. should right click and "evaluate in console" to see the tensor values
  debugger;
  postMessage({
    type: "prediction",
    x: 400,
    y: 400,
    score: 0,
  });
};

console.log("🧠 YOLOv5n Web Worker initialized");
