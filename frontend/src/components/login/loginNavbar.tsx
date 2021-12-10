import * as React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles";

export default function LoginNavbar() {
  const classes = useStyles()
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0 }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logo}>Star Wars</Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() => ({
  toolbar: {
    backgroundColor: '#150f0f',
    display:"flex",
    justifyContent:"center",
  },
  logo: {
    color: "#f1d33b",

  }
}))
