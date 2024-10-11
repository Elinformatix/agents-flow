"use client"

import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const ConditionNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="w-40 h-40 flex flex-col items-center justify-center shadow-md bg-white border-2 border-yellow-500" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
      <Handle
        type="target"
        position={Position.Top}
        style={{ top: '0px', left: '50%' }}
        id="condition-in"
      />
      <div className="font-bold text-center mb-2">{data.label}</div>
      <input
        className="nodrag text-sm p-1 rounded border border-gray-300 w-3/4 mb-2"
        placeholder="Condition"
      />
      <div className="flex justify-between w-full px-4">
        <Handle
          type="source"
          position={Position.Bottom}
          id="condition-true"
          style={{ bottom: '0px', left: '25%' }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="condition-false"
          style={{ bottom: '0px', left: '75%' }}
        />
      </div>
    </div>
  );
};

export default memo(ConditionNode);