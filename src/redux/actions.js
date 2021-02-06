const fetch = require('node-fetch');

export const add_country_action = ( country = {} ) =>  {
    return {
        type : "ADD_COUNTRY",
        country
    }
}

let example_summary_data = {
    death : 123,
    alive : 431,
    infected : 111
}

export const get_initial_summary_data_action = () => {
    return dispatch => {
        dispatch({
            type : "FETCH_SUMMARY_DATA_LOAD"
        });

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
                    let summary = {
                        death : data.Global.TotalDeaths,
                        alive : data.Global.TotalRecovered,
                        infected : data.Global.TotalConfirmed
                    };

                    dispatch({
                        type : "FETCH_SUMMARY_DATA_SUCCESS",
                        payload : summary
                    })
                }
            )
            .catch(
                (e) => {
                    console.log( e );
                }
            );
    }
}