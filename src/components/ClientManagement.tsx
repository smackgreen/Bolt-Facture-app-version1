import React, { useState } from 'react'
import { User, Plus, Edit, Trash } from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  phone: string
}

export default function ClientManagement() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Acme Corp',
      email: 'contact@acme.com',
      phone: '+1 234 567 890'
    }
  ])

  const handleDeleteClient = (id: string) => {
    setClients(prev => prev.filter(client => client.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <User className="w-6 h-6" />
        Client Management
      </h2>

      <div className="space-y-4">
        {clients.map(client => (
          <div key={client.id} className="flex items-center justify-between p-4 border rounded">
            <div>
              <h3 className="font-medium">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.email}</p>
              <p className="text-sm text-gray-500">{client.phone}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-gray-500 hover:text-blue-600">
                <Edit className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleDeleteClient(client.id)}
                className="p-2 text-gray-500 hover:text-red-600"
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}

        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
          <Plus className="w-5 h-5" />
          Add New Client
        </button>
      </div>
    </div>
  )
}
