import AsyncStorage from '@react-native-async-storage/async-storage';
import Cube from '../../Cube'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SET_USER = 'SET_USER';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
const SET_SAVE_LOGIN = 'SET_SAVE_LOGIN';





let initialState = {
    user:{},
    loading:false,
    errorMessage:false,
    saveLogin:false
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
        case SET_SAVE_LOGIN: {
            return {
                ...state,
                saveLogin: action.saveLogin
            }
        }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, user});
export const setLoading = loading => ({type: SET_LOADING, loading});
export const setErrorMessage = errorMessage => ({type: SET_ERROR_MESSAGE, errorMessage});
export const setSaveLogin = saveLogin => ({type: SET_SAVE_LOGIN, saveLogin});
export const setView = view => ({type: SET_VIEW, view});


export const signInUresrTc = (userProfile) => async (dispatch, getState) => {
    dispatch(setLoading(true))
    if(getState().date.saveLogin){
        await AsyncStorage.setItem('@login', userProfile.login)

    } else {
        await AsyncStorage.setItem('@login','')
    }
    const jsonUser = JSON.stringify(userProfile)
    await AsyncStorage.setItem('@avtoLogin', jsonUser)

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

export const userUpadateTC = (newProfile) => async (dispatch,getState) => {
    dispatch(setLoading(true))
    await Cube.UpDate(newProfile)
          .then(() => {
            dispatch(setUser(newProfile))
            dispatch(setLoading(false))
          })
}

export const setSaveLoginTC = (saveLogin) => async (dispatch,getState) =>{
    dispatch(setSaveLogin(saveLogin))
}


export const getMainState = () => async getState => {
    console.log(getState())
}




