import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Prata(){
  return(
<ScrollView>
<View style={estilo.container}>

<Text style={estilo.titulo}> Medalhas de Prata </Text>

<Text style={estilo.nome}>Rebeca Andrade</Text>

<Image style={estilo.img}  source={require('../assets/Rebeca.PNG')}/>

<Separador/>

<Text  style={estilo.nome}>Kelvin Hoefler</Text>

<Image style={estilo.img} source={require('../assets/Prata_Kelvin_Hoefler.PNG')}/>

<Separador/>

<Text style={estilo.nome}>Pedro Barros</Text>

<Image style={estilo.img} source={require('../assets/Prata_Pedro_Barros.PNG')}/>

<Separador/>

<Text style={estilo.nome}>Rayssa Leal</Text>

<Image style={estilo.img} source={require('../assets/Prata_Rayssa_Leal.PNG')}/>


</View>
</ScrollView>
  );
}
const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#c0c0c0',
    padding: 10,
  },
  titulo:{
    fontSize: 20,
    marginTop: 30,
    textAlign:'center',
    padding: 20
  },
  separador:{
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#1C1C1C'
  },
  nome:{
    marginBottom:10,
    fontSize: 15
  },
  img:{
    width: largura,
    height: 250,
  }
});