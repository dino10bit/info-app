import {
  getStarshipsFailure,
  getStarshipsRequest,
  getStarshipsSuccess,
} from '../actions/actionCreators'
import axios from 'axios'
import { IStarship } from './interfaces/IStarship'

export function getStarships() {
  return async dispatch => {
    dispatch(getStarshipsRequest())

    try {
      const starships: IStarship[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `starships/`)
      ).data.results
      dispatch(getStarshipsSuccess(starships))
    } catch (error) {
      dispatch(getStarshipsFailure(error))
    }
  }
}
