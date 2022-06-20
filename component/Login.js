import { View, Text,StatusBar,KeyboardAvoidingView,Keyboard ,TextInput,StyleSheet,Button,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, { Component,useState ,useCallback,useEffect} from 'react'
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { loginAction,GetProducts } from './redux/action';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Login({navigation}) {
    const [username,setUserName] =useState()
    const [password,setPassword] =useState()
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch();
    const OKLogin =async()=>{
      setLoading(!loading)
      dispatch(loginAction(username))
     
   axios.post('https://fakestoreapi.com/auth/login',{
            username:username,
            password:password
        })
        .then(res=>{
          setLoading(false)
          if(res.status==200){
            navigation.navigate("HomeView")
            
          }
         
        })
        .catch(err=>{
          alert("input invalid please try again")
          setLoading(false)
        } )
       
    }
  return (
    <>
    <StatusBar/>
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{fontSize:30,color:'blue',fontWeight:'bold',marginBottom:20}}>Login</Text>
      <TextInput placeholder="UserName" value={username} onChangeText={(text)=>setUserName(text)} style={styles.TextInput}>
      </TextInput>
      <TextInput secureTextEntry={true} placeholder='password' value={password} onChangeText={(text)=>setPassword(text)} style={styles.TextInput}>
      </TextInput>
      <Button onPress={OKLogin} title="Login"/>
      <TouchableOpacity style={{flexDirection:'row',marginTop:20}} onPress={()=>navigation.navigate('Register')}>
        <Text style={{fontSize:18}}>Dont have account, </Text>
        <Text style={{fontSize:18,fontWeight:'bold'}}>Create a new account</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
      {
          loading ?  <ActivityIndicator size="large" color="#fff" /> : null
      }
      </View>
    </KeyboardAvoidingView>
    </>
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