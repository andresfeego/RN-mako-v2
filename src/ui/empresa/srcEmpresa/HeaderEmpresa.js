import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity,Dimensions} from 'react-native';
const {width}= Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';


export default class HeaderEmpresa extends Component<{}>  {


    MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

  render() {
      const empresa = this.props.empresa;
      const urllogo = 'https://www.mako.guru/directorio/'+empresa.url_logo;
      const urlfondo = 'https://www.mako.guru/directorio/imgCategoria/'+empresa.idsubcategoria2;
      let fondo = require('../../../images/fondos/fondo_bussines.png');

    return (

      
      <View style={styles.container}> 

        <Image source={fondo} style={[styles.fondo1]}/>

        <Image source={{ uri : urlfondo}} style={styles.fondo}/>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.linearGradient}/>

        <View style={[styles.texto]}>
            <Text style={[styles.nombre]}> {empresa.nombre.toUpperCase()} </Text>
            <Text style={styles.descripcion}> {this.MaysPrimera(empresa.descripcion.toLowerCase())} </Text>
        </View>

        
        <View style={[styles.contenedorLogos,{borderColor: empresa.color}]}>
            <Image source={{ uri : urllogo}} style={styles.logo}/>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    transform: [{ rotate: '-23deg'}],
    top: '13%'

  },

  swiper:{
    flex: 1,
    left: 0,
    zIndex: 0,
  },


  logo:{
    resizeMode: 'center',
    width: '100%',
    height: '100%',
    borderRadius: ((width/3)-27),


  },

  contenedorLogos:{
    width: ((width/3.5)-27),
    height: ((width/3.5)-27),
    borderRadius: ((width/3)-27),
    right: '16%',
    bottom: '5%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    overflow: 'hidden',
  },


  texto:{
    flex: 1,
    right: '15%',
    position: 'absolute',
    bottom: '25%',
    width: '65%',
  },
  
  nombre:{
    fontSize: 25,
    width: '100%',
    textAlign: 'right' ,
    color: '#fff',
  },
  
  descripcion:{
    fontSize: 18,
    width: '100%',
    textAlign: 'right' ,
    color: 'lightgray',
  },

  fondo:{

    width: '85%',
    height: '85%',

  },

  fondo1:{
    alignSelf: "stretch", 
    resizeMode: 'repeat',
    width: '100%',
    height: '100%',
    position: 'absolute' ,
    aspectRatio: 0.6,
    left: 0,
  },

    linearGradient:{
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },
  
});
