"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Node } from '@/types/workflow';

interface NodeEditModalProps {
  node: Node;
  onSave: (editedNode: Node) => void;
  onClose: () => void;
}

const NodeEditModal: React.FC<NodeEditModalProps> = ({ node, onSave, onClose }) => {
  const [label, setLabel] = useState(node.data.label);

  const handleSave = () => {
    const editedNode = {
      ...node,
      data: { ...node.data, label },
    };
    onSave(editedNode);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {node.type} Node</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Node Label"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NodeEditModal;