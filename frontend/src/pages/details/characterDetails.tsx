import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import { getCharacter } from '../../store/thunks/thunkCharacter'
import Loading from '../../components/loading'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { Resource } from '../../components/resourceOverview/resource'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { ICharacter } from '../../store/thunks/interfaces/ICharacter'
import { History } from 'history'
import { match } from 'react-router'

interface CharacterDetailsProps {
  match: match<any>
  history: History
}

const CharacterDetails = ({ match, history }: CharacterDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  React.useEffect(() => {
    dispatch(getCharacter(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const character: ICharacter = useSelector(
    (state: typeof initialState) => state.character,
  )
  const homeWorld = useSelector((state: typeof initialState) => state.homeWorld)
  const filmNames: string[] = useSelector(
    (state: typeof initialState) => state.filmNames,
  )
  const specieNames: string[] = useSelector(
    (state: typeof initialState) => state.specieNames,
  )
  const starshipNames: string[] = useSelector(
    (state: typeof initialState) => state.starshipNames,
  )
  const vehicleNames: string[] = useSelector(
    (state: typeof initialState) => state.vehicleNames,
  )

  const infoList = (character: ICharacter) => [
    {
      title: 'Name',
      value: character.name,
    },
    {
      title: 'Birth year',
      value: character.birth_year,
    },
    {
      title: 'Eye color',
      value:
        character.eye_color.charAt(0).toUpperCase() +
        character.eye_color.slice(1),
    },
    {
      title: 'Gender',
      value:
        character.gender.charAt(0).toUpperCase() + character.gender.slice(1),
    },
    {
      title: 'Hair color',
      value:
        character.hair_color.charAt(0).toUpperCase() +
        character.hair_color.slice(1),
    },
    {
      title: 'Height',
      value: character.height + ' cm',
    },
    {
      title: 'Mass',
      value: character.mass + ' kg',
    },
    {
      title: 'Skin color',
      value:
        character.skin_color.charAt(0).toUpperCase() +
        character.skin_color.slice(1),
    },
  ]

  const characterList =
    character && character ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(character)} />
        <Resource
          title="homeworld"
          linkTo="planets"
          characterName={homeWorld.name}
          resourceName={character.homeworld}
        />
        <ResourceList
          title="films"
          resourceNames={filmNames}
          urls={character.films}
        />
        <ResourceList
          title="species"
          resourceNames={specieNames}
          urls={character.species}
        />
        <ResourceList
          title="starships"
          resourceNames={starshipNames}
          urls={character.starships}
        />
        <ResourceList
          title="vehicles"
          resourceNames={vehicleNames}
          urls={character.vehicles}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="People"
      isLoading={isLoading}
      resourceList={characterList}
      history={history}
    />
  )
}

export default CharacterDetails
