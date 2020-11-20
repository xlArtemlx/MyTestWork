import Cube from '../../Cube'
const SET_USER = 'SET_USER';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'




let initialState = {
    dreams: 'My dreams',
    user:{},
    loading:false,
    errorMessage:false,
};
export const MainReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER: {
            return {
                ...state,
                user: action.user
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, user});
export const setLoading = loading => ({type: SET_LOADING, loading});
export const setErrorMessage = errorMessage => ({type: SET_ERROR_MESSAGE, errorMessage});


export const signInUresrTc = (userProfile) => async (dispatch, getState) => {
    dispatch(setLoading(true))

        await Cube.SignIn(userProfile)
              .then((user) => {
                dispatch(setErrorMessage(false))
                dispatch(setUser(user))
                dispatch(setLoading(false))

              })

    


    
} 

export const regUserTC = (userProfile) => async (dispatch, getState) => {

    dispatch(setUser(userProfile))
    await Cube.SignUp(userProfile)

    
} 