import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  textoBoton: string;
  nombreIcono?: string;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, colorBoton, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: colorBoton }]} onPress={onPress}>
      <Text style={styles.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});