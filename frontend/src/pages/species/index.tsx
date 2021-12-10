import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getSpecies } from '../../store/thunks/thunkSpecies'
import { match } from 'react-router'

interface SpeciesProps {
  match: match
}

const Species = ({ match }: SpeciesProps) => {
  const resource: IResource = {
    name: 'species',
    itemName: 'name',
    getResource: getSpecies,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default Species
