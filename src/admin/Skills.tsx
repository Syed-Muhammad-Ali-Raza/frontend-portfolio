import React, { useState } from 'react';
import { SKILLS } from '../data/portfolio';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  proficiency: number;
  icon: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>(
    SKILLS.map((skill, index) => ({ ...skill, id: index.toString() }))
  );
  const [isAdding, setIsAdding] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [newSkill, setNewSkill] = useState<Omit<Skill, 'id'>>({
    name: '',
    category: 'frontend',
    proficiency: 80,
    icon: 'Code'
  });

  const categories = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'tools', label: 'Development Tools' },
    { value: 'design', label: 'Design Tools' }
  ];

  const iconOptions = [
    'Code', 'FileCode', 'Palette', 'FileType', 'Atom', 'ArrowRight', 'Circle', 'Zap',
    'Wind', 'Scissors', 'Component', 'Layers', 'Database', 'Package', 'RefreshCw',
    'RotateCcw', 'GitBranch', 'CheckCircle', 'TestTube', 'Beaker', 'Shield',
    'PenTool', 'Edit', 'Move', 'Play'
  ];

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      const skill: Skill = {
        ...newSkill,
        id: Date.now().toString()
      };
      setSkills(prev => [...prev, skill]);
      setNewSkill({ name: '', category: 'frontend', proficiency: 80, icon: 'Code' });
      setIsAdding(false);
    }
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
  };

  const handleSaveEdit = () => {
    if (editingSkill && editingSkill.name.trim()) {
      setSkills(prev => prev.map(skill => 
        skill.id === editingSkill.id ? editingSkill : skill
      ));
      setEditingSkill(null);
    }
  };

  const handleDeleteSkill = (id: string) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      setSkills(prev => prev.filter(skill => skill.id !== id));
    }
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Saving skills:', skills);
      alert('Skills saved successfully!');
    } catch (error) {
      console.error('Save error:', error);
      alert('Error saving skills');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Skills Management</h1>
          <p className="text-gray-600">Manage your technical skills and expertise</p>
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

      {/* Add New Skill */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Add New Skill</h2>
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
                Add Skill
              </>
            )}
          </Button>
        </div>

        {isAdding && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Skill name"
              value={newSkill.name}
              onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            
            <select
              value={newSkill.category}
              onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value as any }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>

            <select
              value={newSkill.icon}
              onChange={(e) => setNewSkill(prev => ({ ...prev, icon: e.target.value }))}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {iconOptions.map(icon => (
                <option key={icon} value={icon}>{icon}</option>
              ))}
            </select>

            <div className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={newSkill.proficiency}
                onChange={(e) => setNewSkill(prev => ({ ...prev, proficiency: parseInt(e.target.value) }))}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12">{newSkill.proficiency}%</span>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <Button
                variant="primary"
                onClick={handleAddSkill}
                disabled={!newSkill.name.trim()}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Add Skill
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Skills List */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Current Skills ({skills.length})</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {skills.map((skill) => (
            <div key={skill.id} className="p-6">
              {editingSkill?.id === skill.id ? (
                // Edit Mode
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <input
                    type="text"
                    value={editingSkill.name}
                    onChange={(e) => setEditingSkill(prev => prev ? { ...prev, name: e.target.value } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <select
                    value={editingSkill.category}
                    onChange={(e) => setEditingSkill(prev => prev ? { ...prev, category: e.target.value as any } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>

                  <select
                    value={editingSkill.icon}
                    onChange={(e) => setEditingSkill(prev => prev ? { ...prev, icon: e.target.value } : null)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>

                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={editingSkill.proficiency}
                      onChange={(e) => setEditingSkill(prev => prev ? { ...prev, proficiency: parseInt(e.target.value) } : null)}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-12">{editingSkill.proficiency}%</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSaveEdit}
                      disabled={!editingSkill.name.trim()}
                    >
                      <Icon name="Check" size={14} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingSkill(null)}
                    >
                      <Icon name="X" size={14} />
                    </Button>
                  </div>
                </div>
              ) : (
                // View Mode
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <Icon name={skill.icon as any} size={20} className="text-gray-600" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  
                  <span className="text-sm text-gray-600">
                    {categories.find(cat => cat.value === skill.category)?.label}
                  </span>
                  
                  <span className="text-sm text-gray-600">{skill.icon}</span>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-12">{skill.proficiency}%</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditSkill(skill)}
                    >
                      <Icon name="Edit" size={14} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteSkill(skill.id)}
                    >
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
