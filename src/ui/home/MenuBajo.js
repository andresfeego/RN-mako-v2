import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity,Animated,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')


export default class BarraBusqueda extends Component<{}>  {

constructor(props) {
  super(props);

  this.state = {
   
    indicadorX: new Animated.Value((((width/5)*3)-((width/5)/2))-27.5),
    indicadorY: new Animated.Value(2),
    tamanoIndicador: new Animated.Value(45),
    tamanoIcon1: new Animated.Value(1),
    tamanoIcon2: new Animated.Value(1),
    tamanoIcon3: new Animated.Value(1.5),
    tamanoIcon4: new Animated.Value(1),
    tamanoIcon5: new Animated.Value(1),
    margenIcon1: new Animated.Value(0),
    margenIcon2: new Animated.Value(0),
    margenIcon3: new Animated.Value(8),
    margenIcon4: new Animated.Value(0),
    margenIcon5: new Animated.Value(0),
    iconoAnterior: 3,

  };
}



moverIndicador(botonMenu){

  if (botonMenu != this.state.iconoAnterior){
        let valor = (((width/5)*botonMenu)-((width/5)/2))-27.5;
    const indiX = this.state.indicadorX;
    const indiY = this.state.indicadorY;

    let tamanoIconoSelecionAnterior = this.state.tamanoIcon1;
    let margenIconoSelecionAnterior = this.state.margenIcon1;

    switch(this.state.iconoAnterior){

      case 1:  tamanoIconoSelecionAnterior = this.state.tamanoIcon1;
                margenIconoSelecionAnterior = this.state.margenIcon1;
      break;

      case 2:  tamanoIconoSelecionAnterior = this.state.tamanoIcon2;
                margenIconoSelecionAnterior = this.state.margenIcon2;
      break;
      
      case 3:  tamanoIconoSelecionAnterior = this.state.tamanoIcon3;
                margenIconoSelecionAnterior = this.state.margenIcon3;
      break;
      
      case 4:  tamanoIconoSelecionAnterior = this.state.tamanoIcon4;
                margenIconoSelecionAnterior = this.state.margenIcon4;
      break;
    
      case 5:  tamanoIconoSelecionAnterior = this.state.tamanoIcon5;
                margenIconoSelecionAnterior = this.state.margenIcon5;
      break;


    }

    let tamanoIconoSelecion = this.state.tamanoIcon1;
    let margenIconoSelecion = this.state.margenIcon1;

    switch(botonMenu){

      case 1:  tamanoIconoSelecion = this.state.tamanoIcon1;
                margenIconoSelecion = this.state.margenIcon1;
      break;

      case 2:  tamanoIconoSelecion = this.state.tamanoIcon2;
                margenIconoSelecion = this.state.margenIcon2;
      break;
      
      case 3:  tamanoIconoSelecion = this.state.tamanoIcon3;
                margenIconoSelecion = this.state.margenIcon3;
      break;
      
      case 4:  tamanoIconoSelecion = this.state.tamanoIcon4;
                margenIconoSelecion = this.state.margenIcon4;
      break;
    
      case 5:  tamanoIconoSelecion = this.state.tamanoIcon5;
                margenIconoSelecion = this.state.margenIcon5;
      break;


    }

   Animated.sequence([
            Animated.parallel([
            Animated.timing(
                this.state.tamanoIndicador, {
                    toValue: 0,
                    duration: 100
                }
            ),
            Animated.timing(
                tamanoIconoSelecionAnterior, {
                    toValue: 1,
                    duration: 100
                }
            ),
            Animated.timing(
                margenIconoSelecionAnterior, {
                    toValue: 0,
                    duration: 100
                }
            ),
            Animated.timing(
                indiY, {
                    toValue: -4,
                    duration: 100

                }
            )

        ]),
            Animated.timing(
                indiX, {
                    toValue: valor
                }
            ),
             
            Animated.parallel([
              Animated.timing(
                  this.state.tamanoIndicador, {
                      toValue: 45
                  }
              ),

              Animated.timing(
                tamanoIconoSelecion, {
                    toValue: 1.5,
                    
                }
              ),
               Animated.timing(
                margenIconoSelecion, {
                    toValue: 8,
                    
                }
              ),
               Animated.timing(
                indiY, {
                    toValue: 2
                }
            ),

        ])
        ]).start()

   this.setState({
      iconoAnterior: botonMenu
   })
  }

}

  render() {


    return (

      
      <View style={styles.container}> 
        
      <Animated.View style={[styles.indicadorMenuGrande,{left: this.state.indicadorX, bottom: this.state.indicadorY}]}>
        <Animated.View style={[styles.indicadorMenuPeque,{width: this.state.tamanoIndicador,height: this.state.tamanoIndicador}]}/>
      </Animated.View>

      <View style={styles.fondo}/>

      <TouchableOpacity style={styles.itemMenu} onPress={() =>this.moverIndicador(1)}>
        <Animated.View style={[{transform: [{scale: this.state.tamanoIcon1}],marginBottom: this.state.margenIcon1}]}>
          <Icon name="local-offer"  size={24}  style={[styles.iconoMenu,{transform: [{scale: 1}],marginBottom: 0}]} />
        </Animated.View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.itemMenu} onPress={() =>this.moverIndicador(2)}>
        <Animated.View style={[{transform: [{scale: this.state.tamanoIcon2}],marginBottom: this.state.margenIcon2}]}>
          <Icon name="pool" size={24}  style={styles.iconoMenu} />
        </Animated.View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.itemMenu} onPress={() =>this.moverIndicador(3)}>
        <Animated.View style={[{transform: [{scale: this.state.tamanoIcon3}],marginBottom: this.state.margenIcon3}]}>
          <Icon name="home" size={24}  style={styles.iconoMenu} />
        </Animated.View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.itemMenu} onPress={() =>this.moverIndicador(4)}>
        <Animated.View style={[{transform: [{scale: this.state.tamanoIcon4}],marginBottom: this.state.margenIcon4}]}>
          <Icon name="pets" size={24}  style={styles.iconoMenu} />
        </Animated.View>
      </TouchableOpacity>   

      <TouchableOpacity style={styles.itemMenu} onPress={() =>this.moverIndicador(5)}>
        <Animated.View style={[{transform: [{scale: this.state.tamanoIcon5}],marginBottom: this.state.margenIcon5}]}>
          <Icon name="help" size={24}  style={styles.iconoMenu} />
        </Animated.View>
      </TouchableOpacity>   


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    height: '100%',
    position: 'relative',
    bottom: 0,
  },


  fondo:{
    backgroundColor: '#FFCC29',
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0
  },


indicadorMenuPeque:{
    borderWidth: 1,
    borderRadius: 42,
    borderColor: '#4B4B4D',

  },

  indicadorMenuGrande:{
    backgroundColor: '#FFCC29',
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    bottom: 2,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemMenu:{
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 2
  },


  iconoMenu:{ 
    color: '#4B4B4D'
},


  
});


  /*indicadorMenu:{
    backgroundColor: 'red',
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderColor: '#FBEE1E',
    borderWidth: 5,
    left: '42%',
    position: 'absolute',
    bottom: -6,
    zIndex: 1
  },*/