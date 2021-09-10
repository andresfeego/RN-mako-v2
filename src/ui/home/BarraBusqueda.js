import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class BarraBusqueda extends Component<{}>  {


constructor(props) {
  super(props);

  this.state = {
    busqueda : '',
    texto: '',
  };
}

buscar(){
  let palabra = this.state.texto;
  this.setState({
    busqueda: palabra
  })

}


borrarBusqueda(){
  this.setState({
    busqueda: '',
    texto: ''
  })

}

  render() {


    return (

      
      <View style={styles.container}> 
        
        <TouchableOpacity style={styles.menu} onPress={this.props.showMenu}> 
          <Icon name={this.props.icon} size={30}  style={styles.iconoMenu} />
        </TouchableOpacity>

        <View style={styles.busqueda}> 
          
          <TextInput returnKeyLabel={ "Buscar" } onSubmitEditing={() => this.buscar()} ref={ref => inputServicios = ref} onChangeText={texto => this.setState({texto})} placeholder="Que buscas en Boyacá..." placeholderTextColor="#96989A" underlineColorAndroid="rgba(0,0,0,0)" returnKeyType="search" style={styles.inputBusqueda}>{this.state.busqueda}</TextInput>

        </View>

        <TouchableOpacity style={styles.botonBuscar} onPress={() =>this.buscar()}> 

          {this.state.busqueda == '' ?
              <Icon name="search" size={30}  style={styles.iconoMenu}/>
              : 
              null 
          }

          {this.state.busqueda != '' ?
              <Icon name="highlight-off" size={35} style={styles.labelIcon}  onPress={() =>this.borrarBusqueda()}/>
              : 
              null 
          }

        </TouchableOpacity>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF6AE',
  },

    menu: {
    width: '12%',
    backgroundColor: '#FFCC29',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconoMenu:{ 
  color: '#96989A',
},

    busqueda: {
    flex: 1,
    backgroundColor: '#FBF6AE',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  inputBusqueda: {
    fontSize: 15,
  },

    botonBuscar: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF6AE',
  },

  
});
