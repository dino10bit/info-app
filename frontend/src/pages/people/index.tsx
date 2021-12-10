import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getPeople } from '../../store/thunks/thunkPeoples'
import { match } from 'react-router'

interface PeopleProps {
  match: match
}

const People = ({ match }: PeopleProps) => {
  const resource: IResource = {
    name: 'people',
    itemName: 'name',
    getResource: getPeople,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default People
