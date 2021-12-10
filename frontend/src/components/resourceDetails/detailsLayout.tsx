import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Menu from '../menu'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import Loading from '../loading'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import { History } from 'history'

interface DetailsLayoutProps {
  title: string
  isLoading: boolean
  resourceList: EmotionJSX.Element
  history: History
}

export function DetailsLayout({
  title,
  isLoading,
  resourceList,
  history,
}: DetailsLayoutProps) {
  const classes = useStyles()
  const prevPage = () => {
    history.go(-1)
  }

  return (
    <Container className={classes.detail}>
      <Paper className={classes.paper}>
        <Menu />
        <Typography className={classes.title}>{title}</Typography>
        <IconButton
          aria-label="Back"
          onClick={prevPage}>
          <ArrowBackIos />
        </IconButton>
      </Paper>
      {isLoading ? <Loading /> : resourceList}
    </Container>
  )
}

const useStyles = makeStyles(() => ({
  detail: {
    margin: 0,
    padding: 0,
    maxWidth: '100%',
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
}))
