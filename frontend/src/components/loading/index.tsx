import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, Typography, Paper, CircularProgress } from '@mui/material'

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  loading: {
    margin: '17px',
    padding: '17px',
    textAlign: 'center',
    [breakpoints.up('sm')]: {
      maxWidth: '400px',
      margin: '16px auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: '850px',
    },
  },
  progress: {
    margin: spacing(2),
  },
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.loading}>
      <Typography variant="h5" component="h2">
        <CircularProgress className={classes.progress} />
      </Typography>
    </Paper>
  )
}

export default Loading
