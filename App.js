import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from "./components/SettingsScreen.js";
import BusinessCard from "./components/BusinessCard.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        // opret navigation.
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    // denne kode bliver kørt for hvert view. Derfor skal logikken være forskellige for hvert af de to view
                    if (route.name === 'Business Card') {
                        // sæt ikonet til at være en QR-kode. De andre ikoner kan findes på material community hjemmesiden
                        return <MaterialCommunityIcons name="qrcode-scan" size={size} color={color}/>;
                    } else if (route.name === 'Settings') {
                        return <Ionicons name="ios-settings-outline" size={size} color={color}/>
                    }
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Business Card" component={BusinessCard}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}