import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View>

<CarsList/>
<Header/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  
});
