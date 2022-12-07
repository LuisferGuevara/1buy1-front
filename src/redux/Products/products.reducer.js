const INITAL_STATE = {
    products: [],
    category: [],
    filter: [],
    isLoading: false,
    error: false

};

const productsReducer = ( state = INITAL_STATE, action ) => {
    const trial = {
        gettingProducts: { ...state, isLoading: true },
        getProducts: { ...state, products: action.payload, isLoading: false, error: false },
        errorProducts: { ...state, error: action.payload, isLoading: false, products: [] },
        setCategory: { ...state, category: action.payload, filter: action.payload },
        setFilter: { ...state, filter: action.payload }
    };

    return trial[action.type] || state;
}







export default productsReducer