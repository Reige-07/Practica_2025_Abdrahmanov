import { useState } from 'react'
import Header from './components/header'
import MakeYourBusiness from './components/MakeYourBusiness'
import OurServices from './components/OurServices'
import OurDocumentation from "./components/OurDocumentation"

function App() {

  return (
      <div>
        <Header/>
        <MakeYourBusiness/>
        <OurServices/>
        <OurDocumentation/>
      </div>
  )
}

export default App
