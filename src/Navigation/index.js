import React, { useState, useMemo, useEffect } from "react";
import { Button, View } from 'react-native';
import Home from '../screens/auth/Home';
import About from '../screens/auth/About';
import Login from '../screens/auth/Login';
import ImagesScreen from '../screens/auth/ImagesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserContext } from "../utils/UserContext";
import AsyncStorage from "@react-native-community/async-storage";
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerContent({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                // onPress={() => navigation.navigate('Notifications')}
                title="DrawerContent"
            />
        </View>
    );
}
function MyStack() {
    return (
        <Stack.Navigator initialRouteName="ImagesScreen">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="ImagesScreen" component={ImagesScreen} />
        </Stack.Navigator>
    );
}
function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="MyStack" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="MyStack" component={MyStack} />
        </Drawer.Navigator>
    );
}

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
export default function Navigation() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    useEffect(() => {
        console.log("iinnnntttt")
        _retrieveData()
    }, [])
    _retrieveData = async () => {
        try {
            // AsyncStorage.removeItem('userID');
            const value = await AsyncStorage.getItem('userID');
            if (value !== null) {
                // We have data!!
                // console.log(value);
                setUser(value)
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    return (
        <NavigationContainer>
            <UserContext.Provider value={value}>

                {user ? (

                    <DrawerStack />

                ) : (
                        <AuthStack />
                    )}



            </UserContext.Provider>
        </NavigationContainer>
    );
}
