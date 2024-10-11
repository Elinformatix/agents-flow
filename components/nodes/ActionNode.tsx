"use client"

import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const ActionNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="w-40 h-32 flex flex-col items-center justify-center shadow-md bg-white border-2 border-green-500">
      <Handle
        type="target"
        position={Position.Left}
        style={{ left: '-8px' }}
        id="action-in"
      />
      <div className="font-bold text-center mb-2">{data.label}</div>
      <select className="nodrag text-sm p-1 rounded border border-gray-300 w-3/4 mb-2">
        <option>Select action</option>
        <option>Action 1</option>
        <option>Action 2</option>
      </select>
      <Handle
        type="source"
        position={Position.Right}
        style={{ right: '-8px' }}
        id="action-out"
      />
    </div>
  );
};

export default memo(ActionNode);