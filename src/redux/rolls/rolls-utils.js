export const increase = (arr, idx) => {
    return arr.map(roll => {
        return roll.id === idx && roll.counter < roll.total ? 
        {...roll, counter: roll.counter + 1}
        : roll
    })
};

export const decrease = (arr, idx) => {
    return arr.map(roll => {
        return roll.id === idx && roll.counter > 1 ? 
        {...roll, counter: roll.counter - 1}
        : roll
    })
};