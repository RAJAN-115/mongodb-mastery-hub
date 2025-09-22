
import React from 'react';

interface MindMapNodeProps {
  title: string;
  children?: React.ReactNode;
  level: 1 | 2 | 3;
  className?: string;
}

const Node: React.FC<MindMapNodeProps> = ({ title, children, level, className }) => {
  const levelStyles = {
    1: "bg-brand-green text-slate-900 text-xl font-bold p-6",
    2: "bg-slate-700 text-slate-100 text-lg font-semibold p-4",
    3: "bg-slate-800 border border-slate-700 text-slate-300 p-3 text-sm",
  };

  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      <div className={`${levelStyles[level]} rounded-xl shadow-lg text-center min-w-[150px]`}>
        {title}
      </div>
      {children && (
        <div className="flex justify-center items-start pt-16 space-x-8 relative">
          <div className="absolute top-0 h-16 w-0.5 bg-slate-600"></div>
          {children}
        </div>
      )}
    </div>
  );
};

interface BranchProps {
  children: React.ReactNode;
}

const Branch: React.FC<BranchProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute -top-16 h-16 w-0.5 bg-slate-600 group-hover:bg-brand-green transition-colors"></div>
      <div className="absolute -top-16 w-full h-0.5 bg-slate-600 group-hover:bg-brand-green transition-colors"></div>
      {children}
    </div>
  );
};


const MindMapView: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 animate-fade-in overflow-x-auto">
            <header className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">MongoDB Ecosystem Mind Map</h2>
                <p className="text-slate-400 mt-1">Visualize the core concepts and architecture.</p>
            </header>
            
            <div className="flex justify-center">
                <Node title="MongoDB Ecosystem" level={1}>
                    <Branch>
                        <Node title="Core Architecture" level={2}>
                            <Branch><Node title="Replica Sets" level={3} /></Branch>
                            <Branch><Node title="Sharding" level={3} /></Branch>
                            <Branch><Node title="Storage Engines" level={3} /></Branch>
                            <Branch><Node title="mongod / mongos" level={3} /></Branch>
                        </Node>
                    </Branch>
                    <Branch>
                        <Node title="Data Modeling" level={2}>
                             <Branch><Node title="Embedded" level={3} /></Branch>
                             <Branch><Node title="Referencing" level={3} /></Branch>
                             <Branch><Node title="Patterns" level={3} /></Branch>
                        </Node>
                    </Branch>
                    <Branch>
                        <Node title="Querying" level={2}>
                            <Branch><Node title="CRUD Ops" level={3} /></Branch>
                            <Branch><Node title="Aggregation" level={3} /></Branch>
                            <Branch><Node title="Indexing" level={3} /></Branch>
                        </Node>
                    </Branch>
                    <Branch>
                        <Node title="Tooling" level={2}>
                           <Branch><Node title="Compass" level={3} /></Branch>
                           <Branch><Node title="Atlas" level={3} /></Branch>
                           <Branch><Node title="Shell (mongosh)" level={3} /></Branch>
                        </Node>
                    </Branch>
                </Node>
            </div>
        </div>
    );
};

export default MindMapView;
