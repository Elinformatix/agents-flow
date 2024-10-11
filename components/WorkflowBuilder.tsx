"use client"

import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  Connection,
  Edge,
} from 'react-flow-renderer';
import NodePalette from './NodePalette';
import { Node } from '@/types/workflow';
import TriggerNode from './nodes/TriggerNode';
import ActionNode from './nodes/ActionNode';
import ConditionNode from './nodes/ConditionNode';
import AgentNode from './nodes/AgentNode';
import NodeEditModal from './NodeEditModal';

const WorkflowBuilder: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [editingNode, setEditingNode] = useState<Node | null>(null);

  const nodeTypes = useMemo(() => ({
    trigger: TriggerNode,
    action: ActionNode,
    condition: ConditionNode,
    agent: AgentNode,
  }), []);

  const onConnect = useCallback((params: Connection) => 
    setEdges((eds) => addEdge(params, eds)), []);

  const onNodesChange = useCallback((changes: any) => {
    setNodes((nds) => {
      return nds.map((node) => {
        const change = changes.find((c: any) => c.id === node.id);
        if (change) {
          return { ...node, ...change };
        }
        return node;
      });
    });
  }, []);

  const onEdgesChange = useCallback((changes: any) => {
    setEdges((eds) => {
      return eds.map((edge) => {
        const change = changes.find((c: any) => c.id === edge.id);
        if (change) {
          return { ...edge, ...change };
        }
        return edge;
      });
    });
  }, []);

  const addNode = (nodeType: string) => {
    const newNode: Node = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,
      position: { x: 100, y: 100 },
      data: { label: `${nodeType} node` },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onNodeDoubleClick = (event: React.MouseEvent, node: Node) => {
    setEditingNode(node);
  };

  const handleNodeEdit = (editedNode: Node) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === editedNode.id ? editedNode : node))
    );
    setEditingNode(null);
  };

  return (
    <div className="flex h-screen">
      <NodePalette onAddNode={addNode} />
      <div className="flex-grow">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeDoubleClick={onNodeDoubleClick}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      {editingNode && (
        <NodeEditModal
          node={editingNode}
          onSave={handleNodeEdit}
          onClose={() => setEditingNode(null)}
        />
      )}
    </div>
  );
};

export default WorkflowBuilder;