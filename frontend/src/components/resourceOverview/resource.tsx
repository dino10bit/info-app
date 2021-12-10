import React from 'react'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export interface ResourceProps {
  title: string
  linkTo: string
  characterName: string
  resourceName: string
}

export function Resource({
  title,
  linkTo,
  characterName,
  resourceName,
}: ResourceProps) {
  const classes = useStyles()
  return characterName && characterName.length > 0
    ? resourceName && (
        <Container className={classes.item}>
          <span className={classes.itemText}>{title}:</span>
          <List className={classes.itemsList}>
            <ListItem key={characterName} className={classes.listItem}>
              <Link
                className={classes.link}
                to={`/${linkTo}/${resourceName.slice(
                  resourceName.indexOf(linkTo) + linkTo.length + 1,
                  resourceName.length - 1,
                )}`}>
                {characterName}
              </Link>
            </ListItem>
          </List>
        </Container>
      )
    : null
}

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  itemsList: {
    [breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  listItem: {
    padding: '8px 0',
    [breakpoints.up('md')]: {
      width: '32%',
      margin: '0 5px',
    },
  },
  item: {
    margin: '16px 0',
  },
  itemText: {
    fontSize: '1rem',
    fontWeight: '700',
  },
  link: {
    width: '100%',
    color: '#000',
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#e0e0e0',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#ccc',
    },
  },
}))
