import React,{useMemo} from "react";
import {ScrollView, Text, View} from 'react-native'
import {styles} from './styles'


const itemsSections = (user) => {


    return [
        {
            id: 'user_name',
            title: 'Имя Пользователя',
            value: user.full_name || ''
        },
        {
            id: 'user_email',
            title: 'Email',
            value: user.email || ''
        },
        {
            id: 'user_phone',
            title: 'Телефон',
            value: user.phone || ''
        },
        {
            id: 'user_facebook',
            title: 'Faceebok',
            value: user.facebook_id || ''
        },
        {
            id: 'user_twitter',
            title: 'Twitter',
            value: user.twitter_id || ''
        },
    ]
}

const Items = ({user}) => {
    
const renderItems = (values) =>  {

    return values.map( (value, index) => {

        if(value.value){
            return  (
                <View key={index} style={styles.itemsvalue}>
                   <View  style={styles.itemsText}>
                       <Text>{value.title}</Text>
                       <Text style={{fontWeight: 'bold'}}>{value.value}</Text>
                   </View>
                </View>
            )
        }else {
            return null
        }
    })
}

    return (
        <ScrollView style={styles.allItems}>

            {
                renderItems(itemsSections(user))
            }
        </ScrollView>
    )
}

export default Items