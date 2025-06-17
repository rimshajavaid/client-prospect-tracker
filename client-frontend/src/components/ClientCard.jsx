import React from 'react';

const ClientCard = ({ client, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm space-y-3">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{client.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Domain:</strong> {client.domain}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Status:</strong> {client.status}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Last Contacted:</strong> {new Date(client.lastContacted).toLocaleDateString()}
      </p>

      <div className="flex flex-wrap justify-start gap-2 pt-2">
        <button
          onClick={() => onEdit(client)}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-lg shadow transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(client._id)}
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br rounded-lg shadow transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
