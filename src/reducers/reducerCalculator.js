const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER1":
            return { ...state, number1: action.payload };
        case "SET_NUMBER2":
            return { ...state, number2: action.payload };
        case "SET_RESULT":
            return { ...state, result: action.payload };
        case "CLEAR":
            return { ...state, number1: initialState.number1, number2: initialState.number2 };
        default:
            throw new Error("Invalid action type");
    }
};

const initialState = {
    number1: 0,
    number2: 0,
    result: 0,
};

export { initialState, reducer }