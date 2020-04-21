import { GET_ROLLS, INCREASE_ROLL, DECREASE_ROLL  } from './rolls.types';
import api from '../../api/api';

export const getRolls = () => async (dispatch) => {
    api.then(data => {
        dispatch({
            type: GET_ROLLS,
            payload: data
        });
    })
};

export const increaseRoll = (id) => (dispatch) => {
    dispatch({
        type: INCREASE_ROLL,
        payload: id
    })
};

export const decreaseRoll = (id) => (dispatch) => {
    dispatch({
        type: DECREASE_ROLL,
        payload: id
    })
};
