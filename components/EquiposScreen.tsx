// Pantalla que muestra los equipos y sus características (nombres, jugadores y escudo)

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function EquiposScreen() {
  const equipos = [
    { id: '1', nombre: 'Equipo A', escudo: 'Escudo 1' }, // url
    { id: '2', nombre: 'Equipo B', escudo: 'Escudo 2' }, // url
    { id: '3', nombre: 'Equipo C', escudo: 'Escudo 3' }, // url 
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de Equipos</Text>
      <FlatList
        data={equipos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Escudo: {item.escudo}</Text>
          </View>
        )}
      />
    </View>
  );
}

