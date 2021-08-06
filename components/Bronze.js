import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Bronze(){
  
  return(

<View style={estilo.container}>

<Text style={estilo.titulo}> Medalhas de Bronze </Text>
<ScrollView>
<Text style={estilo.nome}>Bronze Abner Teixeira</Text>

<Image style={estilo.img} source={require('../assets/Bronze_Abner_Teixeira.PNG')}/>

<Separador/>

<Text style={estilo.nome}>Alison dos Santos</Text>

<Image style={estilo.img} source={require('../assets/Bronze_Alison_dos_Santos.PNG')}/>

<Separador/>

<Text style={estilo.nome}>Thiago Braz</Text>

<Image style={estilo.img} source={require('../assets/Bronze_Thiago_Braz.PNG')}/>


</ScrollView>
</View>

  );
}
const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#CD7F32',
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
    borderBottomColor: '#000'
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