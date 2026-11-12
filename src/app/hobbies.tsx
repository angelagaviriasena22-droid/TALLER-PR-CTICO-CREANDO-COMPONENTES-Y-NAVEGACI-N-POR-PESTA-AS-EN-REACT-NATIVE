import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HobbiesScreen() {
  const hobbies = [
    { nombre: 'Videojuegos', resumen: 'Juegos de estrategia y aventura', detalle: 'Me gusta jugar en equipo los fines de semana para desarrollar pensamiento estratégico.' },
    { nombre: 'Programación', resumen: 'Crear apps móviles', detalle: 'Disfruto aprender nuevas tecnologías como React Native y TypeScript.' },
    { nombre: 'Música', resumen: 'Escuchar rock y electrónica', detalle: 'Me ayuda a concentrarme mientras escribo código.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Mis Hobbies</Text>
      {hobbies.map((hobby, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => Alert.alert(hobby.nombre, hobby.detalle)}
        >
          <Text style={styles.titulo}>{hobby.nombre}</Text>
          <Text style={styles.resumen}>{hobby.resumen}</Text>
          <Text style={styles.hint}>Toca para ver más detalles</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F3F4F6' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 2 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
  resumen: { fontSize: 14, color: '#4B5563', marginTop: 4 },
  hint: { fontSize: 12, color: '#7C3AED', marginTop: 8, fontWeight: '600' },
});