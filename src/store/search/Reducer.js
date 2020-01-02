import { Actions } from './Actions';
import { INITIAL_STATE } from './InitialState';

const ACTION_HANDLERS = {
    [Actions.PERFORM_SEARCH]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.imageUrl = action.imageUrl;
        return Object.assign({}, state, tempState);
    }, 

    [Actions.GET_PLAYERS]: (state, action) => {
        var tempState = Object.assign({}, state);
        tempState.players = action.players;
        return tempState;
    },

    [Actions.SAVE_USER_INFO]: (state, action) => {
        var tempState = Object.assign({}, state);
        tempState.userInfoResponse = action.userInfoResponse;
        return tempState;
    }
};

export default function reduce(state, action) {
    state = state || INITIAL_STATE;
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
