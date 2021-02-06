export const initialState = {
    count : 0,
    countries : [],
    summary : {
        death : 0,
        alive : 0,
        infected : 0
    },
    is_loading : false
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

        case 'FETCH_SUMMARY_DATA_LOAD':
            return {
                ...state,
                is_loading: true
            }

        case "FETCH_SUMMARY_DATA_SUCCESS":
            return {
                ...state,
                summary: action.payload,
                is_loading: false
            }

        default:
            return state;
    }
}