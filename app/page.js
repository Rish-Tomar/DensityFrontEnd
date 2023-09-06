import HomePageComponent from '@/components/HomePageComponent'
import NavBar from '@/components/NavBar'
import VerticalLinearStepper from '@/components/Stepper'
import { Box } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Box>
      {/* navbar */}
      <NavBar/>
      <HomePageComponent/>
      <VerticalLinearStepper/>
    </Box>
  )
}

export default page