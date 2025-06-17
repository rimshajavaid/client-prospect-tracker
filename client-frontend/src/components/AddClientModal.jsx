import React, { useState, useEffect } from 'react';

const AddClientModal = ({ onClose, onAdd, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: '',
      domain: '',
      status: '',
      lastContacted: '',
      tags: [],
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-[95%] sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-100 transition-all">
        <h2 className="text-2xl font-bold text-[#0D47A1] mb-6">Client</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Domain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0D47A1] mb-1">Client Name</label>
              <input
                name="name"
                placeholder="Enter client name"
                className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D47A1] bg-white text-gray-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D47A1] mb-1">Domain</label>
              <input
                name="domain"
                placeholder="Enter domain"
                className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D47A1] bg-white text-gray-800"
                value={formData.domain}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Status + Last Contacted */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0D47A1] mb-1">Status</label>
              <input
                name="status"
                placeholder="e.g. Contacted, Follow-up"
                className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D47A1] bg-white text-gray-800"
                value={formData.status}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D47A1] mb-1">Last Contacted</label>
              <input
                type="date"
                name="lastContacted"
                className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D47A1] bg-white text-gray-800"
                value={formData.lastContacted}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-[#0D47A1] mb-1">Tags</label>
            <input
              name="tags"
              placeholder="Tags (comma separated)"
              className="w-full border border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D47A1] bg-white text-gray-800"
              value={formData.tags}
              onChange={(e) =>
                setFormData(prev => ({
                  ...prev,
                  tags: e.target.value.split(',').map(tag => tag.trim()),
                }))
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
