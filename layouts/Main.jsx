import React from 'react'
import Clients from '../components/Clients/Clients'
import Ads from '../components/Ad/Ads'
import Analytics from '../components/Analytics/Analytics'
import AboutUs from '../components/AboutUs/AboutUs'

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
      <AboutUs />
    </main>
  )
}

export default Main
