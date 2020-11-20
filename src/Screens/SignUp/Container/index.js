import React from 'react'
import {useEffect} from "react";
import {connect} from 'react-redux'

//Reducers
import { setUserTC,regUserTC} from '../../../Redux/reducer/mainReducer'

import SignUp from "../index";


const mapStateToProps = ({date}) => ({
    dreams: date.dreams
})

export default connect(mapStateToProps, {setUserTC,regUserTC})( ({dreams,setUserTC,regUserTC}) => {


    useEffect(() => {

    }, [])

    return <SignUp dreams={dreams} setUserTC={setUserTC} regUserTC={regUserTC}/>
})