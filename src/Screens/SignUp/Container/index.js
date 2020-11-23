import React from 'react'
import {connect} from 'react-redux'

//Reducers
import { setUserTC,regUserTC} from '../../../Redux/reducer/mainReducer'

import SignUp from "../index";


const mapStateToProps = ({date}) => ({
    user: date.user
})

export default connect(mapStateToProps, {setUserTC,regUserTC})( ({setUserTC,regUserTC}) => {

    return <SignUp setUserTC={setUserTC} regUserTC={regUserTC}/>
})