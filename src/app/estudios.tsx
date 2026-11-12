import { ScrollView, StyleSheet, Text } from 'react-native';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function EstudiosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Mi Formación Académica</Text>

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA"
        anio="2025 - Actualidad"
        enCurso={true}
      />

      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Distrital"
        anio="2023"
      />

      <TarjetaEstudio
        titulo="Curso de Fundamentos de Programación"
        institucion="Platzi / SENA"
        anio="2024"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F3F4F6' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#111827' },
});