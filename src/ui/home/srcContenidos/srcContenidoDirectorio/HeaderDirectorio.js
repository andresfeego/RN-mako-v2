import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';


import SwiperFlatHeaderDirectorio from './SwiperFlatHeaderDirectorio.js';
import SwiperHeaderDirectorio from './SwiperHeaderDirectorio.js';






export default class HeaderDirectorio extends Component<{}>  {



  render() {
    let logo = require('../../../../images/logos/logo512.png');


    return (

      
      <View style={styles.container}> 
          <SwiperHeaderDirectorio />
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
    backgroundColor: '#FBF6AE',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '20%',
    height: '20%',
    position: 'absolute',
    bottom: '3%',
    right: '13%',

  },

  
});
