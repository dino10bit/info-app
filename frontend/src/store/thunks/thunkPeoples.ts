import {
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleFailure,
} from '../actions/actionCreators'
import axios from 'axios'
import { ICharacter } from './interfaces/ICharacter'

export function getPeople() {
  return async dispatch => {
    dispatch(getPeopleRequest())

    try {
      const characters: ICharacter[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `people/`)
      ).data.results
      dispatch(getPeopleSuccess(characters))
    } catch (error) {
      dispatch(getPeopleFailure(error))
    }
  }
}
