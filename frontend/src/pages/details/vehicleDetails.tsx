import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from '../../store/thunks/thunkVehicle'
import Loading from '../../components/loading'
import Paper from '@mui/material/Paper'
import { ResourceList } from '../../components/resourceOverview/resourceList'
import { ResourceDetails } from '../../components/resourceDetails/resourceDetails'
import { useStyles } from '../../styles/detailsPageBaseStyle'
import { DetailsLayout } from '../../components/resourceDetails/detailsLayout'
import { initialState } from '../../store/store/store'
import { IVehicle } from '../../store/thunks/interfaces/IVehicle'
import { History } from 'history'
import { match } from 'react-router'

interface VehicleDetailsProps {
  match: match<any>
  history: History
}

const VehicleDetails = ({ match, history }: VehicleDetailsProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const { id } = match.params

  useEffect(() => {
    dispatch(getVehicle(id))
  }, [dispatch, id])

  const isLoading = useSelector((state: typeof initialState) => state.isLoading)
  const vehicle: IVehicle = useSelector(
    (state: typeof initialState) => state.vehicle,
  )
  const characterNames = useSelector(
    (state: typeof initialState) => state.characterNames,
  )
  const filmNames = useSelector((state: typeof initialState) => state.filmNames)

  const infoList = (vehicle: IVehicle) => [
    {
      title: 'Name',
      value: vehicle.name,
    },
    {
      title: 'Model',
      value: vehicle.model,
    },
    {
      title: 'Vehicle Class',
      value: vehicle.vehicle_class,
    },
    {
      title: 'Manufacturer',
      value: vehicle.manufacturer,
    },
    {
      title: 'Length',
      value: vehicle.length,
    },
    {
      title: 'Cost In Credits',
      value: vehicle.cost_in_credits,
    },
    {
      title: 'Crew',
      value: vehicle.crew,
    },
    {
      title: 'Passengers',
      value: vehicle.passengers,
    },
    {
      title: 'Max Atmospheric Speed',
      value: vehicle.max_atmosphering_speed,
    },
    {
      title: 'Cargo Capacity',
      value: vehicle.cargo_capacity,
    },
    {
      title: 'Consumables',
      value: vehicle.consumables,
    },
  ]

  const vehicleList =
    vehicle && vehicle ? (
      <Paper className={classes.resourceList}>
        <ResourceDetails items={infoList(vehicle)} />
        <ResourceList
          title="films"
          resourceNames={filmNames}
          urls={vehicle.films}
        />
        <ResourceList
          title="pilots"
          linkTo="people"
          resourceNames={characterNames}
          urls={vehicle.pilots}
        />
      </Paper>
    ) : (
      <Loading />
    )

  return (
    <DetailsLayout
      title="Vehicle"
      isLoading={isLoading}
      resourceList={vehicleList}
      history={history}
    />
  )
}

export default VehicleDetails
