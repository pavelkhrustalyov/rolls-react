export const addToCart = (arr, payload) => {
    const index = arr.findIndex(item => item.id === payload.id);
    if (index === -1) {
        return [...arr, payload]
    }
    return arr.map(item => item.id === payload.id ? payload : item);
};

const deleteFromCart = (arr, id) => arr.filter(item => item.id !== id);

export const decrease = (arr, idx) => {
    const item = arr.find(item => item.id === idx);
    if (item.counter === 1) {
        return deleteFromCart(arr, idx);
    }
    return arr.map(roll => {
        return roll.id === idx && roll.counter > 1 ?
        {...roll, counter: roll.counter - 1}
        : roll
    })
};