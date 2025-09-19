import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../components/Api';

import Usuario from '../components/Usuario';

export default function CadUsuario(){

        
      
        const [nome, setNome] = useState('');
        const [login, setLogin] = useState('');
        const [senha, setSenha] = useState('');

        const navigation = useNavigation();

            return(
                <View style={styles.container}>

                    <Image
                    source={require('../assets/img/CadUsua.png')}
                    style={styles.img}
                    />

                    <Text style={styles.titulo}>Cadastrar Novo Usuário</Text>

                    <TextInput
                    placeholder="Digite seu Nome.."
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                    />

                    <TextInput
                    placeholder="Digite seu Login..."
                    onChangeText={setLogin}
                    style={styles.input}
                    keyboardType='numeric'
                    />

                    <TextInput
                    placeholder="Digite sua Senha..."
                    onChangeText={setSenha}
                    style={styles.input}
                     keyboardType="numeric"
                    />

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={async () => {
                        try {
                            const resp = await api.post('usuarios', {
                                nome: nome,
                                login: login,
                                senha: senha,
                            });
                       
                           alert(JSON.stringify(resp.data.message));
                           navigation.navigate('ListarUsuario' as never);
                        } catch{
                            alert('Erro ao cadastrar!!');
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