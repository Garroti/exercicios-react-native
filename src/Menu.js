import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer' 

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

// export default createDrawerNavigator({
//   MegaSena: {
//     screen: () => <MegaSena numeros={6} />,
//     navigationOptions: { title: 'Mega Sena' }
//   },
//   Inverter: {
//     screen: () => <Inverter texto='React Native' />
//   },
//   ParImpar: {
//     screen: () => <ParImpar numero={30} />,
//     navigationOptions: { title: 'Par & Impar' }
//   },
//   Simples: {
//     screen: () => <Simples texto='Flexivel' />
//   }
// }, { drawerWidth: 300 })

const FlexComponent = () => <Flex />
const ListaFlexComponent = () => <ListaFlex />
const TextoSincronizadoComponent = () => <TextoSincronizado />
const AvoComponent = () => <Avo nome="Wilson" sobrenome="Macedo" />
const EventoComponent = () => <Evento />
const ValidarPropsComponent = () => <ValidarProps ano={18} />
const PlataformaComponent = () => <Plataformas />
const ContadorComponent = () => <Contador numeroInicial={100} />
const MegaSenaComponent = () => <MegaSena numeros={8} />
const InverterComponent = () => <Inverter texto='React Native' />
const ParImparComponent = () => <ParImpar numero={30} />
const SimplesComponent = () => <Simples texto='Flexivel' />

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: 300,
      }}
    >
      <Drawer.Screen name='Flex' component={ FlexComponent } />
      <Drawer.Screen name='Lista Flex' component={ ListaFlexComponent } />
      <Drawer.Screen name='Texto Sincronizado' component={ TextoSincronizadoComponent } />
      <Drawer.Screen name='Avo' component={ AvoComponent } />
      <Drawer.Screen name='Evento' component={ EventoComponent } />
      <Drawer.Screen name='Validar' component={ ValidarPropsComponent } />
      <Drawer.Screen name='Plataforma' component={ PlataformaComponent } />
      <Drawer.Screen name='Contador' component={ ContadorComponent } />
      <Drawer.Screen name='Mega Sena' component={ MegaSenaComponent } />
      <Drawer.Screen name='Inverter' component={ InverterComponent } />
      <Drawer.Screen name='Par & Impar' component={ ParImparComponent } />
      <Drawer.Screen name='Simples' component={ SimplesComponent } />
    </Drawer.Navigator>
  );
}

export default function Menu() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}