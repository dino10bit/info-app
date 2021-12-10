import axios from 'axios'

import {
  getVehicleFailure,
  getVehicleRequest,
  getVehicleSuccess,
} from '../actions/actionCreators'
import { fetchResources } from '../../utils/functions'
import { IVehicle } from './interfaces/IVehicle'

export function getVehicle(id: string) {
  return async dispatch => {
    dispatch(getVehicleRequest())

    try {
      const vehicle: IVehicle = (
        await axios.get(process.env.REACT_APP_SWAPI + `vehicles/${id}/`)
      ).data

      const resources = fetchResources([
        {
          resource: vehicle.pilots,
          name: 'name',
          resourceName: 'character',
        },
        {
          resource: vehicle.films,
          name: 'title',
          resourceName: 'film',
        },
      ])

      dispatch(
        getVehicleSuccess(
          vehicle,
          await resources.characterName,
          await resources.filmNames,
        ),
      )
    } catch (error) {
      dispatch(getVehicleFailure(error))
    }
  }
}
