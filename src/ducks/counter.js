const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(num) {
    return {
        type: INCREMENT,
        payload: num
    };
}

export function decrement(num) {
    return {
        type: DECREMENT,
        payload: num
    };
}

const initialState = {
    currentValue: 0
};

// This is the simplest form of reducer
// Given inputs should always generate the same outputs
export default function counter(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            // return Object.assign({}, state, {
            //     currentValue: state.currentValue + action.payload
            // });


            return {
                ...state,
                currentValue: state.currentValue + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                currentValue: state.curentValue - action.payload
            };
        default:
            return state;
    }
 }