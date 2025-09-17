import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../components/Api';

import Cliente from '../components/Cliente'; 

export default function CadCliente() {
    
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [saldo, setSaldo] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image
      source={require('../assets/img/CadClient.png')}
      style={styles.img}
      />


      <Text style={styles.titulo}>Cadastrar Novo Cliente</Text>

      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={setCPF}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite o Saldo"
        value={saldo}
        onChangeText={setSaldo}
        style={styles.input}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          try {
            const resp = await api.post('clientes', {
              nome: nome,
              cpf: cpf,
              saldo: saldo,
            });

            alert(resp.data.message);
            navigation.navigate('ListarClientes' as never);
          } catch {
            alert('Erro ao cadastrar cliente');
          }
        }}
      >
        <Text style={styles.txtBtn}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#5e5e5eff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor: 'white'
  },
  btn: {
    backgroundColor: '#7100cc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img:{
    width: 100,
    height:100,
    marginBottom: 30,
    alignItems: 'center'
    
    
  },
});