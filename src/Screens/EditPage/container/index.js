import React from 'react'

import {connect} from 'react-redux'

//Reducers
import { userUpadateTC,setLoading} from '../../../Redux/reducer/mainReducer'

import EditPage from "../index";


const mapStateToProps = ({date}) => ({
    user: date.user
})

export default connect(mapStateToProps, {userUpadateTC,setLoading})( ({user,userUpadateTC,setLoading}) => {


    return <EditPage user={user} userUpadateTC={userUpadateTC} setLoading={setLoading}/>
})