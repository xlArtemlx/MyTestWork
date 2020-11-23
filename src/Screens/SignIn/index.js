import React,{useState} from 'react';
import {View, Text,ActivityIndicator,TouchableOpacity,Keyboard} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Input,Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';


 const SignIn = ({signInUresrTc,loading,setLoading}) => {
    const navigation = useNavigation()
    const [loginUser,setLoginUser] = useState({
        login:'',
        password:'',
    })
  


    const [visible,setVisible] = useState(false)
    const [errorText,setErrorText] =useState('')


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
       
        const userProfile = {...loginUser}
        await signInUresrTc(userProfile)
              .then(() => {
                setLoginUser({
                    ...loginUser,
                    password:'',
                })
                navigation.navigate('Profile')
                setErrorText('')
                Keyboard.dismiss()
              })
              .catch((e)=>{
                setErrorText('Неверный логин или пароль')
                setLoading(false)
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
               <Button
               title="Sign In"
               onPress={() => setSignIn()}
           />

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