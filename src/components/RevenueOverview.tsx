import React from 'react'
import { TrendingUp, DollarSign, FileText } from 'lucide-react'

export default function RevenueOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Revenue Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="text-3xl font-bold">$48,560</p>
          </div>
          <div className="p-3 bg-blue-100 rounded-full">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Monthly Revenue Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
            <p className="text-3xl font-bold">$12,340</p>
            <p className="text-sm text-green-500 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5% from last month
            </p>
          </div>
          <div className="p-3 bg-green-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      {/* Active Quotations Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Active Quotations</h3>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-gray-500">$56,780 total value</p>
          </div>
          <div className="p-3 bg-purple-100 rounded-full">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
