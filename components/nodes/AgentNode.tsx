"use client"

import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const AgentNode = ({ data }: { data: { label: string } }) => {
  return (
    <div className="w-48 h-48 flex flex-col items-center justify-center shadow-md bg-white border-2 border-purple-500" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
      <Handle
        type="target"
        position={Position.Left}
        id="agent-in"
        style={{ left: '0px', top: '50%' }}
      />
      <div className="font-bold text-center mb-2">{data.label}</div>
      <select className="nodrag text-sm p-1 rounded border border-gray-300 w-3/4 mb-2">
        <option>Select agent</option>
        <option>Agent 1</option>
        <option>Agent 2</option>
      </select>
      <Handle
        type="source"
        position={Position.Right}
        id="agent-out"
        style={{ right: '0px', top: '50%' }}
      />
      <div className="flex justify-between w-full px-4">
        <Handle
          type="target"
          position={Position.Bottom}
          id="agent-in1"
          style={{ bottom: '0px', left: '20%' }}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id="agent-in2"
          style={{ bottom: '0px', left: '40%' }}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id="agent-in3"
          style={{ bottom: '0px', left: '60%' }}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          id="agent-in4"
          style={{ bottom: '0px', left: '80%' }}
        />
      </div>
    </div>
  );
};

export default memo(AgentNode);