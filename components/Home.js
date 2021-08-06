import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Home(props){
  return(
    <View style = {estilo.container}> 
    <Text style = {estilo.titulo}> Olimpiadas de Tokio </Text>
    <Text style = {estilo.titulo}> 
     2020/2021 </Text>
    <Image style = {estilo.img} source={require('../assets/tokyo.webp')} />
    <Text style={estilo.textoMedalha}>Medalhas conquistadas</Text>

<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Ouro')}}>
<Text style={estilo.textobtn}> Ouro </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Prata')}}>
<Text style={estilo.textobtn}> Prata </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.btn}>
<Text style={estilo.textobtn} onPress={()=>{props.navigation.navigate('Bronze')}}> Bronze </Text>
</TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
     alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  img:{
    height: 200,
    width: 200,
  },
  titulo:{
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 25,
    color: '#191970'
  },
  textoMedalha:{
  fontSize: 20,
  marginBottom: 20,
  color: '#191970'
  },
  btn:{
    margin:10,
    padding:10,
    backgroundColor:'#ADD8E6',
    borderRadius: 5,
  },
  textobtn:{
    fontSize: 25
  }
})