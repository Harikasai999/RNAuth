import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { UserContext } from "../../utils/UserContext";
import { login } from "../../utils/login";
import AsyncStorage from '@react-native-community/async-storage';
export default function Login(props) {
    const { user, setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    function onLogin() {
        if (username && password) {
            const data = {
                id: "4",
                username: username,
                password: password
            };
            setUser(data);
            AsyncStorage.setItem(
                'userID',
                JSON.stringify(data)
            );
        } else if (!username) {
            alert("Please enter name")
        } else {
            alert("Please enter password")
        }


    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text style={{ padding: 15, textAlign: 'center' }}>{JSON.stringify(user, null, 2)}</Text> */}
            <View>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={{ height: 45, backgroundColor: '#CFE2E1', paddingLeft: 10, marginTop: 20 }}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={{ height: 45, backgroundColor: '#CFE2E1', paddingLeft: 10, marginTop: 20 }}
                />
                <TouchableOpacity
                    style={{
                        height: 40, width: 100,
                        backgroundColor: 'yellow',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20
                    }}
                    onPress={onLogin}
                >

                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
            <Image source={{ uri: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }} style={{ height: 100, width: 100 }} />
            {/* {user ? (
                <TouchableOpacity
                    style={{
                        height: 40, width: 100, backgroundColor: 'lightgreen',
                        alignItems: 'center', justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                    onPress={() => {
                        // call logout
                        setUser(null);
                    }}
                >
                    <Text>logout</Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity
                        style={{
                            height: 40, width: 100, backgroundColor: 'yellow',
                            alignItems: 'center', justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                        onPress={() => {
                            const data = {
                                id: "4",
                                username: "harika",
                                email: "harika@gmail.com"
                            };
                            setUser(data);
                            AsyncStorage.setItem(
                                'userID',
                                data.id
                            );
                        }}
                    >

                        <Text>Login</Text>
                    </TouchableOpacity>
                )} */}

        </View>
    );
}
