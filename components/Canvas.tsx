"use client"

import React from 'react';
import { Node } from '@/types/workflow';
import WorkflowNode from './WorkflowNode';

interface CanvasProps {
  nodes: Node[];
  updateNodePosition: (id: string, x: number, y: number) => void;
}

const Canvas: React.FC<CanvasProps> = ({ nodes, updateNodePosition }) => {
  return (
    <div className="flex-1 h-[600px] bg-background border-2 border-dashed border-muted-foreground p-4 relative">
      {nodes.map((node) => (
        <WorkflowNode key={node.id} node={node} updateNodePosition={updateNodePosition} />
      ))}
    </div>
  );
};

export default Canvas;