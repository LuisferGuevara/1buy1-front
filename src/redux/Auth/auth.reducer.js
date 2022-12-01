const INITIAL_STATE = {
   user: null,
   token: null,
   error: false,
   isLoading: false,
}

const authReducer = (state = INITIAL_STATE, action) => {

    const trial = {

        loginUser: { ...state, user: action.payload?.userDb, token: action.payload?.token },
        loginError: { ...state, error: action.payload },

        registerUser: { ...state, user: action.payload },
        registerError: { ...state, error: action.payload },

        logoutUser: { ...INITIAL_STATE },
        logoutError: { ...state, error: action.payload },

        userChecksession: { ...state, token: action.payload?.token, user:action.payload?.user },

    };

    return trial[action.type] || state;
}

export default authReducer;