// Pantalla que muestra una lista de partidos con los equipos involucrados, la fecha y el lugar de los mismos 

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function PartidosScreen() {
  const partidos = [
    { id: '1', equipos: 'Equipo A vs Equipo B', fecha: '2024-11-20', lugar: 'Estadio 1' },
    { id: '2', equipos: 'Equipo C vs Equipo A', fecha: '2024-11-25', lugar: 'Estadio 2' },
    { id: '3', equipos: 'Equipo B vs Equipo C', fecha: '2024-12-01', lugar: 'Estadio 3' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de partidos</Text>
      <FlatList
        data={partidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Equipos: {item.equipos}</Text>
            <Text>Fecha: {item.fecha}</Text>
            <Text>Lugar: {item.lugar}</Text>
          </View>
        )}
      />
    </View>
  );
}

