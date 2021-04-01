let intiialState={loggedIn: false, uid: ''}

export const loggedIn = payload => {
    return {
        TYPE: 'LOGGED-IN',
        payload: payload
    }
}

export const signedOut = payload => {
    return {
        TYPE: 'SIGNED-OUT',
        payload: payload,
    }
}

export default (state=intiialState, action) => { 
    let {type, payload} = action;
    switch(type) {
        case 'LOGGED-IN':
            return{...state, loggedIn: true, uid: payload.uid}

        case 'SIGNED-OUT':
            return{...state, loggedIn: false, uid: ''}

        default:
            return state;
    }

}
