import React from 'react';
import { Circle, ArrowRight, GitBranch, Clock, FileText, Users } from 'lucide-react';

const ComplexityMap = () => {
  return (
    <div className="bg-white p-8 w-full min-h-[600px] relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">National Security Memorandum on AI</h2>
        <p className="text-gray-600">Implementation Complexity Analysis</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Timeline */}
        <div className="border-r border-gray-200 pr-6">
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Directive Timeline
          </h3>
          <div className="space-y-4">
            {[30, 60, 90, 180].map(days => (
              <div key={days} className="flex items-center">
                <div className="w-12 text-sm text-gray-500">{days}d</div>
                <div className="flex-grow h-1 bg-gray-100 rounded">
                  <div 
                    className="h-full bg-blue-500 rounded" 
                    style={{width: `${100 - (days/180)*100}%`}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Department Structure */}
        <div className="border-r border-gray-200 px-6">
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <Users className="w-5 h-5 mr-2 text-orange-600" />
            Department Network
          </h3>
          <div className="relative h-48">
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-xs text-center">Core<br/>Agencies</span>
              </div>
            </div>
            {/* Satellite Nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div 
                key={i}
                className="absolute w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                style={{
                  top: `${50 + 35 * Math.sin(angle * Math.PI / 180)}%`,
                  left: `${50 + 35 * Math.cos(angle * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span className="text-xs">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Complexity Metrics */}
        <div className="pl-6">
          <h3 className="flex items-center text-lg font-semibold mb-4">
            <GitBranch className="w-5 h-5 mr-2 text-green-600" />
            Implementation Matrix
          </h3>
          <div className="space-y-4">
            {[
              {label: 'Explicit Directives', value: 30},
              {label: 'Implicit Tasks', value: 'Multiple'},
              {label: 'Cross-Agency', value: '15+'},
              {label: 'Dependencies', value: '25+'}
            ].map((metric, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded">
                <div className="text-sm font-medium">{metric.label}</div>
                <div className="text-lg font-bold text-gray-700">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Legend */}
      <div className="mt-8 pt-4 border-t border-gray-200 flex justify-center space-x-6 text-sm text-gray-600">
        <span className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" /> Timeline Markers
        </span>
        <span className="flex items-center">
          <div className="w-3 h-3 bg-orange-100 rounded-full mr-2" /> Agency Groups
        </span>
        <span className="flex items-center">
          <div className="w-3 h-3 bg-gray-100 rounded-full mr-2" /> Satellite Agencies
        </span>
      </div>
    </div>
  );
};

export default ComplexityMap;
