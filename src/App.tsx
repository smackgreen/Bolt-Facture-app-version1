import { useState } from 'react'
import RevenueOverview from './components/RevenueOverview'
import QuotationsSection from './components/QuotationsSection'
import Navigation from './components/Navigation'

function App() {
  const [currentView] = useState('dashboard')

  return (
    <div className="p-4 pl-20"> {/* Added left padding to prevent content overlap */}
      <Navigation />
      
      {currentView === 'dashboard' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
              <p className="text-2xl font-bold">42</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-bold">$12,450</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Invoices</h3>
              <p className="text-2xl font-bold">78</p>
              <p className="text-sm text-gray-500">+5 last month</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-sm font-medium text-gray-500">Total Quotations</h3>
              <p className="text-2xl font-bold">23</p>
              <p className="text-sm text-gray-500">+2 last month</p>
            </div>
          </div>
          <RevenueOverview />
          <QuotationsSection />
        </div>
      )}
    </div>
  )
}

export default App
