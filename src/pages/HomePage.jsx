import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
      console.log(response)
      setCountries(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
          {/* <a href="/" className="list-group-item list-group-item-action"
          >country listed</a> */}
          {countries.map((eachCountries) => {
            return(
              <a key={eachCountries._id} href="/" className="list-group-item list-group-item-action"
              >{eachCountries.name.common}</a> 
            )
          })}
      </div>
    </div>
  );
}

export default HomePage;
