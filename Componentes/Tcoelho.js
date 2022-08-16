import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function Tcoelho () {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        Qual biblioteca usamos?
      </Text>

      <Text style={estilo.texto}>
        Das bibliotecas que utilizamos podemos destacar duas:
      </Text>

      <Text style={estilo.texto}>
        Olá 
      </Text>
      
      <Text style={estilo.texto}>
        minions
      </Text>
    </View>
  );
}