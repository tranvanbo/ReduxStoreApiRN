import React, { Component,useEffect,useState } from 'react';
import { View,Text,StyleSheet,FlatList,Dimensions,TouchableOpacity ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector,useDispatch } from 'react-redux';
import {DeleteItemCart,GetNotices,AddQuantity,SubQuantity} from './redux/action'
const {height,width} =Dimensions.get('window')
const Cart =({navigation})=>{
    const info = useSelector((state) => state.userReducer)
    const [total,setTotal] = useState(0)
    const dispatch= useDispatch()
    const DeleteItem =(id)=>{
        dispatch(DeleteItemCart(id))
        dispatch(GetNotices())
    }
    const TotalPrice =()=>{
        let sum = 0;
        info.cart.map((cart)=>{
            sum+=cart.price*cart.quantity
        })
        setTotal(sum.toFixed(1))
    }
    useEffect(()=>{
        TotalPrice()
    },[info.cart])
    const MyCart =({item})=>{
        return (
            <View style={styles.ProductList}>
                <View style={styles.containImage}>
                <Image style={styles.ProductImage} source={{uri:item.image}} />
                </View>
                
                <View style={styles.containContent} >
                <Text style={{fontSize:20}}>{item.title}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                    <TouchableOpacity 
                    onPress={()=>dispatch(AddQuantity(item.id))}
                    style={{height:30,width:30,justifyContent:'center',alignItems: 'center',backgroundColor:'red',borderRadius:12}}>
                        <Text style={{fontSize:20,color:'white'}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>{item.quantity}</Text>
                    <TouchableOpacity
                     onPress={()=>dispatch(SubQuantity(item.id))}
                     style={{height:30,width:30,justifyContent:'center',alignItems: 'center',backgroundColor:'red',borderRadius:12}}>
                    <Text style={{fontSize:20,color:'white'}}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>${(item.price*item.quantity).toFixed(1)}</Text>
                </View>
                <View style={styles.deleteItem}>
                        <TouchableOpacity onPress={()=>DeleteItem(item.id)}>
                        <Icon name="trash" size={50}></Icon>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon style={{color:'#fff'}} name="chevron-back-outline" size={50}/>
                </TouchableOpacity>
           
            <Text style={{fontSize:35,fontWeight:'bold',color:'#fff'}}>My Cart</Text>
            </View>
            <View style={styles.content}>
                <FlatList 
                    data={info.cart}
                    renderItem={MyCart}
                    // keyExtractor={(item) => item}
                />
            </View>
            <View style={styles.footer}>
                 <Text style={{fontSize:25,fontWeight:'bold',marginBottom:5}}>Total :{total}$</Text>
           
                <TouchableOpacity style={styles.Pay} onPress={() =>console.log(info.cart)}>
                    <Text style={{color:'#fff', fontSize:26,fontWeight:'bold'}}>Check out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Cart;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#16bad9',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {  
        flex: 7,
        backgroundColor: '#fff',
    },
    footer: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16bad9',
        borderTopStartRadius:30,
      
        borderTopEndRadius:30,
    },
    ProductList:{
        height:width/2.7,
        flexDirection: 'row',
        flex: 1,
        marginHorizontal:10,
        marginBottom:5,
        borderBottomWidth:0.5,
    },
    ProductImage:{
        height:'90%', 
        width:'60%'
    },
    Pay:{
        height:50,
        width:'60%', 
        backgroundColor: 'blue',
        borderRadius:12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containImage:{
       flex: 2,
       justifyContent: 'center',
       alignItems: 'center',
    },
    containContent: {
        flex:3,
        justifyContent: 'center',
    },
    deleteItem: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})