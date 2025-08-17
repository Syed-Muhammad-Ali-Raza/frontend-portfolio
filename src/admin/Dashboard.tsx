import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import { PERSONAL_INFO, SKILLS, PROJECTS, SOCIAL_LINKS } from '../data/portfolio';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Skills',
      value: SKILLS.length,
      icon: 'Code',
      color: 'bg-blue-500',
      link: '/admin/skills'
    },
    {
      title: 'Total Projects',
      value: PROJECTS.length,
      icon: 'FolderOpen',
      color: 'bg-green-500',
      link: '/admin/projects'
    },
    {
      title: 'Social Links',
      value: SOCIAL_LINKS.length,
      icon: 'Share2',
      color: 'bg-purple-500',
      link: '/admin/social'
    },
    {
      title: 'Featured Projects',
      value: PROJECTS.filter(p => p.featured).length,
      icon: 'Star',
      color: 'bg-yellow-500',
      link: '/admin/projects'
    }
  ];

  const recentUpdates = [
    {
      title: 'Personal Information',
      description: 'Update your name, title, and contact details',
      icon: 'User',
      link: '/admin/personal-info'
    },
    {
      title: 'Skills Management',
      description: 'Add, edit, or remove your technical skills',
      icon: 'Code',
      link: '/admin/skills'
    },
    {
      title: 'Project Portfolio',
      description: 'Manage your projects and showcase your work',
      icon: 'FolderOpen',
      link: '/admin/projects'
    },
    {
      title: 'Contact Settings',
      description: 'Configure contact information and form settings',
      icon: 'Mail',
      link: '/admin/contact'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome back, {PERSONAL_INFO.name}!
        </h1>
        <p className="text-gray-600">
          Manage your portfolio content and keep it up to date with the latest information.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon name={stat.icon as any} size={24} className="text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Updates */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            {recentUpdates.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon name={item.icon as any} size={20} className="text-gray-600" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <Icon name="ChevronRight" size={16} className="text-gray-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Portfolio Preview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Preview</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900">{PERSONAL_INFO.name}</h3>
              <p className="text-sm text-gray-600">{PERSONAL_INFO.title}</p>
              <p className="text-sm text-gray-600 mt-2">{PERSONAL_INFO.bio}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last updated</p>
                <p className="font-medium text-gray-900">Today</p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
              >
                <Icon name="Eye" size={16} className="mr-2" />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
