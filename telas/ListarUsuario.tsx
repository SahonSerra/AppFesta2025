import { useState, useEffect } from 'react';
import {View, FlatList,  Text, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';

import api from '../components/Api';
import Usuario from '../components/Usuario';

export default function ListarUsuario() {
  const [dados, setDados] = useState<any[]>([]);

  async function buscaUsuario() {
    try {
      const resposta = await api.get('usuarios');
      setDados(resposta.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  useEffect(() => {
    buscaUsuario();
  }, []); // <-- importante colocar [] para não fazer loop infinito

  return (
    <>
      <ImageBackground
        source={require('../assets/img/UsuBack.jpg')}
        style={styles.imgFundo}
        imageStyle={styles.opacityImage}
      />

      <View style={styles.bloco}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Cadastrar Novo Usuário</Text>
        </TouchableOpacity>

        <View style={styles.bloco}>
          <Text style={styles.titulo}> Lista de Usuários </Text>

          <FlatList
            data={dados}
            keyExtractor={(item) => item.id.toString()} // precisa ser string
            renderItem={({ item }) => (
              <Usuario
                id={item.id}
                nome={item.nome}
                login={item.login}
                senha={item.senha}
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
