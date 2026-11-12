import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InicioScreen() {
  const mostrarAlerta = (titulo: string, mensaje: string) => {
    Alert.alert(titulo, mensaje, [{ text: 'Cerrar' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>Angel Gaviria</Text>
      <Text style={styles.rol}>Desarrollador de Software en Formación</Text>

      <View style={styles.botonesContainer}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => mostrarAlerta('Teléfono', 'Mi número es: +57 300 123 4567')}
        >
          <Text style={styles.botonTexto}>Llamar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => mostrarAlerta('Correo Electrónico', 'angel.gaviria@ejemplo.com')}
        >
          <Text style={styles.botonTexto}>Enviar Correo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => mostrarAlerta('GitHub', 'github.com/angelgaviriasena22-droid')}
        >
          <Text style={styles.botonTexto}>Repositorio Git</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => mostrarAlerta('Facebook', 'facebook.com/angel.gaviria')}
        >
          <Text style={styles.botonTexto}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  nombre: { fontSize: 24, fontWeight: 'bold' },
  rol: { fontSize: 16, color: '#6B7280', marginBottom: 24 },
  botonesContainer: { width: '100%', gap: 10 },
  boton: { backgroundColor: '#2563EB', padding: 14, borderRadius: 10, alignItems: 'center' },
  botonTexto: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});