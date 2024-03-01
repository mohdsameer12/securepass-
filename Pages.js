import React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Hero from './Hero'
import Booking from './Booking'


function Pages() {
  return(
    <>
      <Router>
     
        <Routes>
          <Route exact path='/' component={Hero} />
          <Route path="/Booking/:selectedOccasion" component={Booking} />
        </Routes>
   
      </Router>
    </>
  )
}

export default Pages