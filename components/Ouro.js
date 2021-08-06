import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Ouro(){
  return(

<View style={estilo.container}>

<Text style={estilo.titulo}> Medalhas de Ouro </Text>
<ScrollView>
<Text style={estilo.nome}>Rebeca Andrade</Text>

<Image style={estilo.img} source={require('../assets/Rebeca.PNG')}/>

<Separador/>

<Text  style={estilo.nome}>Ana Marcela Cunha</Text>

<Image style={estilo.img} source={require('../assets/Ouro_Ana_Marcela_Cunha.PNG')}/>

<Separador/>

<Text  style={estilo.nome}>Italo Ferreira</Text>

<Image style={estilo.img} source={require('../assets/Ouro_Italo_Ferreira.PNG')}/>



</ScrollView>
</View>

  );
}
const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#D4AF37',
    padding:10,
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
    borderBottomColor: '#000000'
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