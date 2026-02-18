import { motion } from 'motion/react';
import { Coins, Users, Video, TrendingUp, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/card';

export default function DashboardHome() {
  const stats = [
    { icon: Coins, label: 'Total Credits', value: '240', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, label: 'Active Matches', value: '5', color: 'from-blue-500 to-purple-500' },
    { icon: Video, label: 'Sessions Completed', value: '12', color: 'from-green-500 to-teal-500' },
    { icon: TrendingUp, label: 'Skills Learned', value: '3', color: 'from-pink-500 to-rose-500' },
  ];

  const upcomingSessions = [
    {
      id: 1,
      partner: 'Sarah Johnson',
      skill: 'React Development',
      date: '2026-02-19',
      time: '10:00 AM',
      duration: 60,
      type: 'learning',
    },
    {
      id: 2,
      partner: 'Mike Chen',
      skill: 'UI/UX Design',
      date: '2026-02-20',
      time: '2:00 PM',
      duration: 60,
      type: 'teaching',
    },
    {
      id: 3,
      partner: 'Emma Davis',
      skill: 'Python Programming',
      date: '2026-02-21',
      time: '4:00 PM',
      duration: 60,
      type: 'learning',
    },
  ];

  const recentActivity = [
    { type: 'session', text: 'Completed session with John Doe', time: '2 hours ago' },
    { type: 'credit', text: 'Earned 60 credits from teaching session', time: '2 hours ago' },
    { type: 'match', text: 'New match found: Emily Wilson', time: '1 day ago' },
    { type: 'session', text: 'Completed session with Alex Brown', time: '2 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl mb-2">Welcome back! 👋</h1>
        <p className="text-gray-400">Here's what's happening with your skill exchange journey</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Upcoming Sessions
              </h2>
              <Link to="/dashboard/sessions" className="text-sm text-blue-400 hover:text-blue-300">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{session.skill}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          session.type === 'learning' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {session.type === 'learning' ? 'Learning' : 'Teaching'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">with {session.partner}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(session.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {session.time} ({session.duration} min)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'credit' ? 'bg-yellow-500' :
                    activity.type === 'match' ? 'bg-blue-500' :
                    'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">{activity.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Link to="/dashboard/matching">
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 p-6 hover:from-blue-500/20 hover:to-purple-500/20 transition-all cursor-pointer group">
            <Users className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">Find New Matches</h3>
            <p className="text-sm text-gray-400">Connect with peers to exchange skills</p>
          </Card>
        </Link>

        <Link to="/dashboard/profile">
          <Card className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border-green-500/30 p-6 hover:from-green-500/20 hover:to-teal-500/20 transition-all cursor-pointer group">
            <TrendingUp className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">Update Skills</h3>
            <p className="text-sm text-gray-400">Add or modify your skill profile</p>
          </Card>
        </Link>

        <Link to="/dashboard/credits">
          <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30 p-6 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all cursor-pointer group">
            <Coins className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-1">View Credits</h3>
            <p className="text-sm text-gray-400">Check your credit balance and history</p>
          </Card>
        </Link>
      </motion.div>
    </div>
  );
}
