import React, {useCallback, useState} from 'react';
import {View, Text,TextInput,TouchableOpacity,CheckBox,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cube from '../../Cube'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Input,Button} from 'react-native-elements';

import {styles} from './styles';



const SignUp = ({dreams,setUserTC,regUserTC}) => {
    const navigation = useNavigation()

    const [newUser,setNewUser] = useState({
        password: '',
        login:'',
        full_name:'',
    })
    const [comfirm,setComfirm] = useState ({
        confirm_password: '',
    })
    const [validForm, setValidForm] = useState({
        password: true,
        login:true,
        full_name:true,
        confirm_password: true,
    })

    

    const [visible,setVisible] = useState(false)
    const [errorText,setErrorText] =useState('')


    const loginChange = (login) => {

            setNewUser({
                ...newUser,
                login: login.trim(),
            });
            setErrorText('')
            setValidForm({
                ...validForm,
                login: true,
            })
    
    }

    
    const fullNameChange = (name) => {
            setNewUser({
                ...newUser,
                full_name: name,
            });
            setErrorText('')
            setValidForm({
                ...validForm,
                full_name: true,
            })
    
    }


    const passChange = (pass) => {
        setNewUser({
            ...newUser,
            password: pass,
        });
        setErrorText('')
        setValidForm({
            ...validForm,
            password: true,
        })
      
    }

    const passVisible = () => {
        setVisible(!visible)
        setErrorText('')
    }

    const passConfirm = pass => {
        setComfirm({
            ...comfirm,
            confirm_password: pass,
        });
        setErrorText('')
        setValidForm({
            ...validForm,
            confirm_password: true,
        })
    }

    const register = () => {
        let reg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
          if(newUser.full_name.length < 3){
            setErrorText('Поле имя должно содержать не менее 3х символов')
            setValidForm({
                ...validForm,
                full_name: false,
            })
        }else if(newUser.login.length < 3){
            setErrorText('Поле Логин должно содержать не менее 3х символов')
            setValidForm({
                ...validForm,
                login: false,
            })
        }else if(!reg.test(newUser.password)){
            setErrorText('Пароль должен состоять из 8 символов, минимум 1 буква верхнего регистра, минимум 1 буква нижнего регистра, минимум 1 спец символ, минимум 1 цифра')
            setValidForm({
                ...validForm,
                password: false,
            })
        } else if(newUser.password !== comfirm.confirm_password) {
            setErrorText('Пароли не соответствуют')
            setValidForm({
                ...validForm,
                confirm_password: false,
            })
        }else {
            navigation.navigate('SingIn')
            const userProfile = {...newUser}
            regUserTC(userProfile)
        }


    }
    const func = async () => {
        const user = {   password: 'qwerty123',
        full_name: 'Gomer Simpson',
        login:'Simpy'}


        await Cube.SignUp(user)
        await Cube.SignIn({login:'Simpy'})
    }

 
 
    


    return (
        <ScrollView>
            <Text style={{marginBottom:20,alignSelf:'center',fontSize:20}}>Добро Пожаловать</Text>
{/* name */}
             <Input
                    style={validForm.full_name ? null : {backgroundColor:'#F08080'}}
                    autoCompleteType = 'username'
                    onFocus={fullNameChange}
                    label="Полное имя"
                    placeholder="Введите имя"
                    onChangeText={name => fullNameChange(name)}
                    defaultValue={''}
                />

{/*Login*/}
                <Input
                    style={validForm.login? null : {backgroundColor:'#F08080'}}
                    autoCompleteType = 'username'
                    label="Логин"
                    placeholder="Введите логин"
                    onChangeText={log => loginChange(log)}
                    defaultValue={''}
                />

{/* Password */}
            <View >
                <Input 
                    placeholder="Введите пароль"
                    label="Пароль"
                    secureTextEntry={visible ? false : true}
                    onFocus={passChange}
                    style={validForm.password ? null : {backgroundColor:'#F08080'}}
                    autoCapitalize="none"
                    onChangeText={(pass) => passChange(pass)}
                    defaultValue={''}
                />
            </View>

{/*Comfirm Password */}

            <View>
                <Input 
                    placeholder="Введите пароль"
                    label="Подтвердите пароль"
                    secureTextEntry={visible ? false : true}
                    onFocus={passConfirm}
                    style={validForm.confirm_password ? null : {backgroundColor:'#F08080'}}
                    onChangeText={(pass) => passConfirm(pass)}
    
                />
            </View>


            <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
                <CheckBox
                    value={visible}
                    onValueChange={setVisible}
                    />
                <Text style={{alignSelf:'center',justifyContent:'center'}}> Показать пароль</Text>
            </View>

{/* next page */}


            <View style={{marginBottom:20,marginTop:30}}>
                <Button
                    title="Регистрация"
                    onPress={() => register()}
                    type="outline"
                    
                />
            </View>

            <Button
                title="Уже Зарегестрированы?"
                onPress={() => navigation.navigate('SingIn')}
                type="outline"
        

            />

            { 
            errorText ? <View style={styles.errorContainer}>
                    <TouchableOpacity  onPress={() => setErrorText('')}>
                    </TouchableOpacity>
                    <View style={styles.errorContainerText}>
                        <Text style={styles.errorText}>{errorText}</Text>
                    </View>
                </View> : null
            }
        </ScrollView>

        
    )
  }


  
export default SignUp;