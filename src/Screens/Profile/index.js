import React,{useState} from 'react';
import {View, Text,Dimensions, Modal,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button} from 'react-native-elements';
import Items from '../../Components/Items'
import Cube from '../../Cube'

import {styles} from './styles';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height

const Profile = ({user}) => {
    const navigation = useNavigation()
    const [visible,setVisible] = useState(false)

    const logOut = () => {
        Cube.logout()
        .then(() => {
            navigation.navigate('SingIn')
            setVisible(false);
        })
        .catch(()=>{})

    }


  





    
    return (
        <View style={{justifyContent:'space-between',height: 200}}>
            <View style={{margin:5,fontSize:20, justifyContent:'space-between',flexDirection:'row'}}>
                <Text style={{fontSize:20}}> Профиль пользователя</Text>
                <Text style={{fontSize:20}}> {`${user.full_name}`}</Text>

            </View>
            
            <View>
                <Items user={user}/>
            </View>

            <Button title="Выйти" onPress={() => setVisible(true)} />

            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Вы действительно хотите выйти?</Text>

                    <View style={{flexDirection:'row',justifyContent:'space-between',width:200,margin:5}}>
                        <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#E0FFFF" }}
                        onPress={() =>  logOut()}
                        >
                        <Text style={styles.textStyle}>Да</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#E0FFFF" }}
                        onPress={() => {
                            setVisible(false);
                        }}
                        >
                        <Text style={styles.textStyle}>Нет</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </Modal>


        </View>
    )
  }



  export default Profile;



