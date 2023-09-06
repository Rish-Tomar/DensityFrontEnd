'use client'
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const HomePageComponentWrapper=styled(Box)({
    display:"flex",
    flexDirection:"row",
    marginTop:"2rem",
    backgroundColor:"#dbe1f6"
})

const LeftPannel =styled(Box)({
    height:"90vh",
    width:"45%"
})

const RightPannel =styled(Box)({
    height:"90vh",
    width:"45%"
})

const AppStoreAndRating =styled(Box)({
    display:"flex",
    flexDirection:"row",
    gap:"2rem",
    marginTop:"2.5rem"
})
function HomePageComponent() {
  return (
    <HomePageComponentWrapper>
       <LeftPannel margin={"auto"} marginTop={"10rem"}>
            <Typography>Ahead app</Typography>
            <Typography fontSize={60} fontWeight={600}>Master Your Life By mastering emotions</Typography>
            <AppStoreAndRating>
                <img src='/appstoreicon.png' style={{width:"25%"}}/>
                <Box>
                    <Box><img style={{width:"20%"}} src="/star.png"/><img style={{width:"20%"}}src="/star.png"/><img style={{width:"20%"}}src="/star.png"/><img style={{width:"20%"}}src="/star.png"/></Box>
                    <Typography>100k + app reviews</Typography>
                </Box>
            </AppStoreAndRating>
       </LeftPannel>
       <RightPannel margin={"auto"} marginTop={"5rem"}>
            <img width="100%" height="100%"src="img.png"/>
       </RightPannel>
    </HomePageComponentWrapper>
  )
}

export default HomePageComponent