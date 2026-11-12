import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function EstudiosScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Título llamativo con ícono */}
        <View style={styles.headerContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="school" size={28} color="#13436B" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.mainTitle}>Mi Formación Académica</Text>
            <Text style={styles.subtitle}>Estudios y certificaciones</Text>
          </View>
        </View>

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          anio="2025 - Actualidad"
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Colegio Ofelia Uribe de Acosta"
          anio="2025"
        />

        <TarjetaEstudio
          titulo="Tecnico en programación de software"
          institucion="SENA"
          anio="2025"
        />
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
    backgroundColor: '#E0F2FE',
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
});