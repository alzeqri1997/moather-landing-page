import React from 'react'
import Clients from '../components/Clients/Clients'
import Ads from '../components/Ad/Ads'
import Analytics from '../components/Analytics/Analytics'
import AboutUs from '../components/AboutUs/AboutUs'
import FeedBack from '../components/FeedBack/FeedBack'
import Articles from '../components/Articles/Articles'
import ContactUs from '../components/ContactUs/ContactUs'
import Customers from '../components/Customers/Customers'

const Main = () => {
  return (
    <main className=" " >
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
      <div className="bg-[#F9F9F9] mt-[180px] md:mt-[440px]" >
        <FeedBack />
      </div>
      <div className="bg-white" >
        <Articles />
      </div>

      <div className="bg-[#F9F9F9]" >
        <ContactUs />
      </div>

      <div className="bg-white" >
        <Customers />
      </div>
    </main>
  )
}

export default Main
