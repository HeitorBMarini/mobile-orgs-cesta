import React from 'react';

import Topo from './componentes/Topo';

import { View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';
import { ScrollView, StyleSheet} from 'react-native-web';

export default function Cesta(topo, detalhes){

    return<ScrollView>
 
   <Topo {...topo}/>

    <View style={estilos.cesta}>

    <Detalhes {...detalhes}/>
    <Itens {...Itens}/>
    </View>
    
    </ScrollView>
}

const estilos = StyleSheet.create({

    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "Montserrat_Bold",
    },
    
    
});