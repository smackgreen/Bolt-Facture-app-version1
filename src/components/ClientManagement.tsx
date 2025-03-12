import React, { useState } from 'react'
import { User, Plus, Edit, Trash, FileText, File } from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  phone: string
  totalInvoices: number
  totalQuotations: number
  invoices: { id: string; amount: number; date: string }[]
  quotations: { id: string; amount: number; date: string }[]
}

export default function ClientManagement() {
  const [clients] = useState<Client[]>([
    {
      id: '1',
      name: 'Acme Corp',
      email: 'contact@acme.com',
      phone: '+1 234 567 890',
      totalInvoices: 12,
      totalQuotations: 5,
      invoices: [
        { id: 'INV-001', amount: 1200, date: '2023-07-15' },
        { id: 'INV-002', amount: 800, date: '2023-07-20' }
      ],
      quotations: [
        { id: 'QTN-001', amount: 1500, date: '2023-07-10' },
        { id: 'QTN-002', amount: 2000, date: '2023-07-12' }
      ]
    },
    {
      id: '2',
      name: 'Globex Corp',
      email: 'info@globex.com',
      phone: '+1 987 654 321',
      totalInvoices: 8,
      totalQuotations: 3,
      invoices: [
        { id: 'INV-003', amount: 950, date: '2023-07-18' }
      ],
      quotations: [
        { id: 'QTN-003', amount: 1200, date: '2023-07-14' }
      ]
    }
  ])

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Summary Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <User className="w-6 h-6" />
          Client Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Total Clients</p>
            <p className="text-2xl font-bold">{clients.length}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Total Invoices</p>
            <p className="text-2xl font-bold">{clients.reduce((sum, client) => sum + client.totalInvoices, 0)}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Total Quotations</p>
            <p className="text-2xl font-bold">{clients.reduce((sum, client) => sum + client.totalQuotations, 0)}</p>
          </div>
        </div>
      </div>

      {/* Client List */}
      <div className="space-y-6">
        {clients.map(client => (
          <div key={client.id} className="bg-white rounded-lg shadow">
            {/* Client Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.email}</p>
                  <p className="text-sm text-gray-500">{client.phone}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600">
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Client Details */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Invoices Section */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-medium mb-4">
                  <FileText className="w-5 h-5" />
                  Invoices ({client.totalInvoices})
                </h4>
                <div className="space-y-2">
                  {client.invoices.map(invoice => (
                    <div key={invoice.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">#{invoice.id}</p>
                      <p className="text-sm text-gray-500">${invoice.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">{invoice.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quotations Section */}
              <div>
                <h4 className="flex items-center gap-2 text-lg font-medium mb-4">
                  <File className="w-5 h-5" />
                  Quotations ({client.totalQuotations})
                </h4>
                <div className="space-y-2">
                  {client.quotations.map(quotation => (
                    <div key={quotation.id} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">#{quotation.id}</p>
                      <p className="text-sm text-gray-500">${quotation.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">{quotation.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
