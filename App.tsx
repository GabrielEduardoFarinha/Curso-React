import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Telas/Login';
import CadastroScreen from './src/Telas/CadastroScreen';
import CadastroDetailsScreen from './src/Telas/CadastroDetailsScreen';
import HealthPlanScreen from './src/Telas/HealthPlanScreen';
import HomeScreen from './src/Telas/HomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  CadastroDetails: undefined;
  HealthPlan: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="CadastroDetails"
          component={CadastroDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HealthPlan"
          component={HealthPlanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
