import { View, Text,StatusBar,KeyboardAvoidingView,Keyboard ,TextInput,StyleSheet,Button,TouchableOpacity} from 'react-native'
import React, { Component,useState } from 'react'
import axios from "axios";
import Icon from 'react-native-vector-icons/Ionicons';
export default function Register({navigation}) {
    const [username,setUserName] =useState()
    const [password,setPassword] =useState()
    const [email,setEmail] =useState()
    const OkRegister =async()=>{
        axios.post('https://fakestoreapi.com/users', {
            email:email,
            username:username,
            password:password,
            name:{
                firstname:'John',
                lastname:'Doe'
            },
            address:{
                city:'kilcoole',
                street:'7835 new road',
                number:3,
                zipcode:'12926-3874',
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            },
            phone:'1-570-236-7033'
        })
        .then(res=>{
          if(res.status==200){
            navigation.navigate("Login")
          }
        console.log(res)
        })
        .catch(err=> alert("input invalid please try again"))
    }
  return (
    <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position: 'absolute',top:0,left:0}}>
        <Icon  name="chevron-back-circle-outline" size={50}/>
        
        </TouchableOpacity>
      <Text style={{fontSize:30,color:'blue',fontWeight:'bold',marginBottom:20}}>Register</Text>
      <TextInput placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)} style={styles.TextInput}>
      </TextInput>
      <TextInput placeholder="UserName" value={username} onChangeText={(text)=>setUserName(text)} style={styles.TextInput}>
      </TextInput>
      <TextInput secureTextEntry={true} placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} style={styles.TextInput}>
      </TextInput>
      <Button onPress={OkRegister} title="Register"/>
     
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#16ccb1',
    },
    TextInput: {
      height:50,
      width:400,
      backgroundColor:'#fff',
      marginBottom:10,
      elevation:5,
      paddingLeft:10
    }
  })