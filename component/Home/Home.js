

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './HomeView';
import Search from '../Search';
import User from '../User';
import Cart from '../Cart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import { Text } from 'react-native';
const tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer independent={true}>
      <tab.Navigator    
       screenOptions={{
        headerShown: false,
        tabBarLabel:() => {return null},
       
      }}>
        <tab.Screen  name ="Home" component ={Home} options={{tabBarIcon: ()=>(<MaterialCommunityIcons name ="home" size={30}/>)}}/>
        <tab.Screen name ="Search" component ={Search} options={{tabBarIcon: ()=>(<Icon name ="search" size={30}/>)}}/>
        <tab.Screen name ="User" component ={User} options={{tabBarIcon: ()=>(
        <IconBadge 
        
        MainElement={<Icon name ="cart" size={30}/>}
        BadgeElement={
          <Text>1</Text>
        }
        IconBadgeStyle={
          {
            width:16,
            height:16,
            backgroundColor: '#e3b617',
          }
        }
        />
        
        )}}/>
        <tab.Screen name = "Cart" component ={Cart} options={{tabBarIcon: ()=>(<Icon name ="person" size={30}/>)}}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

