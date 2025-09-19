import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


interface PropCliente {

  id: number,
  nome: string,
  cpf: string,
  saldo: number,
  onDelete: (id:number) => void; // nova propriedade 
}

export default function Cliente({ id, nome, cpf, saldo, onDelete }: PropCliente) {
  return (
     

    <View style={styles.card}>

      <Image
            source={require('../assets/img/ClientIcon.png')}
            style={styles.imgCliente}
              
      />

      <Text style={styles.text}>Cod.: {id}</Text>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>CPF: {cpf}</Text>
      <Text style={styles.text}>Saldo: R$ {saldo}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnExcluir} onPress={()=>onDelete(id)}// Botão excluir 
        >
          <Text style={styles.btnText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEditar} // Botão Editar
        >
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
   backgroundColor: '#575ae8ff',
    padding: 15,
    borderRadius: 20,
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    alignItems: 'center',
   
   
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: 'whitesmoke',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnExcluir: {
    backgroundColor: '#a1030bff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  btnEditar: {
    backgroundColor: '#309a7eff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffffff',
    fontWeight: 'bold',
  },
  imgCliente: {
    width: 100,
    height: 100,
    marginBottom: 10,
   alignItems:'center',
  },

 

  
});
