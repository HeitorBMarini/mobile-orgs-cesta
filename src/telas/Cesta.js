import React from 'react';
import { Dimensions, Image, Text} from 'react-native';

import topo from '../../assets/topo.png';

import logo from '../../assets/logo.png';
import { View } from 'react-native-web';
import Texto from '../components/Texto';

const width = Dimensions.get('screen').width;

export default function Cesta(){

    return<>
 
    <Image source={topo} style={estilos.topo}/>
    <Texto style={estilos.titulo}> Detalhes da cesta </Texto>

    <View style={estilos.cesta}>
        <Texto style={estilos.nome}> Cesta de verduras </Texto>

        <View style={estilos.fazenda}>

        <Image source={logo} style={estilos.imagemFazenda}></Image>

        <Texto style={estilos.nomeFazenda}> Diogo Kahn ' house </Texto>

        </View>
        
        <Texto style={estilos.descricao}>Produtos selecionados direto da fazenda para você
        </Texto>
        <Texto style={estilos.preco}> R$ 50,00</Texto>


    </View>

    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
        fontFamily: "MontSerrat"
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
    },

    nome:{
        color: '#464646',
        FontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    }, 

    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "Montserrat_Bold",
    },
    
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    imagemFazenda:{
        width: 32,
        height: 32,
    },

    fazenda:{
        flexDirection: 'row',
        fontFamily: "Montserrat_Regular",
    },

    preco:{
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 22,
        marginTop: 8
    },

    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    }
});