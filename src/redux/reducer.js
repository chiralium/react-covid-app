export const reducer = function( state = [], action ) {
    switch ( action.type ) {
        case "ADD_COUNTRY":
            return [ ...state, action.country ];
        default:
            return state;
    }
}