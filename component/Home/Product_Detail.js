import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import axios  from 'axios';
import  { useEffect,useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';
import { GetCart,GetNotices } from '../redux/action';
const Product_Detail =({route,navigation})=>{
    const {productId} =route.params;
    const [detail,setDetails] = useState({})

    const dispatch =useDispatch()
    const info = useSelector((state) => state.userReducer)
    useEffect(()=>{
        Api()
        
    },[navigation])
    const Api=async()=>{
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(function(response){
            setDetails(response.data)
            
        })
    }
    const Addcart =()=>{
        dispatch(GetCart(productId))
        dispatch(GetNotices())
    }
    return (
        <View style={styles.container}>
           <View style={styles.header}>            
                <View style={{flex: 1,flexDirection:'row',alignItems: 'center',justifyContent:'space-between'}}>
                <TouchableOpacity style={styles.IconBack}
                onPress={()=>navigation.goBack()}>
                    <Icon name="chevron-back" size={30}/>                
                </TouchableOpacity>
                <TouchableOpacity style={styles.IconCart} 
                onPress={()=>navigation.navigate('cart')}>
                <Icon  name ="cart-outline" size={30} containerStyle={{position: 'relative'}}/>
                {info.notice >0 ?  
                <View style={{position: 'absolute', right: 1,
                      bottom: 1,height:18,width:18,backgroundColor:'#f0a228',borderRadius:44,justifyContent: 'center',alignItems: 'center'}}>
                    <Text>{info.notice}</Text>
                 </View> : null}
               
                </TouchableOpacity>

                </View>
                <View style={styles.ImageProduct}>
                <Image style={{width:'70%', height:'100%'}}  source={{uri:detail.image}}/>  
                </View>
                  
           </View>
           <View style={styles.content}>
                <View style={styles.title}>
                    <Text style={{fontSize:26,fontWeight:'bold'}}>{detail.title}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={{fontSize:20,opacity:0.8}}>{detail.description}</Text>
                </View>
                <View style={styles.price}>
                        <Text style={{fontSize:22}}>${detail.price}</Text>
                        {/* <Text>{detail.rating.rate} *</Text> */}
                </View>
                <TouchableOpacity onPress={Addcart} style={styles.btnCart}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>ADD TO CART</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}
export default Product_Detail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 5,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    content: {
        flex: 4,
        alignItems: 'center',
        
    },
    IconBack: {
            height:40,
            width:40,
            backgroundColor: '#fff',
            elevation:5, 
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10,
        
           
    },
    ImageProduct: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconCart: {
        height:40,
        width:40,
        backgroundColor: '#fff',
        elevation:5, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        marginRight:10,
        
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        flex:3,
        paddingHorizontal:10,
        justifyContent: 'center',
       
    },
    price:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
       
    },
    btnCart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        width:300,
        backgroundColor:'blue',
        borderRadius:15,
        marginBottom:10
    }
})