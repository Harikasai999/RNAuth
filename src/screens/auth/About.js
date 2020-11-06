import React, { useContext } from "react";
import { View, Text, TouchableOpacity, } from 'react-native';
import { UserContext } from "../../utils/UserContext";
import { login } from "../../utils/login";
export default function About() {
    const { user, setUser } = useContext(UserContext);

    return (
        <View style={{ flex: 1 }}>
            {/* <Text>About</Text> */}
            {/* <Text style={{ padding: 15 }}>{JSON.stringify(user, null, 2)}</Text> */}
            {user ? (
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
                        onPress={async () => {
                            const user = await login();
                            setUser(user);
                        }}
                    >

                        <Text>Login</Text>
                    </TouchableOpacity>
                )}
        </View>
    );
}