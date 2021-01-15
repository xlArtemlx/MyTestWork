import React,{useState,useEffect} from 'react';
import {View, Text,ActivityIndicator,TouchableOpacity,Keyboard} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Input,Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


 const SignIn = ({signInUresrTc,loading,setLoading}) => {
    const navigation = useNavigation()


    const [loginUser,setLoginUser] = useState({
        login:'',
        password:'',
    })
    const [visible,setVisible] = useState(false)
    const [errorText,setErrorText] =useState('')
  
    useEffect(()=>{
        avtoLogin()
    },[])


    const avtoLogin = async () => {
        try {
            const value = await AsyncStorage.getItem('@avtoLogin')
            const oldUser = JSON.parse(value)
            if(oldUser.login){
                await signInUresrTc(oldUser)
                .then(() => {
                    setLoginUser({
                        login:'',
                        password:'',
                    })
                  navigation.navigate('Profile')
                  setErrorText('')
                })
                .catch((e)=>{ 
                  if(e.info){
                      setErrorText('Неверный логин или пароль')
                      setLoading(false)
                  } else {
                      setErrorText('Ошибка соеденения')
                      setLoading(false)
                  }
                })  
   
            } 
        } catch (e){
            console.log(e)
        }
        
    }

    const changeLogin = (log) => {
        setLoginUser({
            ...loginUser,
            login:log,
        })
    }

    const changePassword = (pass) => {
        setLoginUser({
            ...loginUser,
            password:pass,
        })
    }

   
    const setSignIn = async () => {
        Keyboard.dismiss()
        const userProfile = {...loginUser}
        await signInUresrTc(userProfile)
              .then(() => {
                setLoginUser({
                    login:'',
                    password:'',
                })
                navigation.navigate('Profile')
                setErrorText('')
              })
              .catch((e)=>{ 
                if(e.info){
                    setErrorText('Неверный логин или пароль')
                    setLoading(false)
                } else {
                    setErrorText('Ошибка соеденения')
                    setLoading(false)
                }
              })        
    }


    return (
        <View>
             <Input
                    label="Логин"
                    placeholder="Введите логин"
                    onChangeText={log => changeLogin(log)}
                    defaultValue={loginUser.login}
                />

{/*Login*/}
                <Input
                    label="Пароль"
                    placeholder="Введите пароль"
                    onChangeText={pass => changePassword(pass)}
                    defaultValue={loginUser.password}
                    secureTextEntry={visible ? false : true}
                />

                    <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
                        <CheckBox
                            disabled={false}
                            value={visible}
                            onValueChange={(newValue) => setVisible(newValue)}
                        />
                        <Text style={{alignSelf:'center',justifyContent:'center'}}> Показать пароль</Text>
                    </View>


            { loading ?  <ActivityIndicator size="large" color="#0000ff" /> :
            <>
               <Button
               title="Sign In"
               onPress={() => setSignIn()}
                />
                <Button
                title="Регистрация"
                onPress={() => navigation.navigate('SignUp')}
                type="outline"
                />
            </>
            }

            

            { 
            errorText ? <View style={styles.errorContainer}>
                    <TouchableOpacity  onPress={() => setErrorText('')}>
                    
                    <View style={styles.errorContainerText}>
                        <Text style={styles.errorText}>{errorText}</Text>
                    </View>
                    </TouchableOpacity>
                </View> : null
            }

         

        </View>
    )
  }


  export default SignIn;