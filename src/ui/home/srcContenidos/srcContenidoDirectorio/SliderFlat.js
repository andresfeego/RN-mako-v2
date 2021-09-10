import React, {Component} from 'react'

import {Text, View,	Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'


import LinearGradient from 'react-native-linear-gradient';




const {width}= Dimensions.get('window')



export default class extends Component{




abrirEmpresa(cod){
//Actions.DetalleVenta({empresa:{codigo:cod}});
}



callBrowser = (url) =>{
    const Hurl = ('https://'+url); 

   Linking.canOpenURL(Hurl).then(supported => {
   if (!supported) {
    console.log('Can\'t handle url: ' + url);
   } else {
    return Linking.openURL(Hurl);
   }
 }).catch(err => console.error('An error occurred', err));
}




	render(){
    const url='https://www.mako.guru/scrAppServidor/images/slides/'+this.props.uri; 
    let logo = require('../../../../images/logos/logo512.png');
    let Logomako = require('../../../../images/logos/logo512.png');
    const urllogo = 'https://www.mako.guru/directorio/logos/'+this.props.codigo+'.png';

		return(
		<View style={[styles.child, { backgroundColor: '#FBF6AE' }]}>
            <Image source={{ uri : url}} style={styles.fondoImagen}/>
            <LinearGradient colors={['rgba(0,0,0,0)', this.props.colorGradiente]} style={styles.linearGradient}/>
            <Text style={[styles.texto,{color: this.props.colorTexto}]}>{this.props.titulo}</Text>
            {this.props.tipoLink == 1?
            <Image source={Logomako} style={styles.logo}/>
            :
            <View style={styles.contenedorLogos}>
              <Image source={{ uri : urllogo}} style={styles.logo2}/>
            </View>
            }
          </View>
		)
	}
}

const styles = StyleSheet.create({

 fondoImagen: {
    width: '100%',
    height: '100%'
  },

child: {
    height: '100%',
    width,
    justifyContent: 'center',
  },

  linearGradient:{
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },

  texto: {
    fontSize: 20,
    width: '80%',
    bottom: '25%',
    right: '5%',
    position: 'absolute',
    textAlign: 'left' ,
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
    borderColor: '#34c1bb',
    borderWidth: 5,
    overflow: 'hidden',
  },

  logo:{
    resizeMode: 'center',
    width: ((width/3)-27),
    height: ((width/3)-27),
    borderRadius: ((width/3)-27),
    right: '15%',
    bottom: '3%',
    position: 'absolute',



  },

  logo2:{
    resizeMode: 'center',
    width: '100%',
    height: '100%',
    borderRadius: ((width/3)-27),


  },

})