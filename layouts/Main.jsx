import React from 'react'
import Clients from '../components/Clients/Clients'
import Ads from '../components/Ad/Ads'
import Analytics from '../components/Analytics/Analytics'

const Main = () => {
  return (
    <main className="" >
      <div className="bg-white" >
        <Clients />
      </div>
      <div className="bg-[#F9F9F9]" >
        <Ads />
      </div>
      <div className="bg-white" >
        <Analytics />
      </div>
    </main>
  )
}

export default Main
