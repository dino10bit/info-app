import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getPlanets } from '../../store/thunks/thunkPlanets'
import { match } from 'react-router'

interface PlanetsProps {
  match: match
}
const Planets = ({ match }: PlanetsProps) => {
  const resource: IResource = {
    name: 'planets',
    itemName: 'name',
    getResource: getPlanets,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default Planets
