import axios from 'axios'
import {
  getCharacterFailure,
  getCharacterRequest,
  getCharacterSuccess,
} from '../actions/actionCreators'
import { ICharacter } from './interfaces/ICharacter'
import { fetchResources } from '../../utils/functions'

export function getCharacter(id: string) {
  return async dispatch => {
    dispatch(getCharacterRequest())

    try {
      const character: ICharacter = (
        await axios.get(process.env.REACT_APP_SWAPI + `people/${id}/`)
      ).data
      const homeWorld = (await axios.get(character.homeworld)).data

      const resources = fetchResources([
        {
          resource: character.films,
          name: 'title',
          resourceName: 'film',
        },
        {
          resource: character.species,
          name: 'name',
          resourceName: 'specie',
        },
        {
          resource: character.starships,
          name: 'name',
          resourceName: 'starship',
        },
        {
          resource: character.vehicles,
          name: 'name',
          resourceName: 'vehicle',
        },
      ])

      dispatch(
        getCharacterSuccess(
          character,
          homeWorld,
          await resources.filmNames,
          await resources.specieNames,
          await resources.starshipNames,
          await resources.vehicleNames,
        ),
      )
    } catch (error) {
      dispatch(getCharacterFailure(error))
    }
  }
}
