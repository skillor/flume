import { FlumeNode } from "./types";

export const checkForCircularNodes = (
  nodes: { [nodeId: string]: FlumeNode },
  startNodeId: string
) => {
  let isCircular = false;
  const walk = (nodeId: string) => {
    const outputs = Object.values(nodes[nodeId].connections.outputs);
    for (var i = 0; i < outputs.length; i++) {
      if (isCircular) {
        break;
      }
      const outputConnections = outputs[i];
      for (var k = 0; k < outputConnections.length; k++) {
        const connectedTo = outputConnections[k];
        if (connectedTo.nodeId === startNodeId) {
          isCircular = true;
          break;
        } else {
          walk(connectedTo.nodeId);
        }
      }
    }
  };
  walk(startNodeId);
  return isCircular;
};
