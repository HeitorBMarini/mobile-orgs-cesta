import React from 'react';
import { Dimensions, Image, Text} from 'react-native';

import topo from '../../assets/topo.png';

import logo from '../../assets/logo.png';
import { View } from 'react-native-web';

const width = Dimensions.get('screen').width;

export default function Cesta(){

    return<>
 
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}> Detalhes da cesta </Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}> Cesta de verduras </Text>

        <View style={estilos.fazenda}>

        <Image source={logo} style={estilos.imagemFazenda}></Image>

        <Text style={estilos.nomeFazenda}> Diogo Kahn ' house </Text>

        </View>
        
        <Text style={estilos.descricao}>Produtos selecionados direto da fazenda para você
        </Text>
        <Text style={estilos.preco}> R$ 50,00</Text>


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