import React,{useState} from 'react';
import {View, Text,Dimensions} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height

const Profile = ({user}) => {
    const [name,setName] = useState(user.full_name)

    
    return (
        <View style={{justifyContent:'space-between',height: 200}}>
            <Text>
                Профиль пользователя {`${name}`}
            </Text>
            <View style={{backgroundColor:'green',justifyContent:'space-between',height:200,marginTop:50}}>
                <Text style={{margin:5,height:40,alignContent:'center'}}>Имя потьзователя {`${name}`}</Text>
                <Text style={{margin:5,height:40}}>Имейл ...</Text>
                <Text style={{margin:5,height:40,justifyContent:"center"}}>Теги....</Text>
            </View>
        </View>
    )
  }



  export default Profile;



