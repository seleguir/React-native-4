// Pantalla que muestra estadísticas simples de los jugadores, como goles y tarjetas recibidas. Proporciona una visualización de datos de ejemplo

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function EstadisticasScreen() {
  const estadisticas = [
    { id: '1', jugador: 'Juan Pérez', goles: 5, tarjetas: 1 },
    { id: '2', jugador: 'Pedro García', goles: 3, tarjetas: 0 },
    { id: '3', jugador: 'María López', goles: 2, tarjetas: 2 },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Estadísticas de jugadores</Text>
      <FlatList
        data={estadisticas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Jugador: {item.jugador}</Text>
            <Text>Goles: {item.goles}</Text>
            <Text>Tarjetas: {item.tarjetas}</Text>
          </View>
        )}
      />
    </View>
  );
}