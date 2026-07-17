import tf from "@tensorflow/tfjs-node";

async function trainModel(inputXs, outputYs) {
  const model = tf.sequential();

  // Primeira camada da rede:
  // entrada de 7 posições (idade normalizada + 3 cores + 3 localizações)

  // 80 neuronios = aqui eu coloquei tudo isso pq tem pouca base de treino.
  // quanto mais neuronios, mais complexidade a rede pode aprender
  // e consequentemente, mais processamento ela vai usar

  // A ReLU age como um filtro:
  //  é como se ela deixasse somente os dados interessantes seguirem viagem na rede
  //  se a informação que chegou nesse neuronio é positiva, passa pra frente!
  // se for zero ou negativa, pode jogar fora, nao vai servir pra nada
  model.add(
    tf.layers.dense({ inputShape: [7], units: 80, activation: "relu" }),
  );

  // Saída: 3 neuronios
  // um para cada categoria (premium, medium, basic)

  // activation: softmax = normaliza a saida em probabilidades
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));

  // Compilando o modelo
  // optmizer Adam (adaptive model estimation)
  // é um treinador pessoal moderno para redes neurais:
  // ajusta os pesos de forma inteligente e eficiente
  // aprende com o historico de erros e acertos, e ajusta a taxa de aprendizado automaticamente

  // loss: categoricalCrossentropy
  // ele compara os scores de cada catégoria com a resposta certa
  // ex: a categoria premium sera sempre [1, 0 ,0]

  // metrics: accuracy
  // quanto mais distante da previsão do modelo da resposta correta
  // maior o erro (loss)
  // exemplo clássico: classificação de imagens, recomendação, categorização de usuário
  // qualquer coisa em que a resposta certa é "apenas uma entre várias possiveis"

  model.compile({
    optimizer: "adam",
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"],
  });

  // Treinamento do modelo
  // verbose: desabilita o log interno (e usa só o callback)
  // epochs: quantidade de vezes que vai rodar no dataset de treino
  // shuffle: embaralha os dados para evitar vies de ordem (ex: se os dados de treino estiverem ordenados, o modelo pode aprender a ordem e não a relação entre os dados)

  await model.fit(inputXs, outputYs, {
    verbose: 0, // 0 = sem log, 1 = log de cada epoch, 2 = log resumido
    epochs: 100, // numero de vezes que o modelo vai ver os dados de treino
    shuffle: true,
    // callbacks: {
    //   onEpochEnd: (epoch, log) =>
    //     console.log(`Epoch: ${epoch}: loss = ${log.loss}`),
    // },
  });

  return model;
}

async function predict(model, pessoa) {
  // transformar o arrayjs para tensor
  const tfInput = tf.tensor2d(pessoa);

  // Faz a predição (output: sera um vetor de probabilidades para cada categoria)
  const pred = model.predict(tfInput);

  // Converte o tensor de volta para arrayjs
  const predArray = await pred.array();

  // Mostra o resultado da predição
  return predArray[0].map((prob, index) => ({ prob, index }));
}

// Exemplo de pessoas para treino (cada pessoa com idade, cor e localização)
// const pessoas = [
//     { nome: "Erick", idade: 30, cor: "azul", localizacao: "São Paulo" },
//     { nome: "Ana", idade: 25, cor: "vermelho", localizacao: "Rio" },
//     { nome: "Carlos", idade: 40, cor: "verde", localizacao: "Curitiba" }
// ];

// Vetores de entrada com valores já normalizados e one-hot encoded
// Ordem: [idade_normalizada, azul, vermelho, verde, São Paulo, Rio, Curitiba]
// const tensorPessoas = [
//     [0.33, 1, 0, 0, 1, 0, 0], // Erick
//     [0, 0, 1, 0, 0, 1, 0],    // Ana
//     [1, 0, 0, 1, 0, 0, 1]     // Carlos
// ]

// Usamos apenas os dados numéricos, como a rede neural só entende números.
// tensorPessoasNormalizado corresponde ao dataset de entrada do modelo.
const tensorPessoasNormalizado = [
  [0.33, 1, 0, 0, 1, 0, 0], // Erick
  [0, 0, 1, 0, 0, 1, 0], // Ana
  [1, 0, 0, 1, 0, 0, 1], // Carlos
];

// Labels das categorias a serem previstas (one-hot encoded)
// [premium, medium, basic]
const labelsNomes = ["premium", "medium", "basic"]; // Ordem dos labels
const tensorLabels = [
  [1, 0, 0], // premium - Erick
  [0, 1, 0], // medium - Ana
  [0, 0, 1], // basic - Carlos
];

// Criamos tensores de entrada (xs) e saída (ys) para treinar o modelo
const inputXs = tf.tensor2d(tensorPessoasNormalizado);
const outputYs = tf.tensor2d(tensorLabels);

// Quanto mais dados melhor!
// assim o algoritmo consegue aprender melhor os padrões complexos
// dos dados

const model = await trainModel(inputXs, outputYs);

const pessoa = {
  nome: "zé",
  idade: 28,
  cor: "verde",
  localizacao: "Curitiba",
};

// Normalizando a idade da nova pessoa usando o mesmo padrão do treino
// exemplo: idade_min = 25, idade_max = 40, então (28-25)/(40-25) = 0.2

const pessoaTensorNormalizado = [
  [
    0.2, // idade normalizada
    0, // azul
    0, // vermelho
    1, // verde
    0, // São Paulo
    0, // Rio
    1, // Curitiba
  ],
];

const predictions = await predict(model, pessoaTensorNormalizado);
const result = predictions
  .sort((a, b) => b.prob - a.prob)
  .map((p) => `${labelsNomes[p.index]} (${(p.prob * 100).toFixed(2)}%)`)
  .join("\n");

console.log(result);
