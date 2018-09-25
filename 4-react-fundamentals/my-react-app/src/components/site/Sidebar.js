import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../../components/ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo'
import LifeCycle from '../concepts/LifeCycleCodepen'
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp'
import MovieSearchApp from '../apps/movie-search-app/MovieApp'
import NytApp from '../apps/nyt-app/NytApp'
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp'

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to='/jsxrules'>JSX</Link></li>
        <li><Link to='/classcomponentdemo'>Class Component Demo</Link></li>
        <li><Link to='/propsdemo'>Props Demo</Link></li>
        <li><Link to='/lifecyclediagram'>Life Cycle Diagram</Link></li>
        <li><Link to='/timer'>Timers</Link></li>
        <li><Link to='/movie'>Movie Search App</Link></li>
        <li><Link to='/nyt'>NYT Article Search</Link></li>
        <li><Link to='/reactconceptlist'>React Concepts Checklist</Link></li>
​
      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
            <Route exact path='/jsxrules'><JSXRules /></Route>
            <Route exact path='/classcomponentdemo'><ClassComponentDemo /></Route>
            <Route exact path='/propsdemo'><PropsDemo /></Route>
            <Route exact path='/lifecyclediagram'><LifeCycle /></Route>
            <Route exact path='/timer'><TimePiecesApp /></Route>
            <Route exact path='/movie'><MovieSearchApp /></Route>
            <Route exact path='/nyt'><NytApp /></Route>
            <Route exact path='/reactconceptlist'><ReactConceptsApp /></Route>
        </Switch>
    </div>
  </div>

)

export default Sidebar