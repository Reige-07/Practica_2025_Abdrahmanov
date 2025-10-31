import { useState } from 'react'
import Header from './components/header'
import MakeYourBusiness from './components/MakeYourBusiness'
import OurServices from './components/OurServices'
import OurDocumentation from "./components/OurDocumentation"
import CustomerSatisfaction from './components/CustomerSatisfaction'

function App() {

  return (
      <div>
        <Header/>
        <MakeYourBusiness/>
        <OurServices/>
        <OurDocumentation/>
        <CustomerSatisfaction/>
      </div>
  )
}

export default App
