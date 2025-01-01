import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Users, GitBranch, CheckSquare, AlertCircle, Clock } from 'lucide-react';

const AIMemoDashboard = () => {
  // Sample timeline data
  const timelineData = [
    { day: 0, tasks: 0 },
    { day: 30, tasks: 8 },
    { day: 60, tasks: 15 },
    { day: 90, tasks: 22 },
    { day: 180, tasks: 30 },
    { day: 270, tasks: 35 },
    { day: 365, tasks: 40 }
  ];

  // Key departments
  const departments = [
    "Department of Defense",
    "Department of Energy",
    "Department of Commerce",
    "Department of State",
    "Department of Homeland Security",
    "National Science Foundation"
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">US National Security Memorandum on AI</h1>
        <p className="text-gray-600">Implementation Analysis Dashboard</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Timeline Chart */}
        <div className="col-span-8 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Directive Implementation Timeline
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" label={{ value: 'Days', position: 'bottom' }} />
                <YAxis label={{ value: 'Directives', angle: -90, position: 'left' }} />
                <Tooltip />
                <Line type="monotone" dataKey="tasks" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="col-span-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Directives</span>
                <CheckSquare className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold mt-2">40+</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Departments</span>
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-2xl font-bold mt-2">30+</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold mb-3 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
              Critical Deadlines
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Initial Assessment</span>
                <span className="font-medium">30 days</span>
              </div>
              <div className="flex justify-between">
                <span>Framework Development</span>
                <span className="font-medium">90 days</span>
              </div>
              <div className="flex justify-between">
                <span>Full Implementation</span>
                <span className="font-medium">180 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Department List */}
        <div className="col-span-12 bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-green-600" />
            Key Implementing Departments
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {departments.map((dept, i) => (
              <div key={i} className="bg-white p-3 rounded border border-gray-200">
                <span className="text-sm font-medium">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMemoDashboard;
