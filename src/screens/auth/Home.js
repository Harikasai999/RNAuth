import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from "../../utils/UserContext";
import { login } from "../../utils/login";
import AsyncStorage from "@react-native-community/async-storage";
import ImagePicker from 'react-native-image-crop-picker';
export default function Home(props) {
    const { user, setUser } = useContext(UserContext);
    function onLogout() {
        setUser(null);
        AsyncStorage.removeItem("userID")
    }
    function onChoosingPhoto() {
        Alert.alert(
            "",
            "",
            [
                {
                    text: "Choose from Gallery",
                    onPress: () => openPicker(),
                },
                { text: "Take Photo", onPress: () => openCamera() }
            ],
        );
    }
    function openPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log("hjqgjhg", image);

        });
    }
    function openCamera() {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
        });
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>Home</Text> */}
            {/* <Text style={{ padding: 15, textAlign: 'center' }}>{JSON.stringify(user, null, 2)}</Text> */}
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
                                id: 4,
                                username: "harika",
                                email: "harika@gmail.com"
                            };
                            setUser(data);
                        }}
                    >

                        <Text>Login</Text>
                    </TouchableOpacity>
                )} */}
            <TouchableOpacity
                style={{
                    height: 40, width: 100, backgroundColor: 'lightgreen',
                    alignItems: 'center', justifyContent: 'center',
                    alignSelf: 'center', marginTop: 10
                }}
                onPress={onLogout}
            >
                <Text>logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.push("About")}
                style={{
                    height: 40, width: 100, backgroundColor: 'orange',
                    alignItems: 'center', justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 10
                }}
            >

                <Text>about</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChoosingPhoto()}
                style={{
                    height: 40, width: 150, backgroundColor: 'lightblue',
                    alignItems: 'center', justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 10
                }}
            >

                <Text>Choose Photo</Text>
            </TouchableOpacity>
        </View>
    );
}
