import shopData from './shop.data';

const Initial_State = {
    shopData : shopData
}

const shopReducer = (state = Initial_State, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer;