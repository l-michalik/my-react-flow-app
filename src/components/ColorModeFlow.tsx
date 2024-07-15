import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  Node,
  useNodesState,
  useEdgesState,
  OnConnect,
  Edge,
  MiniMap,
  Background,
  Controls,
  Position,
  MarkerType,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import React from 'react';

const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
};

const initialNodes: Node[] = [
  {
    id: 'A',
    position: { x: 0, y: 0 },
    data: { label: 'Personal Banking Customer' },
    ...nodeDefaults,
  },
  {
    id: 'B',
    position: { x: 0, y: 100 },
    data: { label: 'Internet Banking System' },
    ...nodeDefaults,
  },
  {
    id: 'C',
    position: { x: 0, y: 200 },
    data: { label: 'Mainframe Banking System' },
    ...nodeDefaults,
  },
  {
    id: 'D',
    position: { x: 300, y: 200 },
    data: { label: 'E-mail System' },
    ...nodeDefaults,
  },
];

const initialEdges: Edge[] = [
  {
    type: 'step',
    id: 'A-B',
    source: 'A',
    target: 'B',
    label: '1',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    type: 'step',
    id: 'B-C',
    source: 'B',
    target: 'C',
    label: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    type: 'step',
    id: 'B-D',
    source: 'B',
    label: '3',
    target: 'D',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
  },
  {
    type: 'step',

    label: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    id: 'D-A',
    source: 'D',
    target: 'A',
  },
];

const ColorModeFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      colorMode={'dark'}
      fitView
    >
      <MiniMap />
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default ColorModeFlow;
