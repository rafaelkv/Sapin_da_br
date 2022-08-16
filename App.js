import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import sapo from '.Componentes/Tsapo'
import pato from '.Componentes/Tpatin'
import coelho from '.Componentes/Tcoelho'
import aranha from '.Componentes/Taranha'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
