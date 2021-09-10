import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity, AsyncStorage, Dimensions, ScrollView} from 'react-native';
import ShadowView from 'react-native-shadow-view';
import HeaderDirectorio from './srcContenidoDirectorio/HeaderDirectorio.js';
import CategoriasPrincipales from './srcContenidoDirectorio/CategoriasPrincipales.js';
import ListaEmpresas from './srcContenidoDirectorio/ListaEmpresas.js';

import Icon from 'react-native-vector-icons/MaterialIcons';



const {width, height} = Dimensions.get('window')


export default class ContenidoDirectorio extends Component<{}>  {


constructor(props) {
  super(props)

  this.state = {
    bussinesStyle: 1,

  };
};

componentDidMount(){
  AsyncStorage.getItem('listStyle').then((listStyle)=>{
    
    if (listStyle == null) {
      AsyncStorage.setItem('listStyle', '1');        
    } else {
      
      this.setState({
        bussinesStyle: (listStyle*1),
      })

    }
  }) .catch((error) => {
    AsyncStorage.setItem('listStyle', '1');
  }); 
}



changeListStyle(){

  let busStyAuxi = this.state.bussinesStyle;
  
  if (busStyAuxi == 3) {
    busStyAuxi = 1;
  }else{
    busStyAuxi++;
  }

  this.setState({
    bussinesStyle: busStyAuxi,
  })
  let auxiStyle = busStyAuxi+"";
  AsyncStorage.setItem('listStyle', auxiStyle).catch((error) => {
    
  }); 
}


  render() {


    let iconName = "bubble-chart";

    switch (this.state.bussinesStyle) {
      case 1:
          iconName = "bubble-chart"
        break;

      case 2:
          iconName = "dashboard"
        break;

      case 3:
          iconName = "dns"
        break;        
    
      default:
        break;
    }
    
    let fondo = require('../../../images/fondos/fondo_home.png');

    return (

      

        <ScrollView style={styles.container}> 

          <Image source={fondo} style={[styles.fondo]}/>


          <View style={[styles.header,{height: height*0.7, width: width*1.3,right: width*0.15,top: -185}]}> 
              <ShadowView  style={[styles.sombraHeader,{height: height*0.7, width: width*1.3,right: 10,bottom: 10}]}> 
                <HeaderDirectorio/>
              </ShadowView>
          </View>

          <View style={[styles.categoriasP,{height: height/7, width: width*1.2,left: width*0.08*-1,top: -148}]}> 
            <CategoriasPrincipales/>
          </View>

          <View style={[styles.contenido]}> 
            <View style={[styles.accionLista,{height: height/3, width: width*1.3,left: width*0.02*-1}]}> 
              <ShadowView  style={[styles.sombraAccionLista,{height: height/3, width: width*1.3,left: width*0.02*-1,top: -5}]}> 
                <TouchableOpacity style={[styles.touch,{marginLeft: 20}]} onPress={()=> this.changeListStyle()} > 
                  <View style={styles.contenedorTouchable}>  
                    <View style={[styles.circulo, {backgroundColor: '#fff'}]}>
                      <Icon name={iconName} size={50} color={'#34C1BB'} style={styles.footerIcon}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </ShadowView>
            </View>

            <View style={[styles.lista]}> 
              <ListaEmpresas conte={this.props.conte} bussinesStyle={this.state.bussinesStyle}/>
            </View>
          </View>
        </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  header:{
    borderBottomRightRadius: 70,
    transform: [{ rotate: '23deg'}],
  },

  categoriasP:{
    transform: [{ rotate: '23deg'}],
    zIndex: 5,
  },

  accionLista:{
    transform: [{ rotate: '23deg'}],
    borderTopLeftRadius: 70,
    padding: 15,
    top: 70,
    position: 'absolute',
  },

  contenido:{
    top: -180,
    zIndex: 1,
    paddingTop: 125,
  },

  sombraHeader:{
    overflow: 'hidden' ,
    backgroundColor: 'white',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
     width: 0, height: 0,
    },
    shadowOpacity: 0.5,
shadowRadius: 8
  },

    sombraAccionLista:{
        overflow: 'hidden' ,
        backgroundColor: 'white',
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8
  },


  lista:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  contenedorTouchable:{
    alignItems: 'center' ,
    transform: [{ rotate: '-23deg'}],

  },

touch:{
  alignItems: 'center',
  width: 75,
  margin: 5,
  position: "absolute",
  top: '5%',
  left: '1%',

},

circulo: {
  width: 70,
  height: 70,
  backgroundColor: '#34c1bb',
  borderRadius: 70,
  justifyContent: 'center',
  alignItems: 'center', 
  borderColor: '#34C1BB',
  borderWidth: 1,
},

catego:{
  color: '#96989A',
  fontSize: 10,
  textAlign: 'center',
},

icono:{
width: 30,
resizeMode: 'contain',

},

fondo:{
  alignSelf: "stretch", 
  resizeMode: 'repeat',
  width: '100%',
  height: '100%',
  position: 'absolute' ,
  aspectRatio: 0.6,
},
   
  
});
