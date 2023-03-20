import { React, useState } from 'react';
import './App.css';
import DiscoverCard from './Components/Discover Card/DiscoverCard';
const ACCESS_KEY = import.meta.env.VENI_APP_ACCESS_KEY;


function App() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState(" ");
  const [attributes, setAttributes] = useState([]);

  // https://api.harvardartmuseums.org/object?hasimage=1&apikey=c3c7c645-650f-4a1c-9cfd-6f45a844148a
  const makeQuery = () => {
    let query = `https://api.harvardartmuseums.org/object?hasimage=1&apikey=c3c7c645-650f-4a1c-9cfd-6f45a844148a`;
    callAPI(query).catch(console.error);
  };

  const callAPI = async (query) => {
    
    const response = await fetch(query);
    const json = await response.json();

    let info = json['info'];
    let records = json['records'];

    if (json && records['url'] == "null"){
      alert("Oops! Something went wrong with that query, let's try again!")
    }
    else {
      setUrl(json["records"]["url"]);
      setName(json["records"]["title"]);
      setAttributes([
        ...[],
        records['culture'],
        records['division'],
      ]);
    }
  };


  const buttonIsClicked = () => {

    makeQuery();

  };

  return (
    <div className="whole-page">
      <h1>  🎨 Appreciating Fine Arts 🎨 </h1>
      <DiscoverCard attributes={attributes} name={name}
        onSubmit={buttonIsClicked}/>
      <br></br>
    </div>
  );
};

export default App;
