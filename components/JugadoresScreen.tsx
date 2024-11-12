// Pantalla que muestra una lista de jugadores con sus características (Nombre y Apellido, edad, posición, número de casaca, equipo al que pertenecen)

import React from 'react';
import { View, Text, FlatList } from 'react-native'; 

export default function JugadoresScreen() {
  const jugadores = [
    { id: '1', nombre: 'Juan Pérez', edad: 24, posicion: 'Delantero', equipo: 'Equipo A' },
    { id: '2', nombre: 'Pedro García', edad: 28, posicion: 'Defensa', equipo: 'Equipo B' },
    { id: '3', nombre: 'María López', edad: 22, posicion: 'Mediocampista', equipo: 'Equipo C' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de jugadores</Text>
      <FlatList
        data={jugadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Posición: {item.posicion}</Text>
            <Text>Equipo: {item.equipo}</Text>
          </View>
        )}
      />
    </View>
  );
}