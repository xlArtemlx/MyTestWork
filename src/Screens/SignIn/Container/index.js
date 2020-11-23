import React from 'react'
import {connect} from 'react-redux'

//Reducers
import { signInUresrTc,setLoading} from '../../../Redux/reducer/mainReducer'

import SignIn from "../index";


const mapStateToProps = ({date}) => ({
    user: date.user,
    loading: date.loading,
})

export default connect(mapStateToProps, {signInUresrTc,setLoading})( ({signInUresrTc,loading,setLoading}) => {



    return <SignIn signInUresrTc={signInUresrTc} loading={loading} setLoading={setLoading}/>
})