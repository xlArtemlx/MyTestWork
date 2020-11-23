import React from 'react'
import {connect} from 'react-redux'

//Reducers
// import { } from '../../../Redux/reducer/mainReducer'

import Settings from "../index";


const mapStateToProps = ({date}) => ({
    user: date.user
})

export default connect(mapStateToProps, {})( ({}) => {



    return <Settings />
})