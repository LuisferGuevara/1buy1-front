const INITAL_STATE = {
    products: [],
    isLoading: false,
    error: false,

};

const productsReducer = ( state = INITAL_STATE, action ) => {
    const trial = {
        getProducts: { ...state, products: action.payload },
        errorProducts: { ...state, error: action.payload, products: [] }
    };
    return trial[action.type] || state;
}

export default productsReducer