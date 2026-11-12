import { Ionicons } from '@expo/vector-icons';
import { Alert, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InicioScreen() {
  const mostrarAlerta = (titulo: string, mensaje: string, url?: string) => {
    Alert.alert(titulo, mensaje, [
      ...(url ? [{ text: 'Abrir enlace', onPress: () => Linking.openURL(url) }] : []),
      { text: 'Cerrar', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Cabecera llamativa con nombre en grande e ícono de perfil */}
        <View style={styles.heroCard}>
          <View style={styles.avatarContainer}>
            <Ionicons name="code-slash" size={44} color="#13436B" />
          </View>
          <Text style={styles.heroName}>Angela Sofia Gaviria Colorado</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>Desarrollador de Software en Formación</Text>
          </View>
          <Text style={styles.locationText}>
            <Ionicons name="location-outline" size={14} color="#CBD5E1" /> Bogotá, Colombia
          </Text>
        </View>

        {/* Tarjeta 1: Mi perfil */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="person-circle-outline" size={24} color="#13436B" />
            <Text style={styles.sectionTitle}>Mi perfil</Text>
          </View>
          <Text style={styles.paragraph}>
            Soy una persona responsable, dedicada y comprometida con mi aprendizaje. Me gusta trabajar en equipo, compartir ideas y aprender cosas nuevas. Actualmente estoy formándome como tecnólogo en Análisis y Desarrollo de Software en el SENA. Me interesa la tecnología y la programación, y siempre busco mejorar mis habilidades y adquirir nuevos conocimientos.
          </Text>
        </View>

        {/* Tarjeta 2: Habilidades destacadas (Chips visuales) */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="flash-outline" size={22} color="#13436B" />
            <Text style={styles.sectionTitle}>Habilidades y Tecnologías</Text>
          </View>
          <View style={styles.skillsContainer}>
            <View style={styles.skillChip}><Text style={styles.skillText}>Documentación</Text></View>
            <View style={styles.skillChip}><Text style={styles.skillText}>Pruebas de software</Text></View>
            <View style={styles.skillChip}><Text style={styles.skillText}>Python</Text></View>
            <View style={styles.skillChip}><Text style={styles.skillText}>Git & GitHub</Text></View>
            <View style={styles.skillChip}><Text style={styles.skillText}>Trabajo en equipo</Text></View>
          </View>
        </View>

        {/* Tarjeta 3: Datos personales */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="information-circle-outline" size={22} color="#13436B" />
            <Text style={styles.sectionTitle}>Datos personales</Text>
          </View>
          <Text style={styles.infoText}><Text style={styles.bold}>Formación:</Text> Análisis y Desarrollo de Software (SENA)</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Disponibilidad:</Text> Tiempo completo / Proyectos</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Idiomas:</Text> Español (Nativo), Inglés (Básico)</Text>
        </View>

        {/* Botones de contacto con Linking */}
        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => mostrarAlerta('Mi correo electrónico', 'angelagaviria.sena22@gmail.com', 'mailto:angelagaviria.sena22@gmail.com')}
          >
            <Ionicons name="mail-outline" size={20} color="#FFFFFF" />
            <Text style={styles.botonTexto}>Mi correo electrónico</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => mostrarAlerta('Mi número de celular', '+57 312 791 9437', 'tel:+573127919437')}
          >
            <Ionicons name="call-outline" size={20} color="#FFFFFF" />
            <Text style={styles.botonTexto}>Mi número de celular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => mostrarAlerta('Mi GitHub', 'github.com/angelgaviriasena22-droid', 'https://github.com/angelgaviriasena22-droid')}
          >
            <Ionicons name="logo-github" size={20} color="#FFFFFF" />
            <Text style={styles.botonTexto}>Mi GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            activeOpacity={0.7}
            onPress={() => mostrarAlerta('Mi Facebook', 'facebook.com/angel.gaviria', 'https://facebook.com')}
          >
            <Ionicons name="logo-facebook" size={20} color="#FFFFFF" />
            <Text style={styles.botonTexto}>Mi Facebook</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  container: {
    padding: 16,
    gap: 16,
  },
  heroCard: {
    backgroundColor: '#13436B',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#13436B',
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  avatarContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#38BDF8',
  },
  heroName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  roleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },
  roleText: {
    color: '#E0F2FE',
    fontSize: 14,
    fontWeight: '600',
  },
  locationText: {
    color: '#CBD5E1',
    fontSize: 13,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#13436B',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333333',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  skillText: {
    color: '#0369A1',
    fontWeight: '600',
    fontSize: 13,
  },
  infoText: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 6,
    lineHeight: 21,
  },
  bold: {
    fontWeight: 'bold',
    color: '#111827',
  },
  botonesContainer: {
    gap: 10,
    marginTop: 4,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#13436B',
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});