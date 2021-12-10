import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import LoginNavbar from '../../components/login/loginNavbar'
import { experimentalStyled as styled } from '@mui/material/styles'
import { Box, Paper, Grid, Link, Container } from '@mui/material'
import bgImage from '../../assets/starwars-bg.jpeg';

const resources = [
  {
    route: '/films',
    text: 'Films',
  },
  {
    route: '/people',
    text: 'People',
  },
  {
    route: '/planets',
    text: 'Planets',
  },
  {
    route: '/species',
    text: 'Species',
  },
  {
    route: '/starships',
    text: 'Starships',
  },
  {
    route: '/vehicles',
    text: 'Vehicles',
  },
]

function Home() {
  const classes = useStyles()

  return (
    <Container className={classes.home}>
      <LoginNavbar />
      <br />
      <br />
      <br />
      <Link component="button" variant="body2" onClick={logout}>
        Logout
      </Link>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {resources.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item className={classes.item}>
                <Link
                  underline="none"
                  color="inherit"
                  to={item.route}
                  component={RouteLink}
                  className={classes.link}>
                  {item.text}
                </Link>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function logout() {
  window.localStorage.removeItem('token')
  window.location.reload()
  return false
}

const useStyles = makeStyles(() => ({
  home: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '100px'
  },
  categories: {
    width: '200px',
    textAlign: 'center',
    marginTop: '50px',
  },
  item: {
    marginTop: '100px',
  },
  link: {
    width: '100%',
    padding: '6px',
    '&:hover': {
      textDecoration: 'none',
    },
    fontSize: '25px',
  },
}))

export default Home
