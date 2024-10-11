import dynamic from 'next/dynamic';

const WorkflowBuilder = dynamic(() => import('@/components/WorkflowBuilder'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Workflow Automation Platform</h1>
      <WorkflowBuilder />
    </div>
  );
}