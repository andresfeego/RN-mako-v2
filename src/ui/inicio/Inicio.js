import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, NetInfo, AsyncStorage, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Actions} from 'react-native-router-flux';



export default class inicio extends Component<{}>  {
constructor(props) {
  super(props);

  this.state = {
    ratio: 0.6,
  };
}


//-------- Did mount -------------

  componentDidMount(){
    //AsyncStorage.setItem('user', 'andres.feego@gmail.com')
    //AsyncStorage.setItem('pass', '123')
  var con = false;
  NetInfo.isConnected.fetch().then(isConnected => {
    con = isConnected;

  if (con) {

    AsyncStorage.getItem('user').then((user)=>{
      AsyncStorage.getItem('pass').then((pass)=>{
      
      this.nuevoEventoBitacora(user);

      if (user != null && pass != null) {
                this.login(user,pass);
      } else{
               this.goHome(null,null,null);
              
      };
      
      })  
    })

  } else{
     alert('sin conexion');
  };
  });
}

//-------- metodo para ir a home con delay de 2 seg-------------

  goHome(user,pass,message){

 let that = this;

 setTimeout(function() {
        Actions.principal({user:user, pass: pass, message: message});
        //Actions.detalleEmpresa();
        }, 20);
};

//-------- metodo con el cual se agrega el evento de entrada a la app en la bitacora-------------

  nuevoEventoBitacora(usuario){
    const pais = DeviceInfo.getDeviceCountry();
    const infoUno = DeviceInfo.getBrand()+" - "+ DeviceInfo.getDeviceId()+" - "+ DeviceInfo.getDeviceName();

      return fetch('https://www.mako.guru/scrAppServidor/response/makoDirectorio/nuevoEventoBitacora.php',{
      method:'post',
      headers:{
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body:JSON.stringify({
        tipoAccion: '3',
        infoUno: infoUno,
        usuario: usuario,
        plataforma: '1',
        navegador: '0',
        pais: pais, // TO-DO cambiar por devices info pais

      })
    
    })
      .then((response) => response.json())
        .then((responseJson) =>{
         
        })

  .catch((error) => {
          console.warn('error fetch: '+error);
      }); 
}

//-------- metodo con el cual se logea el usuario a la app -------------

  login(user, pass){


      return fetch('https://www.mako.guru/scrAppServidor/response/makoDirectorio/loginUsuarios.php',{
      method:'post',
      headers:{
        'Accept': 'aplication/json',
        'Content-Type': 'aplication/json',
      },
      body:JSON.stringify({
        user: user,
        pass: pass
      })
    
    })
      .then((response) => response.json())
        .then((responseJson) =>{
         if (responseJson == 3) {
            Keyboard.dismiss();
            this.goHome(user,pass,'');

         } else{
            let message = 'Sesión cerrada - has cambiado el usuario o contraseña ';
            this.goHome(null,null,message);
            
         };

        })

  .catch((error) => {
          console.warn('error fetch: '+error);
        }); 

    Keyboard.dismiss();

}

//-------- funcion render-------------

  render() {

    StatusBar.setBackgroundColor('#FBEE1E', true);
    StatusBar.setBarStyle("dark-content", true);

    let fondo = require('../../images/fondos/fondo_inicio.png');
    let logo = require('../../images/logos/logo512.png');

    return (
      
      <View style={styles.container}> 

        <Image source={fondo} style={[styles.fondo,{aspectRatio: this.state.ratio}]}/>
        <Image source={logo} style={styles.logo}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96989A',
  },

  fondo:{
    alignSelf: "stretch", 
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    position: 'absolute' ,
    resizeMode: 'cover',
  },

    logo:{
    resizeMode: 'stretch',
    width: '50%',
    height: '50%',
    resizeMode: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
