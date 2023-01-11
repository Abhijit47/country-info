import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    try {
      const res = await fetch(process.env.REACT_APP_SECRET_URL)
        //   console.log(res);
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  // Add id to each object
  data.map((item, id) => (item.id = id + 1));
  //   console.log(data);

  return (
    <>
      <h1 className="heading">Country Info</h1>
      <div className="grid">
        {data.map((country, id) => {
           
          const uid = id + 1;
          return (
            <div className="card" key={uid}>
              <span className="tag">{uid}</span>
              <h2 className="country-title">{country.name.common}</h2>
              <img className="image-sm" src={country.coatOfArms.svg} />
              <img
                className="box"
                src={country.flags.png}
                alt={country.name.common}
              />
              <div className="card-info">
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Area: {country.area}</p>
                <p className="timezone">Timezone: {country.timezones}</p>
                <p>Calling Code: {country.idd.root}</p>
                <p>Top Level Domain: {country.tld}</p>
                <p>{`Latitude: ${country.latlng[0]}, Longitude: ${country.latlng[1]}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
