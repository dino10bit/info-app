import {
  getFilmsRequest,
  getFilmsSuccess,
  getFilmsFailure,
} from '../actions/actionCreators'
import axios from 'axios'
import { IFilm } from './interfaces/IFilm'
import { Dispatch } from 'redux'

export function getFilms() {
  return async (dispatch: Dispatch) => {
    dispatch(getFilmsRequest())

    try {
      const films: IFilm[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `films/`)
      ).data.results
      dispatch(getFilmsSuccess(films))
    } catch (error) {
      dispatch(getFilmsFailure(error))
    }
  }
}
