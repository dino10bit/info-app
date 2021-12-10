import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, Paper, Typography, CircularProgress } from '@mui/material'

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  searching: {
    margin: '16px',
    padding: '16px',
    textAlign: 'center',
    [breakpoints.up('sm')]: {
      maxWidth: '400px',
      margin: '16px auto',
    },
  },
  progress: {
    margin: spacing(2),
  },
}))

const Searching = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.searching}>
      <Typography variant="h5" component="h2">
        <CircularProgress className={classes.progress} />
      </Typography>
    </Paper>
  )
}

export default Searching
