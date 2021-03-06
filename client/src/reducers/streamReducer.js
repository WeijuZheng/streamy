import _ from 'lodash';
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELEte_STREAM,
    EDIT_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELEte_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default streamReducer;
