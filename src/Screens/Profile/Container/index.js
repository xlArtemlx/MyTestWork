import React from 'react'
import {useEffect} from "react";
import {connect} from 'react-redux'

//Reducers
// import {} from '../../../Redux/reducer/mainReducer'

import Profile from "../index";


const mapStateToProps = ({date}) => ({
    user: date.user
})

export default connect(mapStateToProps, {})( ({user}) => {


    useEffect(() => {

    }, [])

    return <Profile user={user} />
})