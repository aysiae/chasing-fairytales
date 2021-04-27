let initialState = {
    characters: [] 
}

export const getChars = payload => {
    console.log('payload', payload);
    return {
        type: 'LOAD',
        payload: payload,
    }
}

export default (state=initialState, action) => {
    console.log('inside switchboard')
    let {type, payload} = action; 
    switch(type) {
        case 'LOAD':
            console.log('inside load', payload)
            return {...state, characters: payload};
        
        default: 
            return state;
    }
}