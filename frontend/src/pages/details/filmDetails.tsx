import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilm } from '../../store/thunks/thunkFilm'
import Loading from '../../components/loading'
import Paper from '@mui/material/Paper'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { IFilm } from '../../store/thunks/interfaces/IFilm'
import { History } from 'history'
import { match } from 'react-router'

interface FilmDetailsProps {
  match: match<any>
  history: History
}

const FilmDetails = ({ match, history }: FilmDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  React.useEffect(() => {
    dispatch(getFilm(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const film: IFilm = useSelector((state: typeof initialState) => state.film)
  const characterNames: string[] = useSelector(
    (state: typeof initialState) => state.characterNames,
  )
  const planetNames = useSelector(
    (state: typeof initialState) => state.planetNames,
  )
  const starshipNames = useSelector(
    (state: typeof initialState) => state.starshipNames,
  )
  const vehicleNames = useSelector(
    (state: typeof initialState) => state.vehicleNames,
  )
  const specieNames = useSelector(
    (state: typeof initialState) => state.specieNames,
  )

  const infoList = (film: IFilm) => [
    {
      title: 'Title',
      value: film.title,
    },
    {
      title: 'Episode',
      value: film.episode_id,
    },
    {
      title: 'Opening crawl',
      value: film.opening_crawl,
    },
    {
      title: 'Director',
      value: film.director,
    },
    {
      title: 'Producer',
      value: film.producer,
    },
    {
      title: 'Release date',
      value: film.release_date,
    },
  ]

  const filmList =
    film && film ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(film)} />
        <ResourceList
          title="people"
          resourceNames={characterNames}
          urls={film.characters}
        />
        <ResourceList
          title="planets"
          resourceNames={planetNames}
          urls={film.planets}
        />
        <ResourceList
          title="starships"
          resourceNames={starshipNames}
          urls={film.starships}
        />
        <ResourceList
          title="vehicles"
          resourceNames={vehicleNames}
          urls={film.vehicles}
        />
        <ResourceList
          title="species"
          resourceNames={specieNames}
          urls={film.species}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="Film"
      isLoading={isLoading}
      resourceList={filmList}
      history={history}
    />
  )
}

export default FilmDetails
