import { useState, useEffect } from 'react';
import {View, FlatList,  Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../components/Api';
import Usuario from '../components/Usuario';

export default function ListarUsuario() {

  const [usuarios, setUsuario] = useState<any[]>([]);

  const navigation = useNavigation();
  

  async function buscaUsuario() {
    const response = await api.get('usuarios');
    setUsuario(response.data);     
    
  }

  async function excluirUsuario(id: number){
    try{
      await api.delete(`usuarios/${id}`);
      Alert.alert('Sucesso', 'Usuario excluído com sucesso!'); 
      setUsuario(usuarios.filter(u => u.id !==id));
    }
    catch (error){
      Alert.alert('Erro', 'Não foi possivel excluir o usuario');
    }
  }

  useEffect(() => {
    buscaUsuario();
  }, []); 

  return (
    <>
      <ImageBackground
        source={require('../assets/img/UsuBack.jpg')}
        style={styles.imgFundo}
        imageStyle={styles.opacityImage}
      />

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}
        onPress={()=>navigation.navigate('CadUsuario' as never)}
        >
          <Text style={styles.txtBtn}>Cadastrar Novo Usuário</Text>
        </TouchableOpacity>

        <View style={styles.bloco}>
          <Text style={styles.titulo}> Lista de Usuários </Text>

          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()} // precisa ser string
            renderItem={({ item }) => (
              <Usuario
                id={item.id}
                nome={item.nome}
                login={item.login}
                senha={item.senha}
               onDelete={excluirUsuario}
              />
            )}
            style={styles.lista}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    textDecorationLine: 'underline',
    
  },
  btn: {
    backgroundColor: '#3e9bdd',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  bloco: {
    width: '100%',
    backgroundColor: '#53b2c4', // cor de fundo
    alignItems: 'center',
    flex: 1,
  },
  lista: {
    width: '80%',
    height: '70%',
  },
  imgFundo: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  opacityImage: {
    opacity: 0.8,
  },
});
