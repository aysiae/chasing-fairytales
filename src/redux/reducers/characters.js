let initialState = {
    categories: [
        {value: 'basics', name:'Basics', visible: false},
        {value: 'physical', name: 'Physical Appearance', visible: false},
        {value: 'personality', name:'Personality', visible: false},
        {value: 'starSigns', name:'Star Signs' , visible: false},
        {value: 'family', name:'Family & Heritage' ,visible: false},
        {value: 'love', name: 'Love & Romance', visible: false},
        {value: 'super', name: 'Supernatural', visible: false},
        {value: 'about',name:'About', visible: false},
        {value: 'notes', name: 'Notes', visible: false},
    ], 
}

export const handleVisibility = (payload) => {
    return {
        type: 'CHANGE-VISIBLE',
        payload: payload,
    }
}

export default (state=initialState, action=handleVisibility) => {
    let {type,payload} = action; 
    switch(type){
        case 'CHANGE-VISIBLE':
            for(var category of state.categories) {
                if(category.value == payload.value) {
                    if(category.visible) {
                        category.visible = false;
                    } else {
                        category.visible = true;
                    }
                }
                return {...state}
            }
        
        default: 
            return state;
    }
}