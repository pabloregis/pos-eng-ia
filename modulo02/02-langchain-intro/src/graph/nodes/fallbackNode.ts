import { type GraphState } from "../graph.ts";

export function fallbackNode(state: GraphState): GraphState {
  const message =
    'Unknown command. Try "make this lower case" or "convert to uppercase".';

  return {
    ...state,
    output: message,
    messages: [...state.messages],
  };
}
