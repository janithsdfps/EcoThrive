import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import LogingScreen from './src/screens/LogingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StartScreen from './src/screens/StartScreen';
import SudjectionScreen from './src/screens/SudgectionScreen';
import HireScreen from './src/screens/HireServiceScreen';
import sugResultScreen from './src/screens/sugResultScreen';
import PrivacyScreen from './src/screens/PrivacyScreen';
import PlantTracking from './src/screens/PlantTracking';
import OnlineConsulting from './src/screens/OnlineConsulting'; 
import HireExpert from './src/screens/HireExpert';
import { Text } from 'react-native';



enableScreens(true);

// create a component
const App = () => {
  

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Startup" component={StartScreen}  options={{animation:'default'}}/>
        <Stack.Screen name="Tab" component={BottomTabNavigator}  options={{animation:'simple_push'}}/>
        <Stack.Screen name="Login" component={LogingScreen} options={{animation:'simple_push'}} />
        <Stack.Screen name="Sighup" component={SignUpScreen}  options={{animation:'simple_push'}}/>
        <Stack.Screen name="suggestion" component={SudjectionScreen} options={{animation:'simple_push'}}/>
        <Stack.Screen name="Hire" component={HireScreen} options={{animation:'simple_push'}}/>
        <Stack.Screen name="SugResult" component={sugResultScreen} options={{animation:'simple_push'}}/>
        <Stack.Screen name="Privacy" component={PrivacyScreen} options={{animation:'simple_push'}}/>
        <Stack.Screen name="PlantTracking" component={PlantTracking} options={{animation:'simple_push'}}/>
        <Stack.Screen name="OnlineConsulting" component={OnlineConsulting} options={{animation:'simple_push'}}/>
        <Stack.Screen name="HireExpert" component={HireExpert} options={{animation:'simple_push'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//make this component available to the app
export default App;
