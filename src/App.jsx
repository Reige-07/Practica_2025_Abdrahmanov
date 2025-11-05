import { useState } from 'react'
import Header from './components/header'
import MakeYourBusiness from './components/MakeYourBusiness'
import OurServices from './components/OurServices'
import OurDocumentation from "./components/OurDocumentation"
import CustomerSatisfaction from './components/CustomerSatisfaction'
import WorkingSpace from './components/WorkingSpace'
import SomeOfOurGreatCustomers from './components/SomeOfOurGreatCustomers'

function App() {

  return (
      <div>
        <Header/>
        <MakeYourBusiness/>
        <OurServices/>
        <OurDocumentation/>
        <CustomerSatisfaction/>
        <WorkingSpace/>
        <SomeOfOurGreatCustomers/>
      </div>
  )
}

export default App
