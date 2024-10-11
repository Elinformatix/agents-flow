"use client"

import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const TriggerNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="w-32 h-32 flex flex-col items-center justify-center shadow-md bg-white border-2 border-blue-500 rounded-full">
      <div className="font-bold text-center mb-2">{data.label}</div>
      <input
        className="nodrag text-sm p-1 rounded border border-gray-300 w-3/4"
        placeholder="Trigger input"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ right: '-8px' }}
        id="trigger-out"
      />
    </div>
  );
};

export default memo(TriggerNode);