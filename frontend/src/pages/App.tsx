import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store/store/store'
import Login from '../components/login'
import useToken from '../components/login/useToken'
import Home from './home'
import Films from './films'
import People from './people'
import Planets from './planets'
import Species from './species'
import Starships from './starships'
import Vehicles from './vehicles'
import FilmDetails from './details/filmDetails'
import CharacterDetails from './details/characterDetails'
import PlanetDetails from './details/planetDetails'
import VehicleDetails from './details/vehicleDetails'
import StarshipDetails from './details/starshipDetails'
import SpecieDetails from './details/specieDetails'

function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Provider store={store}>
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/people" component={People} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/species" component={Species} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/films/:id" component={FilmDetails} />
          <Route exact path="/people/:id" component={CharacterDetails} />
          <Route exact path="/planets/:id" component={PlanetDetails} />
          <Route exact path="/starships/:id" component={StarshipDetails} />
          <Route exact path="/vehicles/:id" component={VehicleDetails} />
          <Route exact path="/species/:id" component={SpecieDetails} />
        </>
      </Router>
    </Provider>
  )
}

export default App
