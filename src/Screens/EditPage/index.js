import React,{useState,useCallback} from 'react';
import {View, Text,ScrollView,KeyboardAvoidingView,Modal,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Input,Button} from 'react-native-elements';
import isEmail from 'validator/es/lib/isEmail';
import {useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';


import {styles} from './styles';


const EditPage = ({user,userUpadateTC,setLoading}) => {
    const[updateUser,setUpdateUser] = useState(user)
    const [valideEmail, setValidEmail] = useState('')
    const [error,setError] = useState('')
    const loading = useSelector(({date}) => date.loading)
    const navigation = useNavigation()




    const changeName = (name) => {
        setUpdateUser({
            ...updateUser,
            full_name:name
        })

    }

    
    const changeEmail = (email) => {

        const valide = isEmail(email)
        if(valide){
            setUpdateUser({
                ...updateUser,
                email:email
            })
            setValidEmail(
                ''
            )
        } else {
            setValidEmail(
                'Неверная форма email'
            )
        }


    }

    
    const changePhone = (phone) => {
        setUpdateUser({
            ...updateUser,
            phone:phone
        })
    }

    
    const changeFaceBookId = (id) => {
        setUpdateUser({
            ...updateUser,
            facebook_id:id
        })
    }

    
    const changeTwitter = (id) => {
        setUpdateUser({
            ...updateUser,
            twitter_id:id
        })
    }

    
    const changeAvatar = () => {

    }


    const editProfile = () => {
            const newProfile = {...updateUser}
            userUpadateTC(newProfile)
            .then(()=>{
                setLoading(false)
                navigation.navigate('Main')
            })
            .catch(()=>{
                setError('Ошибка сервера')
                setLoading(false)
            })


    }

    return (
        <KeyboardAvoidingView>
            <ScrollView style={{marginTop:30}}>
                <Input
                    label="Сменить имя"
                    placeholder="Редактировать Имя"
                    onChangeText={name => changeName(name)}
                    defaultValue={updateUser.full_name || ''}
                />


                <Input
                    label="Email"
                    placeholder="Редактировать email"
                    onChangeText={email => changeEmail(email)}
                    defaultValue={updateUser.email || ''}
                    keyboardType='email-address'
                    errorMessage = {valideEmail}
                />

                <Input
                    label="Телефон"
                    placeholder="Редактировать телефон"
                    onChangeText={phone =>changePhone(phone)}
                    keyboardType='numeric'
                    defaultValue={updateUser.phone || ''}
                />

                <Input
                    label="FaceBook ID"
                    placeholder="Редактировать ID"
                    onChangeText={id => changeFaceBookId(id)}
                    defaultValue={updateUser.facebook_id || ''}
                />

                <Input
                    label="Twitter ID"
                    placeholder="Редактировать ID"
                    onChangeText={id => changeTwitter(id)}
                    defaultValue={updateUser.twitter_id || ''}
                />

                {loading ?    
                <ActivityIndicator size="large" color="#0000ff" />
                :
                <Button
                onPress={() => editProfile()} 
                title = 'Редактировать'/>

                }

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={error}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{error}</Text>

                            <View style={{flexDirection:'row',justifyContent:'space-between',width:200,margin:5}}>
                                <TouchableOpacity
                                style={{ ...styles.openButton, backgroundColor: "#E0FFFF" }}
                                onPress={() => setError('') }
                                >
                                <Text style={styles.textStyle}>Ok!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </Modal>


            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default EditPage;