import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { restoreSpot } from "./store/spotReducer";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotList from "./components/SpotsList";
import SpotDetail from "./components/SpotsDetail";
import SpotHostForm from "./components/SpotsHostForm";
import * as spotActions from "./store/spotReducer"
import './app.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [spotLoaded, setSpotLoaded] = useState(true);
  const spotsObj = useSelector((state) => state.spotState.list)
  // const imageObj = useSelector((state) => state.imageState.list)
  const spots = Object.values(spotsObj)
  // console.log(spotsObj)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(spotActions.restoreSpot())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route exact path={'/spots/new'}>
            <SpotHostForm spots={spots} />
          </Route>
          <div className="pageDiv">
      {isLoaded && (
        <Switch>

          <Route exact path={'/'}>
            <h1>Welcome to Heir B&B!</h1>
            <SpotList spots={spots} />
          </Route>

          <Route path={'/spots/:spotId'}>
            <SpotDetail spots={spots} />
          </Route>


          <Route>
            <h2>Page Not Found</h2>
          </Route>

        </Switch>
      )}

          </div>
    </>
  );
}

export default App;
