import superagent from 'superagent';

let initialState = {oneliners: []}

const url = 'https://writrs-api.herokuapp.com/oneliner';

export const get = async () => dispatch => {
    return superagent.get(url)
    .then(res  => {
        dispatch(getAction(JSON.parse(res.text)))
    })
}

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload,
    }
}

export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'GET':
        return {...state, oneliners: payload}

        default:
            return state;
    }
}
