import rest from '../utils/rest';

export const Actions = {
    PERFORM_SEARCH: 'PERFORM_SEARCH',
    GET_PLAYERS: 'GET_PLAYERS'
};

export function performSearch(searchTxt) {
    return dispatch => {
        const apiKey = 'bhBF0FTZLsgLtWHCp21KqOmArVLbkC8W';
        const giphy = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag=' + searchTxt;

        return rest.get(giphy).then(response => {
            dispatch({type: Actions.PERFORM_SEARCH, imageUrl: response.data.data.image_url});
        })
    };
}

export function getPlayers() {
    return dispatch => {
        return rest.get("http://dummy.restapiexample.com/api/v1/employees").then(response => {
            console.log(response.data)
            dispatch({type: Actions.GET_PLAYERS, players: response.data})
        })
    }
}
