import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getStarships } from '../../store/thunks/thunkStarships'
import { match } from 'react-router'

interface StarshipsProps {
  match: match
}
const Starships = ({ match }: StarshipsProps) => {
  const resource: IResource = {
    name: 'starships',
    itemName: 'name',
    getResource: getStarships,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default Starships
