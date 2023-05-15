
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular,Montserrat_700Bold } from '@expo-google-fonts/montserrat';
//expo install expo-font @expo-google-fonts/nome-da-fonte para instalar
import { AppLoading } from 'expo-app-loading';
//expo install expo-app-loading para instalar

import mock from './src/mock/Cesta';

export default function App() {

  const[fonteCarregada]=useFonts({
    'MontSerrat_Regular': Montserrat_400Regular,
    'MontSerrat_Bold': Montserrat_700Bold,
  })

    if(!fonteCarregada){
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AppLoading
            startAsync={() => Promise.resolve()}
            onFinish={onFontLoadFinish}
            onError={onFontLoadError} />
          <Text style={{ marginTop: 10 }}>Carregando...</Text>
        </View>
      );
    }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}/> //... serve para passar todas as propriedades do componente mock
      <StatusBar style="auto" />
   </SafeAreaView>
  );
}


