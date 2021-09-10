import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import BarraBusqueda from './BarraBusqueda.js';
import MenuBajo from './MenuBajo.js';
import ContenidoDirectorio from './srcContenidos/ContenidoDirectorio.js';



const {width, height} = Dimensions.get('window')


export default class Principal extends Component<{}>  {

constructor(props) {
  super(props);

  this.state = {
    // state datos de usuario ------------------------
    user: this.props.user,
    pass: this.props.pass,
    message: this.props.message,

    // state datos para animacion ------------------------
    rotateY: new Animated.Value(0),
    translateX: new Animated.Value(width),
    menuAnimation: new Animated.Value(0),
    isOpenMenu: false,

    // state datos para busuqedas y contenido  ------------------------

    ciudad: 0,
    lblCiudad: '',
    busRazon: '',
    busServicios: '',
    busCategoria: '',
    lblBusCategoria: '',
    contenido: 0,

  };
}

componentDidMount(){

}



 showMenu(){
    if(this.state.isOpenMenu){
        this.setState({isOpenMenu: false})
        Animated.parallel([
            Animated.timing(
                this.state.translateX, {
                    toValue: width
                }
            ),
            Animated.timing(
                this.state.rotateY, {
                    toValue: 0
                }
            )
        ]).start()
    } else {
        this.setState({isOpenMenu: true})
        Animated.parallel([
            Animated.timing(
                this.state.translateX, {
                    toValue: width * 0.60
                }
            ),
            Animated.timing(
                this.state.rotateY, {
                    toValue: 1
                }
            ),
            Animated.timing(
                this.state.menuAnimation, {
                    toValue: 1,
                    duration: 800
                }
            )
        ]).start()
    }
}

closeMenu(){
    this.setState({isOpenMenu: false})
    Animated.parallel([
        Animated.timing(
            this.state.translateX, {
                toValue: width
            }
        ),
        Animated.timing(
            this.state.rotateY, {
                toValue: 0
            }
        ),
        Animated.timing(
            this.state.menuAnimation, {
                toValue: 0,
                duration: 300
            }
        )
    ]).start()
}


  render() {

     let conte = {
      ciudad: this.state.ciudad,
      contenido: this.state.contenido,
      busRazon: this.state.busRazon,
      busServicios: this.state.busServicios,
      busCategoria: this.state.busCategoria,

    }

    return (

      
      <View style={styles.container}> 
        
        <Animated.View style={[styles.contenedorPrincipal, {width: width, backgroundColor: 'gray', flex: 1, transform: [{perspective: 450},{translateX: this.state.translateX.interpolate({inputRange: [0, width],outputRange: [width, 0]})}, {rotateY: this.state.rotateY.interpolate({inputRange: [0, 1],outputRange: ['0deg', '-10deg']})}]}]}> 
          <View style={styles.barraBusqueda}>
            {this.state.isOpenMenu ? 
              <BarraBusqueda icon="close" showMenu={this.closeMenu.bind(this)}/> 
              : 
              <BarraBusqueda icon="menu" showMenu={this.showMenu.bind(this)}/>
            }
          </View>

          <View style={styles.contenido}> 
            <ContenidoDirectorio conte={conte}/>
          </View>

          <View style={styles.menuBajo}> 
          <MenuBajo/>
          </View>

        </Animated.View>


        <Animated.View style={[styles.menu, {opacity: this.state.menuAnimation}]}>
          
          <View style={styles.itemMenu} >
            <Icon name="favorite" size={30}  style={styles.iconoMenu} />
            <Text style={styles.textMenu}>Favoritos</Text>
          </View>  

          <View style={styles.itemMenu} >
            <Icon name="history" size={30}  style={styles.iconoMenu} />
            <Text style={styles.textMenu}>Historial</Text>
          </View>           
          
          <View style={styles.itemMenu} >
            <Icon name="local-atm" size={30}  style={styles.iconoMenu} />
            <Text style={styles.textMenu}>Bonos</Text>
          </View>           
          
          <View style={styles.itemMenu} >
            <Icon2 name="trophy" size={30}  style={styles.iconoMenu} />
            <Text style={styles.textMenu}>Sorteos</Text>
          </View>           
          
          <View style={styles.itemMenu} >
            <Icon name="library-books" size={30}  style={styles.iconoMenu} />
            <Text style={styles.textMenu}>Reseñas</Text>
          </View>           
          


        </Animated.View>
        

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFCC29',
  },

    contenedorPrincipal: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
     zIndex: 1,
  },

    barraBusqueda: {
    width: '100%',
    height: '7%',
  },

    contenido: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

    menuBajo: {
    width: '100%',
    height: '7%',
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    bottom: 0,
    elevation: 4,

  },

  menu:{
    position: 'absolute',
    width: 140,
    left: 0,
    top: 100,
    backgroundColor: 'transparent'
  },

  itemMenu:{
    flexDirection: 'row',
    marginVertical: 10
  },

  iconoMenu:{ 
    color: '#4B4B4D',
    marginLeft: 10,
  },

  textTitle: {
    fontSize: 13
  },
  
  textBy: {
    fontSize: 12
  },
  
  textMenu: {
    fontSize: 20,
    color: '#4B4B4D',
    marginLeft: 10,
  }

  
});



