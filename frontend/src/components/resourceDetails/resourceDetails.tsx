import Container from '@mui/material/Container'
import React from 'react'
import { makeStyles } from '@mui/styles'

export interface ResourceDetailsComponentProps {
  items: { title: string; value: string | number }[]
}

export const ResourceDetails = ({ items }: ResourceDetailsComponentProps) => {
  const classes = useStyles()

  return (
    <>
      {items.map(item => {
        return (
          <Container className={classes.item} key={item.title}>
            <span className={classes.itemText}>{item.title}: </span>
            <span className={classes.detailText}>{item.value}</span>
          </Container>
        )
      })}
    </>
  )
}

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  item: {
    margin: '16px 0',
  },
  itemText: {
    fontSize: '1rem',
    fontWeight: '700',
  },
  detailText: {
    fontSize: '1rem',
    marginLeft: '8px',
  },
}))
