import axios from 'axios';

const GET_PEOPLE = 'GET_PEOPLE';

export function getPeople(){
    return {
        type: GET_PEOPLE,
        payload: axios.get('https://www.swapi.co/api/people')
    };
}

const initialState = {
    people: [],
    loading: false,
    didErr: false
};

export default function people(state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case `${GET_PEOPLE}_PENDING`:
            return {
                ...state,
                loading: true
        };
        case `${GET_PEOPLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                people: action.payload.data.results
            };
        case `${GET_PEOPLE}_REJECTED`:
            return {
                ...state,
                loading: false,
                didErr: true
            }
    };
}