"use client"

import React from 'react';
import { Button } from '@/components/ui/button';

interface NodePaletteProps {
  onAddNode: (nodeType: string) => void;
}

const nodeTypes = [
  { type: 'trigger', label: 'Trigger' },
  { type: 'action', label: 'Action' },
  { type: 'condition', label: 'Condition' },
  { type: 'agent', label: 'Agent' },
];

const NodePalette: React.FC<NodePaletteProps> = ({ onAddNode }) => {
  return (
    <div className="w-64 p-4 bg-secondary">
      <h2 className="text-xl font-semibold mb-4">Node Palette</h2>
      {nodeTypes.map((nodeType) => (
        <Button
          key={nodeType.type}
          variant="outline"
          className="w-full mb-2"
          onClick={() => onAddNode(nodeType.type)}
        >
          {nodeType.label}
        </Button>
      ))}
    </div>
  );
};

export default NodePalette;