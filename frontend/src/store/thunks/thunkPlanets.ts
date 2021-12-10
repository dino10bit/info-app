import {
  getPlanetsRequest,
  getPlanetsSuccess,
  getPlanetsFailure,
} from '../actions/actionCreators'
import axios from 'axios'
import { IPlanet } from './interfaces/IPlanet'

export function getPlanets() {
  return async dispatch => {
    dispatch(getPlanetsRequest())

    try {
      const planets: IPlanet[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `planets/`)
      ).data.results
      dispatch(getPlanetsSuccess(planets))
    } catch (error) {
      dispatch(getPlanetsFailure(error))
    }
  }
}
