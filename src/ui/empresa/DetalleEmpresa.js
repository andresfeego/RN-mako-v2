import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity, AsyncStorage, Dimensions, ScrollView} from 'react-native';
import ShadowView from 'react-native-shadow-view';
import HeaderEmpresa from './srcEmpresa/HeaderEmpresa.js';

import Icon from 'react-native-vector-icons/MaterialIcons';



const {width, height} = Dimensions.get('window')


export default class DetalleEmpresa extends Component<{}>  {



  render() {

    let fondo = require('../../images/fondos/fondo_home.png');

    return (
        <ScrollView style={styles.container}> 
            <Image source={fondo} style={[styles.fondo]}/>

            <View style={[styles.header,{height: height*0.7, width: width*1.3,right: width*0.15,top: -325}]}> 
                <ShadowView  style={[styles.sombraHeader,{height: height*0.7, width: width*1.3,right: 10,bottom: 10}]}> 
                  <HeaderEmpresa empresa={this.props.empresa}/> 
                </ShadowView>
            </View>

            <View style={[styles.contenido]}> 
            <View style={[styles.accionLista,{height: height/3, width: width*1.3,left: width*0.02*-1}]}> 
              <ShadowView  style={[styles.sombraAccionLista,{height: height/3, width: width*1.3,left: width*0.02*-1,top: -5}]}> 
                <TouchableOpacity style={[styles.touch,{marginLeft: 20}]} onPress={()=> this.changeListStyle()} > 
                  <View style={styles.contenedorTouchable}>  
                    <View style={[styles.circulo, {backgroundColor: '#fff'}]}>
                      <Icon name={"share"} size={40} color={'#34C1BB'} style={styles.footerIcon}/>
                    </View>
                    <Text style={[styles.catego]}>Compartir</Text>
                  </View>
                </TouchableOpacity>
              </ShadowView>
            </View>

            <View style={[styles.lista]}> 
             
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
    width: '100%',
},

header:{
    borderBottomRightRadius: 70,
    transform: [{ rotate: '23deg'}],
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

  fondo:{
    alignSelf: "stretch", 
    resizeMode: 'repeat',
    width: '100%',
    height: '100%',
    position: 'absolute' ,
    aspectRatio: 0.6,
  },

  accionLista:{
    transform: [{ rotate: '23deg'}],
    borderTopLeftRadius: 70,
    padding: 15,
    top: 70,
    position: 'absolute',
  },

  contenido:{
    top: -280,
    zIndex: 1,
    paddingTop: 125,
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
        shadowOpacity: 0.4,
        shadowRadius: 14
  },


  lista:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    minHeight: 500,
  },

  
touch:{
    alignItems: 'center',
    width: 75,
    margin: 5,
    position: "absolute",
    top: '5%',
    left: '1%',
  
  },

  contenedorTouchable:{
    alignItems: 'center' ,
    transform: [{ rotate: '-23deg'}],

  },
  
  circulo: {
    width: 60,
    height: 60,
    backgroundColor: '#34c1bb',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center', 
    borderColor: '#34C1BB',
    borderWidth: 1,
  },

  catego:{
    color: '#96989A',
    fontSize: 14,
    textAlign: 'center',
  },
  
});
