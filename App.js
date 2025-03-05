import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ahorros')}>
        <Text style={styles.buttonText}>Ir a Ahorros</Text>
      </TouchableOpacity>
b<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Configuración')}>
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </TouchableOpacity>
    </View>
  );
};

const AhorrosScreen = ({ navigation }) => {
  const [ahorro, setAhorro] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorro: ${ahorro}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setAhorro(ahorro + 10)}>
        <Text style={styles.buttonText}>Añadir 10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setAhorro(0)}>
        <Text style={styles.buttonText}>Resetear</Text>
      </TouchableOpacity>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
      <Text>Nombre: Usuario Ejemplo</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ConfiguracionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Tema cambiado!')}>
        <Text style={styles.buttonText}>Cambiar Tema</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Idioma cambiado!')}>
        <Text style={styles.buttonText}>Cambiar Idioma</Text>
      </TouchableOpacity>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ahorros" component={AhorrosScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});