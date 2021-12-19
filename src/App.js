import './App.css';

import React, { useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

 const App = ()=>  {
  const [progress, setProgress] = useState(0)
  const pageSize = 15
  const api = "40a2c32b36e74a3194a5eb078fc45b3d"
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar/>
          <Switch>
          <Route exact path="/"><News setProgress = {setProgress} api = {api} key="" pageSize = {pageSize} country = "in" category = "general"/></Route>
          <Route exact path="/business"><News setProgress = {setProgress} api = {api} key="business" pageSize = {pageSize} country = "in" category = "business"/></Route>
          <Route exact path="/health"><News setProgress = {setProgress} api = {api} key="health" pageSize = {pageSize} country = "in" category = "health"/></Route>
          <Route exact path="/science"><News setProgress = {setProgress} api = {api} key="science" pageSize = {pageSize} country = "in" category = "science"/></Route>
          <Route exact path="/sports"><News setProgress = {setProgress} api = {api} key="sports" pageSize = {pageSize} country = "in" category = "sports"/></Route>
          <Route exact path="/technology"><News setProgress = {setProgress} api = {api} key="technology" pageSize = {pageSize} country = "in" category = "technology"/></Route>
          <Route exact path="/entertainment"><News setProgress = {setProgress} api = {api} key="entertainment" pageSize = {pageSize} country = "in" category = "entertainment"/></Route>
        </Switch>
          </Router>
      </div>
    )
}

export default App;