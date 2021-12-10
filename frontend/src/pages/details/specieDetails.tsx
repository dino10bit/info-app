import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecie } from '../../store/thunks/thunkSpecie'
import Loading from '../../components/loading'
import Paper from '@mui/material/Paper'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { Resource } from '../../components/resourceOverview/resource'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { ISpecie } from '../../store/thunks/interfaces/ISpecie'
import { History } from 'history'
import { match } from 'react-router'

interface SpecieDetailsProps {
  match: match<any>
  history: History
}

const SpecieDetails = ({ match, history }: SpecieDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  useEffect(() => {
    dispatch(getSpecie(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const specie: ISpecie = useSelector(
    (state: typeof initialState) => state.specie,
  )
  const filmNames: string[] = useSelector(
    (state: typeof initialState) => state.filmNames,
  )
  const homeWorld = useSelector((state: typeof initialState) => state.homeWorld)
  const characterNames: string[] = useSelector(
    (state: typeof initialState) => state.characterNames,
  )

  const infoList = (specie: ISpecie) => [
    {
      title: 'Name',
      value: specie.name,
    },
    {
      title: 'Classification',
      value: specie.classification,
    },
    {
      title: 'Designation',
      value: specie.designation,
    },
    {
      title: 'Average height',
      value: specie.average_height,
    },
    {
      title: 'Average Lifespan',
      value: specie.average_lifespan + ' years',
    },
    {
      title: 'Eye color',
      value: specie.eye_colors,
    },
    {
      title: 'Hair color',
      value: specie.hair_colors,
    },
    {
      title: 'Skin color',
      value: specie.skin_colors,
    },
    {
      title: 'Language',
      value: specie.language,
    },
  ]

  const specieList =
    specie && specie ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(specie)} />
        <Resource
          title="homeworld"
          linkTo="planets"
          characterName={homeWorld.name}
          resourceName={specie.homeworld}
        />
        <ResourceList
          title="people"
          resourceNames={characterNames}
          urls={specie.people}
        />
        <ResourceList
          title="films"
          resourceNames={filmNames}
          urls={specie.films}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="Specie"
      isLoading={isLoading}
      resourceList={specieList}
      history={history}
    />
  )
}

export default SpecieDetails
