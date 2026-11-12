import { Ionicons } from '@expo/vector-icons';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HobbiesScreen() {
  const hobbies = [
    { 
      nombre: 'Videojuegos', 
      resumen: 'Juegos de estrategia y aventura', 
      detalle: 'Me gusta jugar en equipo los fines de semana para desarrollar pensamiento estratégico.' 
    },
    { 
      nombre: 'Jugar futbol', 
      resumen: 'Jugar fútbol en la sintetica', 
      detalle: 'Me ayuda a mantenerme en forma y a socializar con mis amigos y familia' 
    },
    { 
      nombre: 'Música', 
      resumen: 'Escuchar rap y musica de diferentes generos ', 
      detalle: 'Me ayuda a concentrarme, relajarme y a estar feliz .' 
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Título llamativo con ícono */}
        <View style={styles.headerContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="heart" size={26} color="#E11D48" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.mainTitle}>Mis Hobbies</Text>
            <Text style={styles.subtitle}>Pasatiempos e intereses personales</Text>
          </View>
        </View>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    gap: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFE4E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13436B',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#E11D48',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  resumen: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 4,
  },
  hint: {
    fontSize: 12,
    color: '#7C3AED',
    marginTop: 8,
    fontWeight: '600',
  },
});