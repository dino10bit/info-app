import axios from 'axios'

interface IResource {
  resource: string[]
  name: string
  resourceName: string
}

export function fetchResources(resources: IResource[]) {
  return resources.reduce(
    (acc, item: IResource) => {
      acc[item.resourceName + 'Names'] = Promise.all(
        item.resource.map(async url => {
          return (await axios.get(url)).data[item.name]
        }),
      )
      return acc
    },
    {
      filmNames: Promise.resolve(undefined),
      specieNames: Promise.resolve(undefined),
      starshipNames: Promise.resolve(undefined),
      vehicleNames: Promise.resolve(undefined),
      characterName: Promise.resolve(undefined),
      planetNames: Promise.resolve(undefined),
    },
  )
}
