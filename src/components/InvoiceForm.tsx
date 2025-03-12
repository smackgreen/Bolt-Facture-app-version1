import React, { useState } from 'react'
import { Plus, FileText, User, Calendar, DollarSign } from 'lucide-react'

interface InvoiceFormProps {
  onSubmit: (data: InvoiceData) => void
}

interface InvoiceData {
  clientName: string
  date: string
  items: Array<{
    description: string
    quantity: number
    price: number
  }>
}

export default function InvoiceForm({ onSubmit }: InvoiceFormProps) {
  const [formData, setFormData] = useState<InvoiceData>({
    clientName: '',
    date: new Date().toISOString().split('T')[0],
    items: []
  })

  const handleAddItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, price: 0 }]
    }))
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText className="w-6 h-6" />
        Create New Invoice
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <User className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Client Name"
            className="flex-1 p-2 border rounded"
            value={formData.clientName}
            onChange={e => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
          />
        </div>

        <div className="flex items-center gap-4">
          <Calendar className="w-5 h-5 text-gray-500" />
          <input
            type="date"
            className="p-2 border rounded"
            value={formData.date}
            onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
          />
        </div>

        <div className="space-y-4">
          {formData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Description"
                className="p-2 border rounded"
                value={item.description}
                onChange={e => {
                  const newItems = [...formData.items]
                  newItems[index].description = e.target.value
                  setFormData(prev => ({ ...prev, items: newItems }))
                }}
              />
              <input
                type="number"
                placeholder="Quantity"
                className="p-2 border rounded"
                value={item.quantity}
                onChange={e => {
                  const newItems = [...formData.items]
                  newItems[index].quantity = Number(e.target.value)
                  setFormData(prev => ({ ...prev, items: newItems }))
                }}
              />
              <input
                type="number"
                placeholder="Price"
                className="p-2 border rounded"
                value={item.price}
                onChange={e => {
                  const newItems = [...formData.items]
                  newItems[index].price = Number(e.target.value)
                  setFormData(prev => ({ ...prev, items: newItems }))
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleAddItem}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </button>

        <button
          onClick={() => onSubmit(formData)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create Invoice
        </button>
      </div>
    </div>
  )
}
