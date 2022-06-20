
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './component/Home/HomeView';
import Login from './component/Login'
import Product_Detail from './component/Home/Product_Detail';
import Register from './component/Register';
import { Provider } from 'react-redux'
import {Store} from './component/redux/store';
import Cart  from './component/Cart';
const tab = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer >
      <tab.Navigator  screenOptions={{
        headerShown: false, 
      }}>
          <tab.Screen name="Login" component={Login}/>
          <tab.Screen name= "Register" component={Register}/>
        <tab.Screen  name ="HomeView" component={HomeView} />
        <tab.Screen name="Product_Detail" component={Product_Detail}/>
        <tab.Screen name="cart" component={Cart}/>
      </tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
