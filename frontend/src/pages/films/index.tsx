import React from 'react'
import ResourceOverview, {
  IResource,
} from '../../components/resourceOverview/resourceOverview'
import { getFilms } from '../../store/thunks/thunkFilms'
import { match } from 'react-router'

interface FilmsProps {
  match: match
}

const Films = ({ match }: FilmsProps) => {
  const resource: IResource = {
    name: 'films',
    itemName: 'title',
    getResource: getFilms,
  }

  return <ResourceOverview match={match} resource={resource} />
}

export default Films
