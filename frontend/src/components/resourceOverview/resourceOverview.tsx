import React, { useEffect, useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  Paper,
  Theme,
  Typography,
  Box
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Menu from '../menu'
import SearchIcon from '@mui/icons-material/Search'
import Loading from '../loading'
import Searching from '../searching'
import { useDebounce } from '../../utils/debounce'
import { initialState } from '../../store/store/store'
import axios from 'axios'
import { Dispatch } from 'redux'
import bgImage from "../../assets/stars-bg.jpeg";

export interface IResource {
  name: string
  itemName: string
  getResource: () => (dispatch: Dispatch<any>) => Promise<void>
}

interface ResourceOverviewProps {
  match: {
    isExact: boolean
    path: string
    url: string
  }
  resource: IResource
}

const ResourceOverview = ({ match, resource }: ResourceOverviewProps) => {
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState([])
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const searchResource = async search => {
    try {
      const values = (
        await axios.get(
          process.env.REACT_APP_SWAPI + `${resource.name}/?search=${search}`,
        )
      ).data.results
      return values.reduce((acc, cur) => {
        return acc.concat([{ name: cur[resource.itemName], url: cur.url }])
      }, [])
    } catch (error) {
      return []
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      searchResource(debouncedSearchTerm).then(resultsSearch => {
        setIsSearching(false)
        setResults(resultsSearch)
      })
    } else {
      setResults([])
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    dispatch(resource.getResource())
  }, [dispatch])

  const resourceData = useSelector(
    (state: typeof initialState) => state[resource.name],
  )
  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const classes = useStyles()

  const resourcesList = (
    <Paper className={classes.paperList}>
      <Typography variant="h5" component="h2" className={classes.title}>
        {resource.name}
      </Typography>
      {
        <List>
          {resourceData &&
            resourceData.map(item => (
              <ListItem
                key={item[resource.itemName]}
                className={classes.listItem}>
                <Link
                  component={RouteLink}
                  className={classes.link}
                  underline={'none'}
                  to={`${match.url}/${item.url.slice(
                    item.url.indexOf(resource.name) + resource.name.length + 1,
                    item.url.length - 1,
                  )}`}>
                  {item[resource.itemName]}
                </Link>
              </ListItem>
            ))}
        </List>
      }
    </Paper>
  )

  const resourceSearch = isSearching ? (
    <Searching />
  ) : searchTerm !== '' ? (
    <Paper className={classes.paperList}>
      {results.map(result => (
        <ListItem key={result[resource.itemName]} className={classes.listItem}>
          <Link
            component={RouteLink}
            className={classes.link}
            to={`${match.url}/${result.url.slice(
              result.url.indexOf(resource.name) + resource.name.length + 1,
              result.url.length - 1,
            )}`}>
            {result.name}
          </Link>
        </ListItem>
      ))}
    </Paper>
  ) : (
    resourcesList
  )

  return (
    <Container className={classes.container}>
      <Box height="100vh" display="flex" flexDirection="column">
        <Paper className={classes.paper}>
          <Menu />
          <InputBase
            className={classes.search}
            placeholder="Search"
            inputProps={{ 'aria-label': 'Search' }}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
        {isLoading ? <Loading /> : resourceSearch}
      </Box>
    </Container>
  )
}

const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    padding: '0',
    backgroundImage: `url(${bgImage})`,
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '0',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: '16px',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  iconButton: {
    padding: 10,
  },
  paperList: {
    [breakpoints.up('md')]: {
      minWidth: '400px',
    },
    margin: '40px',
    padding: '10px',
    [breakpoints.up('sm')]: {
      maxWidth: '400px',
      margin: '20px auto',
    },
  },
  paperLoading: {
    margin: '16px',
    padding: '16px',
    textAlign: 'center',
  },
  listItem: {
    padding: '0',
  },
  link: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: '16px',
    width: '100%',
    color: '#000',
    padding: '16px',
    '&:hover': {
      backgroundColor: '#dadada',
      textDecoration: 'none',
    },
  },
  search: {
    border: '1px solid #cecece',
    borderRadius: '50px',
    padding: '0 16px',
  },
}))

export default ResourceOverview
