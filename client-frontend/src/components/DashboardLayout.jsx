import React, { useState, useEffect } from 'react';
import { getClients, createClient, deleteClient, updateClient } from '../services/api';
import ClientList from './ClientList';
import AddClientModal from './AddClientModal';

const DashboardLayout = () => {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await getClients();
    setClients(res.data);
  };

  const handleDeleteClient = async (id) => {
    await deleteClient(id);
    setClients(clients.filter(client => client._id !== id));
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  const handleSaveClient = async (formData) => {
    if (editingClient) {
      const res = await updateClient(editingClient._id, formData);
      setClients(clients.map(c => (c._id === res.data._id ? res.data : c)));
      setEditingClient(null);
    } else {
      const res = await createClient(formData);
      setClients([...clients, res.data]);
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-[#f9fbfc] min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8 border-b pb-4 border-blue-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0D47A1]">Clients</h1>
        <button
          onClick={() => setShowModal(true)}
          className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + Add Client
        </button>
      </div>

      {clients.length === 0 ? (
        <div className="bg-white border border-dashed border-blue-200 rounded-xl text-center text-[#0D47A1] p-8 sm:p-12 shadow-sm text-sm sm:text-base">
          + Add your first client to get started
        </div>
      ) : (
        <ClientList
          clients={clients}
          onEdit={handleEditClient}
          onDelete={handleDeleteClient}
        />
      )}

      {showModal && (
        <AddClientModal
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
          onAdd={handleSaveClient}
          initialData={editingClient}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
