import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExperienciaScreen() {
  const experiencias = [
    { 
      cargo: 'Desarrollador Junior', 
      empresa: 'Proyecto SENA', 
      periodo: '2026', 
      desc: 'Desarrollo de sistema de gestion de reservas en los pueblos de colombia ' 
    },
    { 
      cargo: 'Soporte Técnico', 
      empresa: 'Proyecto técnico', 
      periodo: '2025', 
      desc: 'Sistema de gestión de votaciones estudiantiles.' 
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Título llamativo con ícono */}
        <View style={styles.headerContainer}>
          <View style={styles.iconCircle}>
            <Ionicons name="briefcase" size={26} color="#13436B" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.mainTitle}>Experiencia</Text>
            <Text style={styles.subtitle}>Proyectos y trayectoria</Text>
          </View>
        </View>

        {experiencias.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cargo}>{item.cargo}</Text>
            <Text style={styles.empresa}>{item.empresa} • {item.periodo}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
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
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
  },
  cargo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  empresa: {
    fontSize: 14,
    color: '#2563EB',
    marginVertical: 4,
    fontWeight: '600',
  },
  desc: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});