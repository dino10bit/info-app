import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStarship } from '../../store/thunks/thunkStarship'
import Loading from '../../components/loading'
import Paper from '@mui/material/Paper'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { IStarship } from '../../store/thunks/interfaces/IStarship'
import { History } from 'history'
import { match } from 'react-router'

interface StarshipDetailsProps {
  match: match<any>
  history: History
}

const StarshipDetails = ({ match, history }: StarshipDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  React.useEffect(() => {
    dispatch(getStarship(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const starship: IStarship = useSelector(
    (state: typeof initialState) => state.starship,
  )
  const characterNames = useSelector(
    (state: typeof initialState) => state.characterNames,
  )
  const filmNames = useSelector((state: typeof initialState) => state.filmNames)

  const infoList = (starship: IStarship) => [
    {
      title: 'Name',
      value: starship.name,
    },
    {
      title: 'Model',
      value: starship.model,
    },
    {
      title: 'Starship class',
      value: starship.starship_class,
    },
    {
      title: 'Manufacturer',
      value: starship.manufacturer,
    },
    {
      title: 'Cost in credits',
      value: starship.cost_in_credits,
    },
    {
      title: 'Length',
      value: starship.length,
    },
    {
      title: 'Crew',
      value: starship.crew,
    },
    {
      title: 'Passengers',
      value: starship.passengers,
    },
    {
      title: 'Max atmospheric speed',
      value: starship.max_atmosphering_speed,
    },
    {
      title: 'Hyperdrive rating',
      value: starship.hyperdrive_rating,
    },
    {
      title: 'Megalights',
      value: starship.MGLT,
    },
    {
      title: 'Cargo capacity',
      value: starship.cargo_capacity,
    },
    {
      title: 'Consumables',
      value: starship.consumables,
    },
  ]

  const starshipList =
    starship && starship ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(starship)} />
        <ResourceList
          title="films"
          resourceNames={filmNames}
          urls={starship.films}
        />
        <ResourceList
          title="pilots"
          linkTo="people"
          resourceNames={characterNames}
          urls={starship.pilots}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="Starship"
      isLoading={isLoading}
      resourceList={starshipList}
      history={history}
    />
  )
}

export default StarshipDetails
