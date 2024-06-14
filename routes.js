import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import RotaInterna from './pages/rotaInterna';


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
            options={{
                tabBarShowLabel: false,
                headerShown: false, }}
               
                name="index"
                component={Bem_Vindo}
                
            />
            <Stack.Screen
             options={{
                tabBarShowLabel: false,
                headerShown: false, }}
                name="rotaInterna"
                component={RotaInterna}
            />
        </Stack.Navigator>

    )
}