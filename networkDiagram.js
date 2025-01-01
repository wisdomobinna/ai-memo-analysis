import React from 'react';
import { Shield, Globe, Building, Cpu, Users, Lock, Book, Cog } from 'lucide-react';

const NetworkDiagram = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">National Security Memorandum on AI</h2>
        <p className="text-gray-600 mt-2">Implementation Structure and Dependencies</p>
      </div>

      <div className="relative w-full h-[800px] overflow-hidden">
        {/* Core Center Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 rounded-full bg-blue-50 border-4 border-blue-200 flex items-center justify-center p-4 shadow-lg">
            <div className="text-center">
              <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-lg">US Leadership in AI</div>
              <div className="text-sm text-gray-600 mt-1">Core Objectives</div>
            </div>
          </div>
        </div>

        {/* Primary Nodes */}
        {[
          {
            icon: Shield,
            title: "Safety & Security",
            color: "red",
            angle: 0,
            subNodes: ["Model Testing", "Risk Assessment", "Security Standards"]
          },
          {
            icon: Globe,
            title: "International Cooperation",
            color: "green",
            angle: 72,
            subNodes: ["Bilateral Agreements", "Global Standards", "Joint Research"]
          },
          {
            icon: Building,
            title: "Agency Implementation",
            color: "purple",
            angle: 144,
            subNodes: ["Policy Guidelines", "Resource Planning", "Timeline Goals"]
          },
          {
            icon: Book,
            title: "Research & Development",
            color: "orange",
            angle: 216,
            subNodes: ["Technical Innovation", "Infrastructure", "Capabilities"]
          },
          {
            icon: Users,
            title: "Stakeholder Engagement",
            color: "indigo",
            angle: 288,
            subNodes: ["Industry Input", "Public Feedback", "Academic Partnership"]
          }
        ].map((node, index) => {
          const radius = 300;
          const angleRad = (node.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;
          const Icon = node.icon;

          return (
            <div key={index}>
              {/* Primary Node */}
              <div 
                className="absolute w-40 h-40 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`
                }}
              >
                {/* Connection Line to Center */}
                <div 
                  className="absolute top-1/2 left-1/2 h-1 bg-gray-200"
                  style={{
                    width: `${radius}px`,
                    transform: `rotate(${node.angle}deg)`,
                    transformOrigin: 'left center'
                  }}
                />

                {/* Node Content */}
                <div className={`w-full h-full rounded-full bg-${node.color}-50 border-2 border-${node.color}-200 
                               flex flex-col items-center justify-center p-4 shadow-lg z-10 relative`}>
                  <Icon className={`w-8 h-8 text-${node.color}-600 mb-2`} />
                  <div className="text-center">
                    <div className="font-semibold">{node.title}</div>
                    <div className="text-xs text-gray-600 mt-1">30-180 Days</div>
                  </div>
                </div>

                {/* Sub Nodes */}
                {node.subNodes.map((subNode, subIndex) => {
                  const subRadius = 120;
                  const subAngle = angleRad + ((subIndex - 1) * 0.4);
                  const subX = x + Math.cos(subAngle) * subRadius;
                  const subY = y + Math.sin(subAngle) * subRadius;

                  return (
                    <div
                      key={subIndex}
                      className="absolute w-32 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: subX,
                        top: subY
                      }}
                    >
                      <div className={`bg-white rounded-lg p-3 shadow-md border border-${node.color}-200
                                    text-sm text-center`}>
                        {subNode}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex justify-center items-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
          <span>Core Objectives</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-2" />
          <span>Dependencies</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          <span>Implementation Areas</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkDiagram;
