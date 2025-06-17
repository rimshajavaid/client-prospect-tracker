import React from 'react';
import ClientCard from './ClientCard';

const ClientList = ({ clients, onEdit, onDelete }) => {
  return (
    <div>
      {/* Table for Desktop */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg border border-blue-100">
        <table className="min-w-full bg-white text-sm text-gray-800">
          <thead className="bg-[#e3f2fd] text-[#0D47A1] border-b border-blue-200">
            <tr>
              <th className="text-left py-4 px-5 font-semibold">Name</th>
              <th className="text-left py-4 px-5 font-semibold">Domain</th>
              <th className="text-left py-4 px-5 font-semibold">Status</th>
              <th className="text-left py-4 px-5 font-semibold">Last Contacted</th>
              <th className="text-left py-4 px-5 font-semibold">Tags</th>
              <th className="text-center py-4 px-5 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client._id}
                className="border-b border-blue-100 hover:bg-blue-50 transition duration-200"
              >
                <td className="py-4 px-5">{client.name}</td>
                <td className="py-4 px-5">{client.domain}</td>
                <td className="py-4 px-5">{client.status}</td>
                <td className="py-4 px-5">
                  {new Date(client.lastContacted).toLocaleDateString()}
                </td>
                <td className="py-4 px-5">
                  {client.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#bbdefb] text-[#0D47A1] text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="py-4 px-5 text-right space-x-2">
                  <button
                    onClick={() => onEdit(client)}
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(client._id)}
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for Mobile */}
      <div className="md:hidden space-y-4">
        {clients.map((client) => (
          <ClientCard
            key={client._id}
            client={client}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientList;
