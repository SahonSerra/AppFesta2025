import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,  } from 'react-native';

interface propProdutos{
    id: number,
    nome: string,
    valor: number,
    qtd: number,
    id_barraca: number,

}

export default function produtos({id, nome, valor, qtd, id_barraca}: propProdutos){
    return(

            <View style={styles.card}>

                <Image
                source={require('../assets/img/CadProd.png')}
                style={styles.imgProduto}
                />

                <Text style={styles.text}>Cod.: {id}</Text>
                <Text style={styles.text}>Nome: {nome}</Text>
                <Text style={styles.text}>Valor: {valor}</Text>
                <Text style={styles.text}>Quantidade: {qtd}</Text>
                <Text style={styles.text}>Num. Barraca: {id_barraca}</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.btnExcluir}
                    // BOTÃO EXCLUIR
                    >
                        <Text style={styles.btnText}>Excluir</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnEditar}
                    // BOTÃO EDITAR
                    >
                        <Text style={styles.btnText}>Editar</Text>
                    </TouchableOpacity>

                </View>

            </View>



    );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1060cfff',
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
    width: '100%',
  },
  btnExcluir: {
    backgroundColor: '#a1030b',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  btnEditar: {
    backgroundColor: '#309a7e',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imgProduto: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
