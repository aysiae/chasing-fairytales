let intiialState={currUser: false, uid: ''}

export const update = payload => {
    return {
        type: 'UPDATE',
        payload: payload
    }
}


export default (state=intiialState, action) => { 
    let {type, payload} = action;
    switch(type) {
        case 'UPDATE':
            let currUser = payload.currUser;
            let uid = payload.uid;
            return{currUser, uid}

        default:
            return state;
    }

}
