import React from 'react';
import { Dimensions, Image, Text} from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){

    return<>
 
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}> Detalhes da cesta </Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },

    titulo:{
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontSize: 16, 
        lineHeight: 16,
        color : "#fff",
        fontWeight: 'bold',
        padding: 16
    }
});