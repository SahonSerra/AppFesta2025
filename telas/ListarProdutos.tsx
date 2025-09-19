import { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../components/Api';

import Produto from '../components/Produtos';

export default function ListarProdutos(){

        const navigation = useNavigation(); 

        const [produtos, setProduto] = useState<any[]>([]);

        async function buscaProdutos(){
                const response = await api.get('produtos');
                setProduto(response.data);

        }

            async function excluirProduto(id: number)
            {
                
            }
            
        



}

