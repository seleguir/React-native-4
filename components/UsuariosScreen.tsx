// Pantalla que proporciona una lista de usuarios del sistema con sus nombres y roles (Administradores, jugadores, seguidores)

import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function UsuariosScreen() {
  const usuarios = [
    { id: '1', nombre: 'Admin 1', rol: 'Administrador' },
    { id: '2', nombre: 'Jugador 1', rol: 'Jugador' },
    { id: '3', nombre: 'Seguidor 1', rol: 'Seguidor' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lista de usuarios</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Nombre: {item.nombre}</Text>
            <Text>Rol: {item.rol}</Text>
          </View>
        )}
      />
    </View>
  );
}

