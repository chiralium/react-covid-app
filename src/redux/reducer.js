export const initialState = {
    count : 0,
    countries : [],
    summary : {
        death : null,
        alive : null,
        infected : null
    }
}

export const reducer = function( state = initialState, action ) {
    switch ( action.type ) {
        case "ADD_COUNTRY":
            console.log( action.country );
            return {
                ...state,
                count : state.count + 1,
                countries: [
                    ...state.countries,
                    action.country,
                ]
            }
        default:
            return state;
    }
}