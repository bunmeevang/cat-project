import './App.css';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Cat from './Components/Cat/Cat';
import Header from './Components/Header/Header';
import Breed from './Components/Breed/Breed';
import Footer from './Components/Footer/Footer'
import Content from "./Components/Content/Content";
import { useEffect, useState } from 'react';

const url = 'https://api.thecatapi.com/v1/breeds';

function App() {
  const [ breedUrl, setBreedUrl ] = useState([])

  function fetch_data(){
      fetch(url, {
          headers: {
              'x-api-key': '8ce8c2fe-3566-47a6-80bb-8e8492cc8ac2'
          }
      }).then(res=>{
          if(res.ok){
              return res.json();
          }
          throw new Error('Request Failed')
      },networkError=> console.log(networkError.message)
      ).then(jsonRes=>{
          // console.log(jsonRes)
          setBreedUrl(jsonRes)
      })
  }

  useEffect(()=>{
      fetch_data()
      }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Link to="/">Home</Link>
        <Link to="/breed">Breeds</Link> */}
        {/* <Cat /> */}
        <Switch>
          <Route exact path="/" component={Cat} />
          <Route exact path="/breed" component={Breed} />
          <Route
            path="/:id"
            render={(FunCat) => {
              // console.log(FunCat);
              const breedData = [...breedUrl].filter(
                (p) => p.id === FunCat.match.params.id
               ); //console.log(breedData)
              return <Content {...FunCat} breed={breedData[0]} />;
            }}
            />
        </Switch>
        <Footer />
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

