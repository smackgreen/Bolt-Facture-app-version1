import React, { useState } from 'react'
import { Menu, X, LayoutDashboard, Users, FileText, FileSignature, Settings } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Clients', icon: <Users className="w-5 h-5" /> },
    { name: 'Invoices', icon: <FileText className="w-5 h-5" /> },
    { name: 'Quotations', icon: <FileSignature className="w-5 h-5" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ]

  return (
    <>
      {/* Menu Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation Menu */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Invoice App</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation
