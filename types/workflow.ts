import { Node as ReactFlowNode, Edge } from 'react-flow-renderer';

export interface Node extends ReactFlowNode {
  // Add any additional properties specific to your nodes
}

export interface Connection extends Edge {
  // Add any additional properties specific to your connections
}