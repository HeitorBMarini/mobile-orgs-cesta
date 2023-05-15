import React from 'react';

import Texto from '../../../components/Texto';
import { ScrollView, StyleSheet, View} from 'react-native-web';

export default function Itens(titulo, lista){
    return<>
    <Texto style={estilos.titulo}>
       {titulo}
    </Texto>
    {lista.map(({nome, imagem}) => 
    {
        return<View key={nome}>
        <Image source={imagem} style={estilos.imagem}/>
         <Texto > {nome}</Texto>
       
         </View>
         })}
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

item:{
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    alignItems: 'center'
},

imagem:{
    width: 46,
    height: 46
},
nome:{
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
}

})