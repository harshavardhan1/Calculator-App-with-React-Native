import React, { useEffect, useRef, useState } from "react";
import { Alert, Animated, Button, FlatList, Pressable, ScrollView, Text, TextInput, TouchableNativeFeedback, View } from "react-native";
import { Platform } from "react-native";
export default function App(){
  const [calculateSting,setCalculateString]=useState('0');
  const [arrayNumbers]=useState(['CE','+','-','x','/','%','⌫','(',')','9', '8', '7', '6', '5', '4', '3', '2', '1', '0','.','='])
  const handleKeyPress=(keyPressed:any)=>{
  try{
    switch(keyPressed){
      case 'CE':
        setCalculateString('');
        break;
      case '⌫':
        setCalculateString((previousString)=>previousString.slice(0,previousString.length-1));
        break;
      case '=':
        setCalculateString(eval(calculateSting).toString());
        break;      
      default:
        setCalculateString((previousString)=>previousString+keyPressed);
    }
  }catch(err:any){
    console.log(err.message);
    Alert.alert('Syntax Error please Check');
  }
  };
  return (
    <View style={{height:"100%"}}>
      <View style={{flex:1}}>
        <Text style={{position:"absolute",bottom:0,right:0,fontSize:35}}>{calculateSting}</Text>
      </View>
      <View style={{display:"flex",flexWrap:'wrap',flexDirection:"row",flex:1.3}}>
      {arrayNumbers.map((eachNumber,index)=>{
        return (
          <Pressable 
            onPress={()=>{handleKeyPress(eachNumber)}}
            key={index} 
            android_ripple={{color:"white",foreground:true}}
            style={[{width:"14.27%",height:"33%",backgroundColor:"rgba(60,60,60,0.1)",justifyContent:"center"}]}
          >
            <Text style={{textAlignVertical:"center",textAlign:"center",fontSize:30}}>{eachNumber}</Text>
          </Pressable>
        );
      })}
      </View>
    </View>
  );
}