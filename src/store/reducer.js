import { combineReducers } from "redux";

const initialState = {
    allFavors: {}
}

function favors(state, action) {
    const {type, payload} = action
    state = state || initialState
    switch (type) {
        case 'TOGGLE_FAVOR':
            const allFavors = state.allFavors
            allFavors[payload.recipeId] = payload.isFavor 
            return {
                ...state,
                allFavors: {...allFavors}
            }
        default:
            return state
    }
}

export default combineReducers({ favors });
