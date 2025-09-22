
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PROGRESS_DATA } from '../../constants';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex items-center gap-4 animate-fade-in">
        <div className="p-3 bg-slate-700/50 rounded-lg text-brand-green">{icon}</div>
        <div>
            <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const Dashboard: React.FC = () => {
    const totalCompletion = PROGRESS_DATA.reduce((acc, item) => acc + item.completed, 0);
    const averageCompletion = Math.round(totalCompletion / PROGRESS_DATA.length);

    return (
        <div className="space-y-8">
            <header className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
                <p className="text-slate-400 mt-1">Here's your learning progress at a glance.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Overall Progress" value={`${averageCompletion}%`} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>} />
                <StatCard title="Quizzes Taken" value="12" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>} />
                <StatCard title="Flashcards Reviewed" value="84" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>} />
                <StatCard title="Study Streak" value="5 Days" icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0122 12c0 3-1 6-3 6-1.5 0-2.5-1.333-4.343-4.343z"></path></svg>} />
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <h3 className="text-xl font-bold text-white mb-4">Topic Completion</h3>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={PROGRESS_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey="name" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" unit="%" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f1f5f9' }}
                                cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}
                            />
                            <Bar dataKey="completed" radius={[4, 4, 0, 0]}>
                                {PROGRESS_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
