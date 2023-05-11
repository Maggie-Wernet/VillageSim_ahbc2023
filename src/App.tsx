import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from './components/Map/Map';
import { RescourcesView } from './components/ResourcesView/ResourcesView';

function App() {

  const [people, setPeople] = useState(0);
  const [grain, setGrain] = useState(5);
  const [sheep, setSheep] = useState(1);
  const [lumber, setLumber] = useState(5);
  const [water, setWater] = useState(5);

  const resources = {
    people,
    grain,
    sheep,
    lumber,
    water
  }

  return (
    <div>
      <Map resources={resources}></Map>
      <RescourcesView resources={resources} />
    </div>
  );
}

export default App;
