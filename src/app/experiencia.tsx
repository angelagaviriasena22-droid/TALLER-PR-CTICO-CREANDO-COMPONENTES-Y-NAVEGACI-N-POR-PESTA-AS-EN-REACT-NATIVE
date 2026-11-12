import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExperienciaScreen() {
  const experiencias = [
    { cargo: 'Desarrollador Junior', empresa: 'Proyecto SENA', periodo: '2026', desc: 'Desarrollo de sistema de gestion de reservas en los pueblos de colombia ' },
    { cargo: 'Soporte Técnico', empresa: 'Proyecto técnico', periodo: '2025', desc: 'Sistema de gestión de votaciones estudiantiles.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Experiencia</Text>
      {experiencias.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cargo}>{item.cargo}</Text>
          <Text style={styles.empresa}>{item.empresa} • {item.periodo}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F3F4F6' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 12, elevation: 2 },
  cargo: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  empresa: { fontSize: 14, color: '#2563EB', marginVertical: 4 },
  desc: { fontSize: 14, color: '#4B5563' },
});