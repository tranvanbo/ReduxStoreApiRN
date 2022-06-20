
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../Home/HomeView';
import Login from '../Login'
import Product_Detail from '../Home/Product_Detail'

const tab = createNativeStackNavigator();
export default function LoginNavigation() {

  return (
    <NavigationContainer independent={true}>
      <tab.Navigator  screenOptions={{
        headerShown: false, 
      }}>
          <tab.Screen name="Login" component={Login}/>
        <tab.Screen  name ="HomeView" component={HomeView} />
        <tab.Screen name="Product_Detail" component={Product_Detail}/>
        
      </tab.Navigator>
    </NavigationContainer>
  );
}
