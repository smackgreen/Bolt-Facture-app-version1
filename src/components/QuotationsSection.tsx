import React from 'react'
import { FileText, Clock, CheckCircle, AlertCircle, DollarSign, Calendar, TrendingUp, Eye, Trash } from 'lucide-react'

const quotations = [
  {
    id: 'Q1001',
    client: 'Acme Corp',
    total: 4500,
    date: '2023-10-15',
    status: 'pending'
  },
  {
    id: 'Q1002',
    client: 'Globex Corp',
    total: 7800,
    date: '2023-10-18',
    status: 'approved'
  }
]

export default function QuotationsSection() {
  return (
    <div className="space-y-6">
      {/* Quotation Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Quotations</h3>
              <p className="text-3xl font-bold">56</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
              <p className="text-3xl font-bold">$128,500</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">This Month</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Month Value</h3>
              <p className="text-3xl font-bold">$34,500</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quotations List */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Quotations</h2>
        </div>
        <div className="divide-y">
          {quotations.map(quote => (
            <div key={quote.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-100">
                    <FileText className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">{quote.id}</h3>
                    <p className="text-sm text-gray-500">{quote.client}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${quote.total.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{quote.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600">
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
