import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolio';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

const SocialLinks: React.FC = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(
    SOCIAL_LINKS.map((link, index) => ({ ...link, id: index.toString() }))
  );
  const [isAdding, setIsAdding] = useState(false);
  const [editingLink, setEditingLink] = useState<SocialLink | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [newLink, setNewLink] = useState<Omit<SocialLink, 'id'>>({
    name: '',
    url: '',
    icon: 'Link'
  });

  const iconOptions = [
    'Linkedin', 'Github', 'Twitter', 'Dribbble', 'Instagram', 'Facebook', 'YouTube',
    'Twitch', 'Discord', 'Slack', 'Medium', 'Dev', 'StackOverflow', 'Reddit'
  ];

  const handleAddLink = () => {
    if (newLink.name.trim() && newLink.url.trim()) {
      const link: SocialLink = {
        ...newLink,
        id: Date.now().toString()
      };
      setSocialLinks(prev => [...prev, link]);
      setNewLink({ name: '', url: '', icon: 'Link' });
      setIsAdding(false);
    }
  };

  const handleEditLink = (link: SocialLink) => {
    setEditingLink(link);
  };

  const handleSaveEdit = () => {
    if (editingLink && editingLink.name.trim() && editingLink.url.trim()) {
      setSocialLinks(prev => prev.map(link => 
        link.id === editingLink.id ? editingLink : link
      ));
      setEditingLink(null);
    }
  };

  const handleDeleteLink = (id: string) => {
    if (window.confirm('Are you sure you want to delete this social link?')) {
      setSocialLinks(prev => prev.filter(link => link.id !== id));
    }
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Saving social links:', socialLinks);
      alert('Social links saved successfully!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Error saving social links');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Social Links Management</h1>
          <p className="text-gray-600">Manage your social media and professional links</p>
        </div>
        <Button
          variant="primary"
          onClick={handleSaveAll}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Icon name="Save" size={16} className="mr-2" />
              Save All Changes
            </>
          )}
        </Button>
      </div>

      {/* Add New Social Link */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Add New Social Link</h2>
          <Button
            variant="outline"
            onClick={() => setIsAdding(!isAdding)}
          >
            {isAdding ? (
              <>
                <Icon name="X" size={16} className="mr-2" />
                Cancel
              </>
            ) : (
              <>
                <Icon name="Plus" size={16} className="mr-2" />
                Add Link
              </>
            )}
          </Button>
        </div>

        {isAdding && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Platform name (e.g., LinkedIn)"
              value={newLink.name}
              onChange={(e) => setNewLink(prev => ({ ...prev, name: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="url"
              placeholder="Profile URL"
              value={newLink.url}
              onChange={(e) => setNewLink(prev => ({ ...prev, url: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={newLink.icon}
              onChange={(e) => setNewLink(prev => ({ ...prev, icon: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {iconOptions.map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>

            <div className="md:col-span-3 flex justify-end">
              <Button
                variant="primary"
                onClick={handleAddLink}
                disabled={!newLink.name.trim() || !newLink.url.trim()}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Add Link
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Social Links List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Current Social Links ({socialLinks.length})</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {socialLinks.map((link) => (
            <div key={link.id} className="p-6">
              {editingLink?.id === link.id ? (
                // Edit Mode
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <input
                    type="text"
                    placeholder="Platform name"
                    value={editingLink.name}
                    onChange={(e) => setEditingLink(prev => prev ? { ...prev, name: e.target.value } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <input
                    type="url"
                    placeholder="Profile URL"
                    value={editingLink.url}
                    onChange={(e) => setEditingLink(prev => prev ? { ...prev, url: e.target.value } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />

                  <select
                    value={editingLink.icon}
                    onChange={(e) => setEditingLink(prev => prev ? { ...prev, icon: e.target.value } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSaveEdit}
                      disabled={!editingLink.name.trim() || !editingLink.url.trim()}
                    >
                      <Icon name="Check" size={14} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingLink(null)}
                    >
                      <Icon name="X" size={14} />
                    </Button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <Icon name={link.icon as any} size={20} className="text-gray-600" />
                    <span className="font-medium">{link.name}</span>
                  </div>
                  
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 truncate"
                  >
                    {link.url}
                  </a>
                  
                  <span className="text-sm text-gray-600">{link.icon}</span>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditLink(link)}
                    >
                      <Icon name="Edit" size={14} className="mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteLink(link.id)}
                    >
                      <Icon name="Trash2" size={14} className="mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Add Presets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Add Common Platforms</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/' },
            { name: 'GitHub', icon: 'Github', url: 'https://github.com/' },
            { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/' },
            { name: 'Dribbble', icon: 'Dribbble', url: 'https://dribbble.com/' },
            { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/' },
            { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/' },
            { name: 'Medium', icon: 'BookOpen', url: 'https://medium.com/@' },
            { name: 'Dev.to', icon: 'Code', url: 'https://dev.to/' }
          ].map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setNewLink({ name: preset.name, url: preset.url, icon: preset.icon });
                setIsAdding(true);
              }}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
            >
              <div className="flex items-center space-x-2">
                <Icon name={preset.icon as any} size={16} className="text-gray-600" />
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
