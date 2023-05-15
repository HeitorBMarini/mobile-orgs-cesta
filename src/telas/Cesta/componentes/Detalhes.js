import React from 'react';
import { View, Image, StyleSheet, Button} from 'react-native';

import Texto from '../../../components/Texto';
import { TouchableHighlight } from 'react-native-web';


export default function Detalhes(nome, logoFazenda, nomeFazenda, descricao, preco, botao){
    return <>
    <Texto style={estilos.nome}> {nome} </Texto>

        <View style={estilos.fazenda}>

        <Image source={logoFazenda} style={estilos.imagemFazenda}></Image>

        <Texto style={estilos.nomeFazenda}> {nomeFazenda} </Texto>

        </View>

        <Texto style={estilos.descricao}>{descricao}
        </Texto>
    <Texto style={estilos.preco}> {preco}</Texto>

    <TouchableHighlight style={estilos.botao} onPress={() => {}}>
    <Texto style={estilos.textoBotao}>{botao}</Texto>

    </TouchableHighlight>

    
    </>
}

const estilos = StyleSheet.create({

    nome:{
        color: '#464646',
        FontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
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
    },

    botao:{
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },

    textoBotao:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: 'bold'
    }


})