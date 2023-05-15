import React from 'react';

import Topo from './componentes/Topo';

import { View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import {  StyleSheet, FlatList} from 'react-native-web';

import Texto from '../../components/Texto';

export default function Cesta(topo, detalhes, Item){

    return<>

    <FlatList>
            data={lista}
            renderItem ={renderItem}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {

    return<>
    <Topo {...topo}/>

        <View style={estilos.cesta}>

        <Detalhes {...detalhes}/>
        <Texto>{Itens.titulo}</Texto>
        </View>
        </>
        }}
    </FlatList>
</>
}

const estilos = StyleSheet.create({

    titulo:{
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBotom: 8,
        fontSize: 20,
        lineHeight: 32,
    
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "Montserrat_Bold",
    },
    
    
});