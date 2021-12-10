import {
  getVehiclesFailure,
  getVehiclesRequest,
  getVehiclesSuccess,
} from '../actions/actionCreators'
import axios from 'axios'
import { IVehicle } from './interfaces/IVehicle'

export function getVehicles() {
  return async dispatch => {
    dispatch(getVehiclesRequest())

    try {
      const vehicles: IVehicle[] = (
        await axios.get(process.env.REACT_APP_SWAPI + `vehicles/`)
      ).data.results
      dispatch(getVehiclesSuccess(vehicles))
    } catch (error) {
      dispatch(getVehiclesFailure(error))
    }
  }
}
