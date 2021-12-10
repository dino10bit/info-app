import {
  getSpeciesFailure,
  getSpeciesRequest,
  getSpeciesSuccess,
} from '../actions/actionCreators'
import axios from 'axios'
import { ISpecie } from './interfaces/ISpecie'

export function getSpecies() {
  return async dispatch => {
    dispatch(getSpeciesRequest())

    try {
      const species: ISpecie[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `species/`)
      ).data.results

      dispatch(getSpeciesSuccess(species))
    } catch (error) {
      dispatch(getSpeciesFailure(error))
    }
  }
}
