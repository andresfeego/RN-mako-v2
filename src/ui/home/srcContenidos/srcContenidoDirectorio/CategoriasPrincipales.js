import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableHighlight,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class CategoriasPrincipales extends Component<{}>  {



  render() {


    return (

      
      <ScrollView horizontal style={styles.container}> 
        
      <TouchableHighlight underlayColor='#fff' style={[styles.touch,{marginLeft: 20}]} onPress={()=> this.props.appFun.llenaCat(7,0,0)} > 
        <View style={styles.contenedorTouchable}>  
          <View style={[styles.circulo, {backgroundColor: '#34C1BB'}]}>
            <Icon name="toc" size={30} color={'#fff'} style={styles.footerIcon}/>
          </View>
          <Text style={[styles.catego]}> Todas las categorías</Text>
        </View>
      </TouchableHighlight>

     <TouchableHighlight  underlayColor='#fff' style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(299, 'Asesor MAKO')} > 
        <View style={styles.contenedorTouchable}>  
         <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/mako.png')}/>
          </View>
          <Text style={[styles.catego]}> Asesor MAKO</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(19, 'Domicilios     p-a-p')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/pap.png')}/>
          </View>
          <Text style={[styles.catego]}>Domicilios     p-a-p</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(1, 'Taxis')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/taxis.png')}/>
          </View>
          <Text style={[styles.catego]}>Taxis</Text>
        </View>
      </TouchableHighlight> 

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(301, 'Alquiler de lavadoras')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/lavadoras.png')}/>
          </View>
          <Text style={[styles.catego]}>Alquiler de lavadoras</Text>
        </View>
      </TouchableHighlight> 

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(127, ' Cerrajeros')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/cerrajeros.png')}/>
          </View>
          <Text style={[styles.catego]}> Cerrajeros</Text>
        </View>
      </TouchableHighlight>   

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(3, ' Acarreos')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/acarreos.png')}/>
          </View>
          <Text style={[styles.catego]}> Acarreos</Text>
        </View>
      </TouchableHighlight>


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(30, ' Asaderos')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/asaderos.png')}/>
          </View>
          <Text style={[styles.catego]}> Asaderos</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(102, ' Bares')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/bares.png')}/>
          </View>
          <Text style={[styles.catego]}> Bares</Text>
        </View>
      </TouchableHighlight>


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(31, ' Cafeterías')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/cafeterias.png')}/>
          </View>
          <Text style={[styles.catego]}> Cafeterías</Text>
        </View>
      </TouchableHighlight>


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(28, ' Comida china')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/china.png')}/>
          </View>
          <Text style={[styles.catego]}> Comida china</Text>
        </View>
      </TouchableHighlight>   


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(26, ' Comidas rápidas')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/rapida.png')}/>
          </View>
          <Text style={[styles.catego]}> Comidas rápidas</Text>
        </View>
      </TouchableHighlight> 
      

      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(53, ' Detalles y regalos')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/detalles.png')}/>
          </View>
          <Text style={[styles.catego]}> Detalles y regalos</Text>
        </View>
      </TouchableHighlight>


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(24, ' Restaurante ejectivo')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/ejecutivo.png')}/>
          </View>
          <Text style={[styles.catego]}> Restaurante ejectivo</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(167, ' Funerarias')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/funerarias.png')}/>
          </View>
          <Text style={[styles.catego]}> Funerarias</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(36, ' Heladerías')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/heladerias.png')}/>
          </View>
          <Text style={[styles.catego]}> Heladerías</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(43, ' Licoreras')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/licoreras.png')}/>
          </View>
          <Text style={[styles.catego]}> Licoreras</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(151, ' Mariachis')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/mariachis.png')}/>
          </View>
          <Text style={[styles.catego]}> Mariachis</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(22, ' Parqueaderos')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/parqueaderos.png')}/>
          </View>
          <Text style={[styles.catego]}> Parqueaderos</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(41, 'Pastelerías')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/pastelerias.png')}/>
          </View>
          <Text style={[styles.catego]}>Pastelerías</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(109, 'Piscinas')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/piscinas.png')}/>
          </View>
          <Text style={[styles.catego]}>Piscinas</Text>
        </View>
      </TouchableHighlight> 




      <TouchableHighlight  underlayColor='#fff'  style={styles.touch} onPress={()=> this.props.appFun.cambiaCategoria(256, 'Droguerías')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/drogas.png')}/>
          </View>
          <Text style={[styles.catego]}>Droguerías</Text>
        </View>
      </TouchableHighlight> 


      <TouchableHighlight  underlayColor='#fff'  style={[styles.touch,{marginRight: 90}]} onPress={()=> this.props.appFun.cambiaCategoria(205, 'Veterinarias')} > 
        <View style={styles.contenedorTouchable}>  
          <View style={styles.circulo}>
                <Image style={[styles.icono]} source={require('./iconos/veterinarias.png')}/>
          </View>
          <Text style={[styles.catego]}>Veterinarias</Text>
        </View>
      </TouchableHighlight>
        
    



      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    paddingTop: 10
  },

  contenedorTouchable:{
    alignItems: 'center' ,
    
  },
  
  touch:{
    alignItems: 'center',
    width: 70,
    margin: 5,
    marginHorizontal: 10,
    marginTop: 10,
    transform: [{ rotate: '-23deg'}],
},

circulo: {
  width: 55,
  height: 55,
  backgroundColor: '#34c1bb',
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center', 
},

catego:{
  color: '#96989A',
  fontSize: 12,
  textAlign: 'center',
},

icono:{
width: 30,
resizeMode: 'contain',

},
 
});

/*
   */