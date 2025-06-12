import React from 'react'
import CustomTabs from './CustomTabs'
import { industryTabsData } from '@/data/tabsData'

const Industry = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
    <div className="container mx-auto px-4">         
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-800 leading-tight">
        A Complete Live Streaming Solution 
          <span className="font-bold text-gray-900">For Every Use Case Possible
          </span>
        </h2>
      </div>          
      <CustomTabs tabsData={industryTabsData} />
    </div>
  </section>
  )
}

export default Industry
