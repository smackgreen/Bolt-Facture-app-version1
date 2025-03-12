import React from 'react'
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface Invoice {
  id: string
  clientName: string
  date: string
  status: 'pending' | 'paid' | 'overdue'
  total: number
}

interface InvoiceListProps {
  invoices: Invoice[]
}

export default function InvoiceList({ invoices }: InvoiceListProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'paid':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <FileText className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      {invoices.map(invoice => (
        <div key={invoice.id} className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getStatusIcon(invoice.status)}
              <div>
                <h3 className="font-medium">{invoice.clientName}</h3>
                <p className="text-sm text-gray-500">{invoice.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${invoice.total.toFixed(2)}</p>
              <p className={`text-sm ${
                invoice.status === 'pending' ? 'text-yellow-600' :
                invoice.status === 'paid' ? 'text-green-600' :
                'text-red-600'
              }`}>
                {invoice.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
