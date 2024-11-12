// Torneo de fútbol 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler'; 

// Importo mis pantallas
import EquiposScreen from '../../components/EquiposScreen';
import JugadoresScreen from '../../components/JugadoresScreen';
import PartidosScreen from '../../components/PartidosScreen';
import EstadisticasScreen from '../../components/EstadisticasScreen';
import UsuariosScreen from '../../components/UsuariosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Equipos" component={EquiposScreen} />
        <Tab.Screen name="Jugadores" component={JugadoresScreen} />
        <Tab.Screen name="Partidos" component={PartidosScreen} />
        <Tab.Screen name="Estadísticas" component={EstadisticasScreen} />
        <Tab.Screen name="Usuarios" component={UsuariosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}