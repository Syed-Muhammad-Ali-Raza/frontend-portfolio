import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/admin', label: 'Dashboard', icon: 'LayoutDashboard' },
    { path: '/admin/personal-info', label: 'Personal Info', icon: 'User' },
    { path: '/admin/skills', label: 'Skills', icon: 'Code' },
    { path: '/admin/projects', label: 'Projects', icon: 'FolderOpen' },
    { path: '/admin/contact', label: 'Contact', icon: 'Mail' },
    { path: '/admin/social', label: 'Social Links', icon: 'Share2' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Portfolio CMS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} className="mr-3" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
