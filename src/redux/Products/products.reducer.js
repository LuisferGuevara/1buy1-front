const INITAL_STATE = {
    products: [],
    filter: [],
    isLoading: false,
    error: false

};

const productsReducer = ( state = INITAL_STATE, action ) => {
    const trial = {
        getProducts: { ...state, products: action.payload },
        errorProducts: { ...state, error: action.payload, products: [] },
        setFilter: { ...state, filter: action.payload }
    };

    return trial[action.type] || state;
}





export default productsReducer