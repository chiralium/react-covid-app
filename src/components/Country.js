import React, { useState, useEffect } from 'react';
const fetch = require('node-fetch');

const Country = (props) => {
    const [ death, setDeath ] = useState(null);
    const [ alive, setAlive ] = useState(null);
    const [ infected, setInfected ] = useState(null);

    useEffect(
        () => {
            fetch(
                `${process.env.API_URL}summary`,
                {
                    method : 'GET',
                    headers : {
                        "X-Access-Token" : process.env.AUTH_KEY
                    },
                    redirect : "follow"
                }
            ).then( response => response.json() )
                .then(
                    ( data ) => {
                        let is_founded = false;
                        data.Countries.forEach(
                            (item) => {
                                if ( item.Country === props.country_name ) {
                                    setDeath(item.TotalDeaths);
                                    setAlive(item.TotalRecovered);
                                    setInfected(item.TotalConfirmed);
                                    is_founded = true;
                                }
                            }
                        );

                        if ( !is_founded ) {
                            setDeath('unknown');
                            setInfected('unknown');
                            setAlive('unknown');
                        }
                    }
                )
                .catch(
                    (e) => {
                        console.log(e);
                    }
                );
        },
        []
    );

    return (
        <>
            <div className="country_box">
                <div className="aligned-center">{props.country_name}</div>
                <div className="label dark">
                    deaths: { death ? death : "loading..."}
                </div>
                <div className="label green">
                    alive: { alive ? alive : "loading..."}
                </div>
                <div className="label yellow">
                    infected: { infected ? infected : "loading..." }
                </div>
            </div>
            <div className="country_box country_added">
                <span>ADD</span>
            </div>
        </>
    );
};

export default Country;