import React from 'react';
import './App.css';
import {Photo} from "./Component/Profile/ProfilPhoto";
import {Name} from "./Component/Profile/FullName";
import {Adresss} from "./Component/Profile/Address";
import {NavigationBar} from "./Component/Profile/NavBar";


function App() {

  return (
    <div className="App">
    <Photo />
    <Name/>
   <Adresss/>
   <NavigationBar />
<p> You may go check my facebook or github profile. have a nice day ;)</p>

    </div>
  );
}

export default App;
