import { StyleSheet, Text, View } from 'react-native';

interface TarjetaEstudioProps {
  titulo: string;
  institucion: string;
  anio: string;
  enCurso?: boolean;
}

export default function TarjetaEstudio({ titulo, institucion, anio, enCurso = false }: TarjetaEstudioProps) {
  return (
    <View style={[styles.card, enCurso && styles.cardEnCurso]}>
      <View style={styles.header}>
        <Text style={styles.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={styles.institucion}>{institucion}</Text>
      <Text style={styles.anio}>{anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#9CA3AF',
    elevation: 2,
  },
  cardEnCurso: {
    borderLeftColor: '#7C3AED', // Diferencia de color en el borde
    backgroundColor: '#F5F3FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    flex: 1,
  },
  badge: {
    backgroundColor: '#7C3AED', // Fondo morado
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20, // Cápsula redondeada
  },
  badgeText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 12,
    fontWeight: 'bold',
  },
  institucion: {
    fontSize: 14,
    color: '#4B5563',
  },
  anio: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});