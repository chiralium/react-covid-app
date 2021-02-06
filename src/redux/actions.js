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
        setTimeout(
             () => {
                dispatch({ type : "FETCH_SUMMARY_DATA", payload : example_summary_data })
            }
        );
    }
}