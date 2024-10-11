"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Node } from '@/types/workflow';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkflowNodeProps {
  node: Node;
  updateNodePosition: (id: string, x: number, y: number) => void;
}

const WorkflowNode: React.FC<WorkflowNodeProps> = ({ node, updateNodePosition }) => {
  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && nodeRef.current) {
        const rect = nodeRef.current.getBoundingClientRect();
        updateNodePosition(node.id, e.clientX - rect.width / 2, e.clientY - rect.height / 2);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, node.id, updateNodePosition]);

  return (
    <div
      ref={nodeRef}
      style={{
        position: 'absolute',
        left: node.x,
        top: node.y,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={() => setIsDragging(true)}
    >
      <Card className="w-48">
        <CardHeader>
          <CardTitle>{node.type}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default WorkflowNode;