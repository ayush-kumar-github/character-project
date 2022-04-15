import React, { useState, useEffect } from "react";

const Card = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      //received json data
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        let outcome = data.results;
        setUser(outcome);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="row ">
        <h1 className="text-center p-4 text-white">characters</h1>
        {user.map((data) => (
          <div className="col-xs-9 col-sm-6 col-md-3 p-2  " key={data.id.value}>
            <div className="card ">
              <div className="card-body">
                <img src={data.image} className="card-img-top" alt="" />
                <h5 className="card-title text-center">{data.name}</h5>

                <h6>
                  {data.species}({data.gender})
                </h6>
                <h5>{data.episode.name}</h5>
                <h6>location</h6>

                <p className="card-text">
                  {data.location.name}
                  {data.location.url}
                </p>
                <h6>origin</h6>
                <p className="card-text">
                  {data.origin.name}
                  {data.origin.url}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
