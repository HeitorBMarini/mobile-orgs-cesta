import React from 'react';

import Topo from './componentes/Topo';

import { View } from 'react-native';
import Detalhes from './componentes/Detalhes';

export default function Cesta(){

    return<>
 
   <Topo/>

    <View style={estilos.cesta}>

    <Detalhes/>
    </View>
    
    </>
}

const estilos = StyleSheet.create({

    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "Montserrat_Bold",
    },
    
    
});