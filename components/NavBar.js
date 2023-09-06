'use client'
import { Box, Paper, Typography ,styled} from '@mui/material'
import React from 'react'

const NavWrapper=styled(Box)({
  display:'flex',
  flexDirection:"row",
  justifyContent:"space-between" ,
  gap:"1rem",
  alignItems:"center"
})

const ImageBox=styled(Box)({
  backgroundColor:"white"
})

const LinkSection =styled(Box)({
  display:'flex',  
  flexDirection:"row",
  gap:"2rem"
})

const DownloadAppButton =styled(Box)({
  marginRight:"1.5rem",
  borderRadius:"50px",
  backgroundColor:"black",
  padding:"0.8rem"
})

function NavBar() {
  return (
      <Paper elevation={0} sx={{height:"3.5rem",padding:"0.05rem"}} >
        <NavWrapper display={'flex'} flexDirection={"row"} justifyContent="space-between" gap={"1rem"} alignItems={"center"}>

          <ImageBox>
            <img style={{height:"70%",width:"85%"}} src="/icon.png" />
          </ImageBox>
          
          <LinkSection display={'flex'}  flexDirection={"row"} gap={"1rem"}>
            <Typography fontWeight={600}>Emotions</Typography>
            <Typography fontWeight={600}>Manifesto</Typography>
            <Typography fontWeight={600}>Self-awareness test</Typography>
            <Typography fontWeight={600}>Work With Us</Typography>
          </LinkSection>

          <DownloadAppButton marginRight={"1.5rem"}>
            <Typography color={"white"}>Download App</Typography>
          </DownloadAppButton>
        </NavWrapper>
      </Paper>
  )
}

export default NavBar