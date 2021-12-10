import axios from 'axios'

import {
  getSpecieFailure,
  getSpecieRequest,
  getSpecieSuccess,
} from '../actions/actionCreators'
import { fetchResources } from '../../utils/functions'
import { ISpecie } from './interfaces/ISpecie'
import { IHomeWorld } from './interfaces/IHomeWorld'

export function getSpecie(id: string) {
  return async dispatch => {
    dispatch(getSpecieRequest())

    try {
      const specie: ISpecie = (
        await axios.get(process.env.REACT_APP_SWAPI + `species/${id}/`)
      ).data
      const homeWorld: IHomeWorld = (await axios.get(specie.homeworld)).data

      const resources = fetchResources([
        {
          resource: specie.people,
          name: 'name',
          resourceName: 'character',
        },
        {
          resource: specie.films,
          name: 'title',
          resourceName: 'film',
        },
      ])

      dispatch(
        getSpecieSuccess(
          specie,
          await resources.characterName,
          await resources.filmNames,
          homeWorld,
        ),
      )
    } catch (error) {
      dispatch(getSpecieFailure(error))
    }
  }
}
