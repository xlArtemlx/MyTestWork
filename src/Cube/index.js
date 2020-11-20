import ConnectyCube from "react-native-connectycube";




const CREDENTIALS = {
    appId: 3722,
    authKey: "rORd-P85XUYCKMY",
    authSecret: "y3VgGCuDHK-kmR9",
  };

  
  
  


class Cube {
    constructor() {
        this._init()
    }


     _init() {
         ConnectyCube.init(CREDENTIALS);
    }


    async  SignUp(user){
        await ConnectyCube.createSession()
        await ConnectyCube.users.signup(user)
    }

    async  SignIn(user){
        await ConnectyCube.createSession(user)
        return await ConnectyCube.login(user)
    }

        // return AsyncStorage.setItem()

    

}

export default new Cube();