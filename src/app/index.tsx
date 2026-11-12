import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloPrincipal}>Formación Académica</Text>
      
      <TarjetaEstudio 
        titulo="Bachiller" 
        institucion="Institución Educativa Municipal" 
        anio={2016} 
        enCurso={false} 
      />
      <TarjetaEstudio 
        titulo="Técnico" 
        institucion="Colegio ABC" 
        anio={2018} 
        enCurso={false} 
      />
      <TarjetaEstudio 
        titulo="Tecnólogo" 
        institucion="SENA" 
        anio={2026} 
        enCurso={true} 
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#fafafc" },
  contenido: { padding: 20 },
  tituloPrincipal: { fontSize: 20, fontWeight: "bold", marginBottom: 16, color: "#1e293b" }
});