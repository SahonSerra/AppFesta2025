import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

export default function Home() {

  const navigation = useNavigation();

  return (

    
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/img/globo02.jpg')}
        style={styles.imgFundo}
        imageStyle={styles.opacityImage}
        
      >
          
        
        <Text style={styles.titulo}>Gerenciador Festas</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnClie}
          onPress={() => navigation.navigate('ListarClientes' as never)}
          >
            <Text style={styles.cliente}>Clientes</Text>
          </TouchableOpacity>

         <TouchableOpacity style={styles.btnUsi}
          onPress={() => navigation.navigate('ListarUsuario' as never)}
          >
            <Text style={styles.usuario}>Usuarios</Text>
          </TouchableOpacity>   

          
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },

  imgFundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  opacityImage: {
    opacity: 0.3,
  },

  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 200,
   
    
  },

  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },

  cliente: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  usuario: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  btnClie: {
    backgroundColor: 'purple',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
  },

  btnUsi: {
    backgroundColor: 'blue',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
     
  },
    img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
