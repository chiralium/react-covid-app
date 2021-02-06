export const initialState = {
    count : 0,
    countries : [],
    summary : {
        death : 0,
        alive : 0,
        infected : 0
    }
}

export const reducer = function( state = initialState, action ) {
    switch ( action.type ) {
        case "ADD_COUNTRY":
            return {
                ...state,
                count : state.count + 1,
                countries: [
                    ...state.countries,
                    action.country,
                ]
            }

        case "FETCH_SUMMARY_DATA":
            return {
                ...state,
                summary: action.payload
            }

        default:
            return state;
    }
}