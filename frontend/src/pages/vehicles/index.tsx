import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getVehicles } from '../../store/thunks/thunkVehicles'
import { match } from 'react-router'

interface VehiclesProps {
  match: match
}

const Vehicles = ({ match }: VehiclesProps) => {
  const resource: IResource = {
    name: 'vehicles',
    itemName: 'name',
    getResource: getVehicles,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default Vehicles
