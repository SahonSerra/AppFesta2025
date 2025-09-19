import { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Cliente from '../components/Cliente';

import api from '../components/Api';

export default function ListarClientes()
//console.warn("test!") // exibi uma mensagem de API
 {

    const [cliente, setCliente] = useState<any[]>([]);

    const navigation = useNavigation();

    async function buscaClientes(){
        const response = await api.get('clientes');
        setCliente(response.data);
        
    }

    async function excluirCliente(id: number){
      try{
        await api.delete(`clientes/${id}`);
        Alert.alert('Sucesso', 'Cliente excluído com sucesso!'); 
        setCliente(cliente.filter(c => c.id !==id));
      }
      catch (error){
        Alert.alert('Erro', 'Não foi possivel excluir o cliente');
      }
    }

    useEffect(
        ()=>{
            buscaClientes();
        }
    );
 return (
    <>
    
      <ImageBackground
      source={require('../assets/img/globoback.jpg')}
      style={styles.imgFundo}
      imageStyle={styles.opacityImage}
      />

        <View style={styles.bloco}>
            <TouchableOpacity style={styles.btn}
           >
                <Text style={styles.txtBtn}
                onPress={()=>navigation.navigate('CadCliente' as never)} // Botao cadastrar cliente
                >Cadastrar Novo Cliente</Text> 
            </TouchableOpacity>
        </View>

        <View style={styles.bloco}>
            <Text style={styles.titulo}> Lista de Clientes </Text>

            <FlatList 
                data={cliente}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Cliente nome={item.nome} cpf={item.cpf} saldo={item.saldo} id={item.id} onDelete={excluirCliente}/>}
                style={styles.lista}
            />

        </View>       
    </>   
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    color: 'white',
   textDecorationLine: 'underline'
    
    
  },
  btn:{
    backgroundColor:'#3e9bddff',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:20,
    padding:20,
    borderRadius:20,
    textAlign:'center',
    
    
    
  },
  txtBtn:{
    textAlign:'center',
    fontSize:20,
    color: 'white',
  },
  bloco:{
    width:'100%',
    backgroundColor: '#050141ff', // aqui o fundo
    alignItems: 'center',
    
  },
  lista:{
    width:'80%',
    height:'70%',
    
  },
  imgFundo: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  opacityImage: {
    opacity: 0.8,
  },
});