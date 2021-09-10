import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity, FlatList, RefreshControl} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Empresa from './Empresa.js';


export default class ListaEmpresas extends Component<{}>  {


constructor(props) {
    super(props);
     this.state = {
      ciudad: this.props.conte.ciudad,
      busRazon: this.props.conte.busRazon,
      busServicios: this.props.conte.busServicios,
      busCategoria: this.props.conte.busCategoria,
      refreshing: false,
      ds: '',
      actu: 0,
      
      };   
}




componentWillMount(){
  this.getEmpresas(this.props.conte.ciudad,this.props.conte.busRazon,this.props.conte.busServicios,this.props.conte.cat);
} 


componentWillReceiveProps(nextProps: Props) {
  
  this.setState({
    ciudad: nextProps.conte.ciudad,
    busRazon: nextProps.conte.busRazon,
    busServicios: nextProps.conte.busServicios,
    busCategoria: nextProps.conte.busCategoria,
  })
 
  this.getEmpresas(nextProps.conte.ciudad, nextProps.conte.busRazon, nextProps.conte.busServicios ,nextProps.conte.busCategoria);
}


_onRefesh(){
  
  this.setState({
    refreshing: true,
  });
  
  this.getEmpresas(this.state.ciudad, this.state.busRazon, this.state.busServicios , this.state.busCategoria).then(() =>{
    this.setState({
      refreshing:false,
    })
  })
}

getEmpresas(ciudad, razon, servicio, categoria){
   

    return fetch('https://www.mako.guru/scrAppServidor/response/makoDirectorio/returnEmpresas.php',{
    method:'POST',
    headers:{
      'Accept': 'aplication/json',
      'Content-Type': 'aplication/json',
    },
    body:JSON.stringify({
      ciudad: ciudad,
      busRazon: razon,
      busServicios: servicio,
      busCategoria: categoria,
    })
  
  })
    .then((response) => response.json())
      .then((responseJson) =>{
        // console.warn('antes', responseJson);
         
          if (responseJson != 0) {
            data=[];
            data= responseJson;
            this.setState({
              ds: data,
            })

          } else{
            criterios = "Sin resultados";
             data=[{"0":"0","orden":"0","1":"2018-03-02 00:34:00","fechaRegistro":"2018-03-02 00:34:00","2":"0","oculto":"0","3":"0","activo":"0","4":"CMWSRMJN","codigo":"CMWSRMJN","5":"Sin Resultados","nombre":"Sin Resultados","6":criterios,"descripcion":criterios,"7":"Carrera 1 # 1 - 01","direccion":"Carrera 1 # 1 - 01","8":"361","barrio":"361","9":"1","vc_horas":"1","10":"0","domicilio":"0","11":"0","costo_domicilio":"0","12":"sin web","pagina_web":"sin web","13":"logos\/cat\/nohay.png","url_logo":"logos\/cat\/nohay.png","14":"0","categoria":"0","15":"Nada","palabras_clave":"Nada","16":"0","ubicacion_maps":"0","17":"4","visto":"4","18":"0","listado":"0","19":"0","cantidad_de_votos":"0","20":"0","nuemro_de_votantes":"0","21":"1","tipo_comercio":"1","22":"5.5348375","lat":"5.5348375","23":"-73.3607735","lng":"-73.3607735","24":"rgb(52,193,187)","color":"rgb(52,193,187)"}];
            this.setState({
              ds: data,
            })
           
          };
            
            
  
      })

.catch((error) => {
        console.warn(error);
      }); 
}





render() {

  let numColumns = 3;

  switch (this.props.bussinesStyle) {
    case 1: numColumns = 3;
      break;

    case 2: numColumns = 2;
      break;

    case 3: numColumns = 1;
      break;
  
    default:
      break;
  }

  return (
    <View style={styles.lista}> 

      <FlatList
        numColumns={numColumns}
        style={styles.lista}
        data={this.state.ds}
        renderItem={({item}) => {

          return(
              <Empresa item={item} bussinesStyle={this.props.bussinesStyle} />
            );
          
        }}

        refreshControl={
          <RefreshControl refreshing = {this.state.refreshing} onRefresh={this._onRefesh.bind(this)}/>
        }
        keyExtractor={item => item.orden}
        key={numColumns}/>


    </View>

  );
}


}

const styles = StyleSheet.create({
  lista: {
    width: '100%',
  },


  
});
