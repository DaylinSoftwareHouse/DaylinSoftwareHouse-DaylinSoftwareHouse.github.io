interface FeatureCardProps {
  name: string;
  image?: string;
  children: React.ReactNode;
}

export function FeatureCard({ name, image, children }: FeatureCardProps) {
  return <div className="flex flex-col bg-red-500 p-10 max-w-100 min-h-125 shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
    <div className="text-2xl font-bold text-white text-center">{ name }</div>
    
    <div style={{ height: 15 }} />
  
    <img
      src="/code_1.png"
      alt="Code example"
      className="w-full max-w-xs rounded shadow-lg border-2 border-white"
    />

    <div style={{ height: 15 }} />
  
    <div className="text-lg font-normal text-white break-words max-w-100 text-center">
      { children }
    </div>
  </div>;
}