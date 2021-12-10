import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanet } from '../../store/thunks/thunkPlanet'
import Loading from '../../components/loading'
import Paper from '@mui/material/Paper'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { IPlanet } from '../../store/thunks/interfaces/IPlanet'
import { History } from 'history'
import { match } from 'react-router'

interface PlanetDetailsProps {
  match: match<any>
  history: History
}

const PlanetDetails = ({ match, history }: PlanetDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  useEffect(() => {
    dispatch(getPlanet(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const planet: IPlanet = useSelector(
    (state: typeof initialState) => state.planet,
  )
  const characterNames: string[] = useSelector(
    (state: typeof initialState) => state.characterNames,
  )
  const filmNames: string[] = useSelector(
    (state: typeof initialState) => state.filmNames,
  )

  const infoList = (planet: IPlanet) => [
    {
      title: 'Name',
      value: planet.name,
    },
    {
      title: 'Rotation period',
      value: planet.rotation_period,
    },
    {
      title: 'Orbital period',
      value: planet.orbital_period + ' days',
    },
    {
      title: 'Diameter',
      value: planet.diameter + ' km',
    },
    {
      title: 'Climate',
      value: planet.climate,
    },
    {
      title: 'Gravity',
      value: planet.gravity,
    },
    {
      title: 'Terrain',
      value: planet.terrain,
    },
    {
      title: 'Surface Water',
      value:
        planet.surface_water === 'unknown'
          ? planet.surface_water
          : `${planet.surface_water}%`,
    },
    {
      title: 'Population',
      value: planet.population,
    },
  ]

  const planetList =
    planet && planet ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(planet)} />
        <ResourceList
          title="residents"
          linkTo="people"
          resourceNames={characterNames}
          urls={planet.residents}
        />
        <ResourceList
          title="films"
          resourceNames={filmNames}
          urls={planet.films}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="Planet"
      isLoading={isLoading}
      resourceList={planetList}
      history={history}
    />
  )
}

export default PlanetDetails
