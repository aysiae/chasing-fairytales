let initialState = {nav: [{value: 'Home', status: 'active'},{value:'Characters', status:'inactive'},{value:'Places', status: 'inactive'},{value:'Scenes', status:'inactive'}]}


export const changeActive = (category) => {
    return {
        payload: category,
        type: 'CHANGE-ACTIVE'
    }
}

export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'CHANGE-ACTIVE':
            let change = state.nav.map(navItem => {
                if(navItem.value === payload.value) {
                    navItem.status = 'active';
                } else {
                    navItem.status = 'inactive';
                }
                return navItem;
            })
            return {...state,change};
        default:
            return state;
    }
}