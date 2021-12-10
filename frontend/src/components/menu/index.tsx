import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import {
  List,
  Link,
  ListItem,
  Container,
  IconButton,
  SwipeableDrawer,
} from '@mui/material'

const Menu = () => {
  const classes = useStyles()
  const [menu, setMenu] = React.useState(false)
  const categories = [
    {
      route: '/films',
      text: 'Films',
    },
    {
      route: '/people',
      text: 'People',
    },
    {
      route: '/starships',
      text: 'Starships',
    },
    {
      route: '/vehicles',
      text: 'Vehicles',
    },
    {
      route: '/planets',
      text: 'Planets',
    },
    {
      route: '/species',
      text: 'Species',
    },

  ]

  const routeCategories = categories.map(c => c.route)
  const textCategories = categories.map(c => c.text)

  const toggleMenu = (side, open) => () => {
    setMenu(open)
  }

  const sideMenu = side => (
    <Container
      role="presentation"
      className={classes.menu}
      onClick={toggleMenu(side, false)}
      onKeyDown={toggleMenu(side, false)}>
      <List className={classes.sections}>
        <ListItem button className={classes.logo}>
          <Link to="/" component={RouteLink} className={classes.logoTitle} underline={'none'} color={'inherit'}>
            Star Wars
          </Link>
        </ListItem>
        {routeCategories.map((route, index) => (
          <ListItem button key={route} className={classes.sectionList}>
            <Link
              to={route}
              component={RouteLink}
              className={classes.sectionText}
              color={'inherit'}
              underline={'none'}>
              {textCategories[index]}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )

  return (
    <>
      <IconButton onClick={toggleMenu('menu', true)} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={menu}
        onClose={toggleMenu('menu', false)}
        onOpen={toggleMenu('menu', true)}>
        {sideMenu('menu')}
      </SwipeableDrawer>
    </>
  )
}

const useStyles = makeStyles(() => ({
  menu: {
    padding: '0',
  },
  sections: {
    padding: '0',
  },
  logo: {
    textAlign: 'center',
    backgroundColor: '#000',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: '#000',
    },
  },
  logoTitle: {
    color: '#d2a600',
    fontSize: '32px',
    fontWeight: '700',
    textTransform: 'capitalize',
    padding: '30px 15px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  sectionList: {
    padding: '0',
  },
  sectionText: {
    margin: '4px 0',
    color: '#000',
    width: '100%',
    padding: '16px 32px',
    backgroundColor: '#e2e2e2',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#afafaf',
    },
    '&:active': {
      backgroundColor: '#afafaf',
    },
  },
}))

export default Menu
