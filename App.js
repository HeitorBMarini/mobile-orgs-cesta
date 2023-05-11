
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
//expo install expo-font @expo-google-fonts/nome-da-fonte para instalar

export default function App() {

  const[fonteCarregada]=useFonts({
    'MontSerrat_Regular': Montserrat_400Regular,
    'MontSerrat_Bold': Montserrat_700Bold,
  })

  if(!fonteCarregada){
    return <View/>
  }
  
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta />
      <StatusBar style="auto" />
   </SafeAreaView>
  );
}


