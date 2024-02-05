import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/72983645?v=4' }}
          style={styles.pfp}
        />
        <View>
          <Text style={styles.name}>Marco Rodrigo Flores Tepatzi</Text>
          <Text style={styles.title}>.NET Developer</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil Profesional</Text>
        <Text style={styles.sectionContent}>
          Soy un apasionado desarrollador de .NET con experiencia en aplicaciones web y de escritorio. Siempre estoy deseoso de aprender y mejorar mis habilidades de programación.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formación</Text>
        <Text style={styles.sectionContent}>
          • Ingeniería de Software (6to semestre) - Universidad Autónoma de Querétaro
        </Text>
        <Text style={styles.sectionContent}>
          • TIC’s - Instituto Tecnológico de Apizaco (07/20 - 07/21)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text style={styles.sectionContent}>
          • HTML avanzado y CSS intermedio
        </Text>
        <Text style={styles.sectionContent}>  
          • ASP.NET MVC y Entity Framework
        </Text>
        <Text style={styles.sectionContent}>  
          • Gestión de bases de datos SQL (principalmente MS SQL Server)
        </Text>
        <Text style={styles.sectionContent}>  
          • Flutter, BLoC y Provider intermedios
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proyectos</Text>
        <Text style={styles.sectionContent}>
          • CUSCO: Desarrollé una aplicación en Flutter que integra Provider, Firestore y Firebase Authentication para un centro de salud en Querétaro.
        </Text>
        <Text style={styles.sectionContent}>
          • Delivery App: Desarrollé una aplicación de delivery en Flutter con backend en ASP.NET.
        </Text>
        <Text style={styles.sectionContent}>
          • Ecommerce Application: Conecté el inventario de una empresa con una tienda en línea usando ASP.NET MVC, Entity Framework, MS SQL y Razor Pages.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aficiones</Text>
        <Text style={styles.sectionContent}>
          • Tenis: Disfruto viendo tenis.
        </Text>
        <Text style={styles.sectionContent}>
          • Idiomas: Estudié inglés y actualmente estoy aprendiendo francés.
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pfp: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#555',
  },
  section: {
    marginVertical: 16,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
  },
});



export default App;