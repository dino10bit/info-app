import React, { ChangeEvent, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import LoginNavbar from './loginNavbar'

import '../../styles/login.css'

const useStyles = makeStyles(() => ({
  login: {
    padding: "20px",
    backgroundColor: "#f5edd7",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      width: '300px',
    },
  },
}))

async function loginUser(credentials) {
  return fetch(`http://localhost:4000/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json())
}

interface LoginProps {
  setToken: any
}

export default function Login({ setToken }: LoginProps) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const classes = useStyles()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password,
    })
    setToken(token)
  }

  return (
    <div className="login-wrapper">
      <LoginNavbar />
      <Typography component="h5" variant="h5">
        Login
      </Typography>
      <br />
      <form className={classes.login} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="filled"
          color="success" focused
          type="text"
          required
          value={username}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            setUserName(
              // @ts-ignore
              e.target.value,
            )
          }
        />
        <br />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          color="success" focused
          required
          value={password}
          onChange={e =>
            setPassword(
              // @ts-ignore
              e.target.value,
            )
          }
        />
        <div>
          <br />
          <Button type="submit" variant="contained" color="secondary">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}
