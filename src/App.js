import './App.css';
import { HashRouter as Router, Route, Switch, Link, BrowserRouter, Redirect } from 'react-router-dom'
// import Other from './Other'
// import Home from './Home'
import './App.css';
import Cat from './Components/Cat/Cat';
import Header from './Components/Header/Header';
import Breed from './Components/Breed/Breed';
import Content from "./Components/Content/Content";
import { useEffect, useState } from 'react';

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

// const routes = [
//   {
//     Component: Other,
//     key: 'Other',
//     path: '/other'
//   },
//   {
//     Component: Other,
//     key: 'Another',
//     path: '/another'
//   },
//   {
//     Component: Home,
//     key: 'Home',
//     path: '/'
//   }
// ]





function App() {
  return (
    <div className="App">
      <Router>
        {/* <Content /> */}
        <Header />
        <Link to="/">Home</Link>
        <Cat />
        <Switch>
          {/* <Route path="/Breed" render={(props) => <Breed {...props} />} /> */}
          <Route exact path="/" component={Breed} />
          <Route
            path="/:id"
            render={(FunCat) => {
              console.log(FunCat);
              return <Content {...FunCat} breed={FunCat.match.params.id} />;
            }}
            />
        </Switch>
      </Router>
    </div>
  );
}


// render={routerProps => { 
// return <Breed{...routerProps} name = {routerProps.match.params.name}/>
// (b) => b.id === routerProps.match.params.id
// /> 
  
//   return (
//     <Router>
//       <nav>
//         {routes.map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
//       </nav>
//       <Switch>
//         {
//           routes.map(({key, Component, path}) => (
//             <Route
//               key={key}
//               path={path}
//               component={props => <Component {...props} page={key} />}
//               />))
//         }
//       </Switch>
//     </Router>
//   )
// }

export default App;

