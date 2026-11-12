import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InicioScreen() {
  const mostrarAlerta = (titulo: string, mensaje: string) => {
    Alert.alert(titulo, mensaje, [
      { text: 'Copiar', onPress: () => {} },
      { text: 'Cerrar', style: 'cancel' },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Tarjeta 1: Mi perfil */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Mi perfil</Text>
          <Text style={styles.paragraph}>
            Soy una persona responsable, dedicada y comprometida con mi aprendizaje. Me gusta trabajar en equipo, compartir ideas y aprender cosas nuevas. Actualmente estoy formándome como tecnólogo en Análisis y Desarrollo de Software en el SENA. Me interesa la tecnología y la programación, y siempre busco mejorar mis habilidades y adquirir nuevos conocimientos.
          </Text>
        </View>

        {/* Tarjeta 2: Datos personales */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Datos personales</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Nombre:</Text> Angel Gaviria</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Ciudad:</Text> Bogotá, Colombia</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Formación:</Text> Análisis y Desarrollo de Software (SENA)</Text>
          <Text style={styles.infoText}><Text style={styles.bold}>Habilidades:</Text> Trabajo en equipo, paciencia y responsabilidad.</Text>
        </View>

        {/* Botones de contacto */}
        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarAlerta('Mi correo electrónico', 'Mi correo electrónico:\nangel.gaviria@ejemplo.com')}
          >
            <Text style={styles.botonTexto}>Mi correo electrónico</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarAlerta('Mi número de celular', 'Mi número de celular:\n+57 300 123 4567')}
          >
            <Text style={styles.botonTexto}>Mi número de celular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boton}
            onPress={() => mostrarAlerta('Mi GitHub', 'Mi repositorio:\ngithub.com/angelgaviriasena22-droid')}
          >
            <Text style={styles.botonTexto}>Mi GitHub</Text>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A4B77',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333333',
    textAlign: 'left',
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
    gap: 12,
    marginTop: 4,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#13436B',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});