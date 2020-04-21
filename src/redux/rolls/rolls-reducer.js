import { increase, decrease } from './rolls-utils';
import { GET_ROLLS, INCREASE_ROLL, DECREASE_ROLL } from './rolls.types';

const initialState = {
    rollItems: [],
    loading: true
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_ROLLS:
            return {
                ...state,
                rollItems: payload,
                loading: false
            }
        case INCREASE_ROLL:
            return {
                ...state,
                rollItems: increase(state.rollItems, payload)
            }
        case DECREASE_ROLL:
            return {
                ...state,
                rollItems: decrease(state.rollItems, payload)
            }
            
        default:
            return state;
        
    }
};
