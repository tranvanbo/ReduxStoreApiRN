
import { StyleSheet, Text, View,ScrollView ,Image,FlatList,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import axios  from 'axios';
import React, { useEffect,useState,useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';
import { loginAction,GetProducts } from '../redux/action';
const {width, height} =Dimensions.get('window')

export default function HomeView({navigation}) {
  const info = useSelector((state) => state.userReducer)
  const dispatch =useDispatch()
  const GetProduct = useCallback(()=>{
    dispatch(GetProducts())
  },[dispatch])
  useEffect(() =>{
   GetProduct()
  },[GetProduct])
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon style={{color:'#fff'}} name="chevron-back-outline" size={50}/>
        </TouchableOpacity>
      
      
          <Text style={{fontWeight:'bold',fontSize:35,color:'#fff'}}>Ti Ki FAKE</Text>
          
          <Icon style={{color:'#fff'}} name="notifications-outline" size={50}/>
      </View>
      <View style={styles.search}>
          <TextInput placeholder='you can search for a product...' style={{width:width/1.3,height:width/10,
          backgroundColor:'#fff',paddingLeft:10,elevation:5,borderRadius:14}}/>
          <TouchableOpacity onPress={()=> console.log(info)}>
          <Icon name="search-circle-outline" size={50}></Icon>
          </TouchableOpacity>
         
      </View>
      <View style={styles.body}>
      <FlatList 
      data={info.product}
      numColumns={2}
      renderItem={({item})=>
      <TouchableOpacity style={{width: '48%', height:height/2.7,marginLeft:5,elevation:5, backgroundColor:'#fff',marginBottom:5}}
      onPress={()=>navigation.navigate('Product_Detail',{productId:item.id})}
      >
       
        <View style ={{flex: 5,justifyContent: 'center',alignItems: 'center'}}>
        <Image style={{width:'50%', height:'60%'}} source={{uri:item.image}} />
        </View>
        <View style ={{flex: 2,paddingHorizontal:10}}>
          <View style ={{flex:3}}>
            <Text style={{fontWeight:'bold'}}>{item.title}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent: 'space-between',flex:1}}>
            <Text>$ {item.price}</Text>
            <Text style={{paddingRight:10,color:'#e18704'}}>{item.rating.rate} *</Text>
          </View>
        </View>
      </TouchableOpacity>
     }
      />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  body:{
    flex: 7,
   
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#16bad9'
  },
  search:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    
  }
});
