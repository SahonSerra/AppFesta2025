// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import ListarClientes from './telas/ListarClientes';
import ListarUsuario from './telas/ListarUsuario';
import CadCliente from './telas/CadCliente';
import CadUsuario from './telas/CadUsuario';



const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    ListarClientes:ListarClientes,
    ListarUsuario:ListarUsuario,
    CadCliente:CadCliente,
    CadUsuario:CadUsuario,

   

  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}