import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const {width}= Dimensions.get('window')


export default class Empresa extends Component<{}>  {



MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}


renderPromo(numPromo){
  const urlpromo = 'https://www.mako.guru/directorio/imagenes/promoIcon.png';

  if (numPromo > 0) {
    return(
      <View style={[styles.contPromo]}>

        <View style={[styles.promoIcon]}>
          <Image style={[styles.imgPromo]} source={{ uri : urlpromo}}/>
        </View>
        <Text style={styles.txtPromo}> {numPromo} </Text>

      </View>
    )
  } else{
    return null;
  };
};


handlePress(empresa){
  if (empresa.activo != 0) {
this.contarVisita(empresa.codigo);

Actions.detalleEmpresa({empresa});
}
}


contarVisita(codigo){
  return fetch('https://www.mako.guru/listadosApp/contarVisita.php',{
  method:'post',
  headers:{
    'Accept': 'aplication/json',
    'Content-Type': 'aplication/json',
  },
  body:JSON.stringify({
    id: codigo
  })

})
  .then((response) => response.json())
    .then((responseJson) =>{
     
    })

.catch((error) => {
      console.warn('error fetch: '+error);
    }); 
}



renderInfo(numInfo){
  const urlpromo = 'https://www.mako.guru/directorio/imagenes/infoIcon.png';

  if (numInfo > 0) {
    return(
      <View style={[styles.contPromo]}>

        <View style={[styles.infoIcon]}>
          <Image style={[styles.imgPromo]} source={{ uri : urlpromo}}/>
        </View>
                  
        <Text style={styles.txtPromo}> {numInfo} </Text>

      </View>
    )
  } else{
    return null;
  };
};

renderVisto(numVisto){
  const urlpromo = 'https://www.mako.guru/directorio/imagenes/vistoIcon.png';

  if (numVisto > 0) {
    return(
      <View style={[styles.contPromo]}>
        
        <View style={[styles.vistoIcon]}>
          <Image style={[styles.imgPromo]} source={{ uri : urlpromo}}/>
        </View>

        <Text style={styles.txtPromo}> {numVisto} </Text>

      </View>
    )
  } else{
    return null;
  };
};




render() {

    var item = this.props.item;

    let color=item.color;
    let opacit = {opacity: 1};  

    if (item.activo == 0) {
      color='lightgray';  
      opacit = {opacity: 0.2};  
    };

    let styles = circle;
    switch (this.props.bussinesStyle) {
      case 1: styles = circle;
      break;
      
      case 2: styles = box;
      break;
      
      case 3: styles = boxWide;
      break;
      
      default:
        break;
      }
      
      const backColor = {backgroundColor: color};
    const borderColor = {borderColor: color};
    const Color = {color: color};
    const borderBottomColor = {borderBottomColor: color};
    const urllogo = 'https://www.mako.guru/directorio/'+item.url_logo;

    let fondo = require('../../../../images/fondos/fondo_bussines.jpg');

    return(

      <TouchableOpacity style={[styles.empresa,opacit]}  onPress={() => this.handlePress(item)} >
        
        {this.props.bussinesStyle == 3 ?
        <Image source={fondo} style={[styles.fondo]} scale={0.2}/>
        :
          null
        }
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)']} style={styles.linearGradient}/>

        <View style={[styles.logo,borderColor]}>
          <Image style={[styles.image]} source={{ uri : urllogo}}/>
        </View>

        <View style={[styles.texto]}>
          <Text style={[styles.nombre]}> {item.nombre.toUpperCase()} </Text>
          <Text style={styles.descripcion}> {this.MaysPrimera(item.descripcion.toLowerCase())} </Text>
        </View>

        

        <View style={[styles.ver]}>
          <Text style={{color: 'gray'}}>{">"}</Text>
        </View>

      </TouchableOpacity>

    );
}


}


const circle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF6AE',
  },


 empresa:{
  width: '29%',
  backgroundColor: '#fff',
  margin: 10,
  marginVertical: 20,
  alignItems: 'center',
},



logo:{
  width: ((width/3)-27),
  height: ((width/3)-27),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: ((width/3)-27),
  overflow: 'hidden',
  borderWidth: 1.5,
  elevation: 5
},

contPromos:{
  flexDirection: 'row',
},

contPromo:{

  backgroundColor: '#fff',
  flex: 1,
  zIndex: 10000,
  justifyContent: 'center' ,
  alignItems: 'center' ,
  marginVertical: 3,
  borderColor: 'lightgray',
  flexDirection: 'row',

},


txtPromo:{
fontSize: 10,
textAlign: 'left',
},

promoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#f54848',
marginLeft: 1,
},

infoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#79DB48',
marginLeft: 1,
},

vistoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#00A0E3',
marginLeft: 1,
},

imgPromo:{
width: 20,
height: 20,
},

image:{
    width: '100%',
    height: '100%',
    borderWidth: 0,
    
},

texto:{
  flex: 1,
},

nombre:{
  fontWeight: 'bold',
  fontSize: 13,
  textAlign: 'center',
  color: '#4B4B4D'
},

descripcion:{
  color: 'gray',
  fontSize: 10,
  textAlign: 'center',
},



  ver:{
    width: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },

  tituloDirectorio:{      
   fontFamily: 'CaviarDreams',
  margin: 3,
  fontSize: 10,
  color: '#000',
  margin: 5,
  }
  
  
  
});

const box = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF6AE',
  },

  linearGradient:{
    position: 'absolute',
    height: '50%',
    width: '100%',
    bottom: 0,
    zIndex: 1
  },

 empresa:{
  width: '45%',
  backgroundColor: 'gray',
  margin: 10,
  marginVertical: 20,
  borderRadius: (10),
  paddingBottom: 20,
  overflow: "hidden",
  elevation: 4,
},



logo:{
  width: ((width/2)-22),
  height: ((width/2)-22),
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
},

contPromos:{
  flexDirection: 'row',
},

contPromo:{

  backgroundColor: '#fff',
  flex: 1,
  zIndex: 10000,
  justifyContent: 'center' ,
  alignItems: 'center' ,
  marginVertical: 3,
  borderColor: 'lightgray',
  flexDirection: 'row',

},


txtPromo:{
fontSize: 10,
textAlign: 'left',
},

promoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#f54848',
marginLeft: 1,
},

infoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#79DB48',
marginLeft: 1,
},

vistoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#00A0E3',
marginLeft: 1,
},

imgPromo:{
width: 20,
height: 20,
},

image:{
    width: '100%',
    height: '100%',
    borderWidth: 0,
    
},

texto:{
  flex: 1,
  zIndex: 2,
  position: "absolute",
  bottom: 20,
  width: '100%',
},

nombre:{
  fontWeight: 'bold',
  fontSize: 13,
  textAlign: 'center',
  color: '#fff'
},

descripcion:{
  color: 'lightgray',
  fontSize: 10,
  textAlign: 'center',
},



  ver:{
    width: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },

  tituloDirectorio:{      
   fontFamily: 'CaviarDreams',
  margin: 3,
  fontSize: 10,
  color: '#000',
  margin: 5,
  }
  
  
});

const boxWide = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FBF6AE',
  },

  
  linearGradient:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    transform: [{ rotate: '180deg'}],
    top: 0,
    zIndex: 1
  },


 empresa:{
  width: '92%',
  height: ((width/4)),
  backgroundColor: '#fff',
  marginHorizontal: 17,
  marginVertical: 10,
  borderRadius: 15,
  elevation: 1,
  overflow: "hidden",
},



logo:{
  width: ((width/4)-27),
  height: ((width/4)-27),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: ((width/3)-27),
  alignContent: "center",
  overflow: 'hidden',
  borderWidth: 1.5,
  top: "12%",
  left: '3%',
  zIndex: 3,
  elevation: 2,
},

contPromos:{
  flexDirection: 'row',
},

contPromo:{

  backgroundColor: '#fff',
  flex: 1,
  zIndex: 10000,
  justifyContent: 'center' ,
  alignItems: 'center' ,
  marginVertical: 3,
  borderColor: 'lightgray',
  flexDirection: 'row',

},


txtPromo:{
fontSize: 10,
textAlign: 'left',
},

promoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#f54848',
marginLeft: 1,
},

infoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#79DB48',
marginLeft: 1,
},

vistoIcon:{
width: 18,
height: 18,
borderRadius: 18,
backgroundColor: '#00A0E3',
marginLeft: 1,
},

imgPromo:{
width: 20,
height: 20,
},

image:{
    width: '100%',
    height: '100%',
    borderWidth: 0,
    
},

texto:{
  width: "78%",
  zIndex: 2,
  position: "absolute",
  top: 15,
  right: 0,
},

nombre:{
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  color: '#fff'
},

descripcion:{
  color: '#fff',
  fontSize: 15,
  textAlign: 'center',
},



  ver:{
    width: 0,
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },

  tituloDirectorio:{      
   fontFamily: 'CaviarDreams',
  margin: 3,
  fontSize: 10,
  color: '#000',
  margin: 5,
  },

  fondo:{
    alignSelf: "stretch", 
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    top: 0,
    position: "absolute",
    opacity: 0.5,
  },
     
  
  
});
