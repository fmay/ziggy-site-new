import React from 'react'
import StackCard from './StackCard'
import Image from 'next/image'

// Example Atlas Icon Component
const AtlasIcon = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#product-icon-atlas--a)">
      <path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z" fill="#FB0"/>
      <path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z" fill="url(#product-icon-atlas--b)"/>
      <path d="M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z" fill="url(#product-icon-atlas--c)"/>
    </g>
    <defs>
      <linearGradient id="product-icon-atlas--b" x1="16.03" y1="18.01" x2="15.94" y2="39.33" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD748"/>
        <stop offset=".54" stopColor="#FFCD48"/>
        <stop offset="1" stopColor="#FFCB48"/>
      </linearGradient>
      <linearGradient id="product-icon-atlas--c" x1="20.51" y1="34.72" x2="20.51" y2="15.01" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFAD00"/>
        <stop offset="1" stopColor="#FF7600"/>
      </linearGradient>
      <clipPath id="product-icon-atlas--a">
        <path fill="#fff" d="M0 0h40v40H0z"/>
      </clipPath>
    </defs>
  </svg>
)

// Example Dashboard Graphic Component
const DashboardGraphic = () => (
  <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
    <div className="flex h-full flex-col bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2">
          <AtlasIcon />
          <span className="text-sm font-medium text-slate-600">Atlas</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">RocketRides, Inc.</h3>
      </div>

      {/* Navigation */}
      <div className="mb-4 flex gap-8 border-b border-slate-200">
        <button className="border-b-2 border-indigo-600 pb-2 text-sm font-medium text-indigo-600">
          Overview
        </button>
        <button className="pb-2 text-sm text-slate-500 hover:text-slate-700">
          Company
        </button>
        <button className="pb-2 text-sm text-slate-500 hover:text-slate-700">
          Templates
        </button>
        <button className="pb-2 text-sm text-slate-500 hover:text-slate-700">
          Partners
        </button>
      </div>

      {/* Checklist Items */}
      <div className="space-y-4">
        <ChecklistItem text="Incorporate your company" completed />
        <ChecklistItem text="Stock issued for founders" completed />
        <ChecklistItem text="Purchase your shares" completed />
        <ChecklistItem text="File 83(b) election" icon="document" />
      </div>
    </div>
  </div>
)

// Checklist Item Component
const ChecklistItem = ({ text, completed = false, icon = 'check' }: { text: string; completed?: boolean; icon?: string }) => (
  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
    <div className={`flex h-6 w-6 items-center justify-center rounded-full ${completed ? 'bg-green-500' : 'bg-slate-200'}`}>
      {completed ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v8M3 3h8M3 11h8M11 11V3" stroke="#64748b" strokeWidth="1.5"/>
        </svg>
      )}
    </div>
    <span className="text-base font-medium text-slate-700">{text}</span>
  </div>
)

// Example Usage
export default function StackCardExample() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Example 1: With image from public folder */}
        <StackCard
          primaryColor="#FFA500"
          secondaryColor="#FFD848"
          icon={<AtlasIcon />}
          badgeLabel="Atlas"
          title="Incorporate your company"
          description="Form a legal entity, issue stock, and start accepting payments."
          ctaText="Learn about Atlas"
          ctaHref="/atlas"
          graphic="/dashboard-preview.png"
          graphicAlt="Atlas dashboard preview"
        />

        {/* Example 2: Without graphic */}
        <StackCard
          primaryColor="#635BFF"
          secondaryColor="#9B8AFB"
          icon={<AtlasIcon />}
          badgeLabel="Payments"
          title="Accept payments globally"
          description="Start accepting payments from customers around the world with ease."
          ctaText="Learn more"
          ctaHref="/payments"
        />
      </div>
    </div>
  )
}
