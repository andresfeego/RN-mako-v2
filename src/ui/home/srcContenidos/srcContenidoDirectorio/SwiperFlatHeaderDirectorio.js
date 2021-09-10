
import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import LinearGradient from 'react-native-linear-gradient';

import SliderFlat from './SliderFlat.js'

const {width, height} = Dimensions.get('window')


export default class SwiperFlatHeaderDirectorio extends PureComponent {

constructor(props) {
    super(props);
  
    this.state = {
      imageSlider : []
    };
}

componentWillMount(){
    this.getSlides();

}


getSlides(){
   

    return fetch('https://www.mako.guru/scrAppServidor/response/makoDirectorio/returnSlides.php',{
    method:'POST',
    headers:{
      'Accept': 'aplication/json',
      'Content-Type': 'aplication/json',
    },
    body:JSON.stringify({
      ciudad: '',
    
    })
  
  })
    .then((response) => response.json())
      .then((responseJson) =>{
         //console.warn('antes', responseJson);
         
          if (responseJson != 0) {
            data=[];
            data= responseJson;
            this.setState({
              imageSlider: data,
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


    return (
      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={4}
          autoplayLoop
        >
        
          {
          this.state.imageSlider.map((item,i) => <SliderFlat
            uri={item.img}
            key={i}
            titulo={item.titulo} 
            idCat={item.idCat}
            tipoLink={item.tipoLink}
            codigo={item.codigo_empresa}
            lblCat={item.lblCat}
            colorGradiente={item.colorGradiente}
            colorTexto={item.colorTexto}/>)
        }
        </SwiperFlatList>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: "18%",
    marginRight: '5%',
  },
  child: {
    height: '100%',
    width,
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
 logo: {
    width: '100%',
    height: '100%'
  },


  linearGradient:{
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
  },

  texto: {
    color: '#4B4B4D',
    fontSize: 13,
    bottom: '30%',
    left: '22%',
    position: 'absolute'
  },

});