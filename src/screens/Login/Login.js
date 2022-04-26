import { View, Image, StyleSheet, Text, TextInput, Button } from "react-native";
import { Dimensions } from "react-native";
import { useState } from "react";
import {login} from "../../services/auth.services";

const { height: heightScreen, width: widthScreen } = Dimensions.get("window");
export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    async function handleLogin() {
        if (username && password) {
            const res = await login({
                email: username,
                password: password
            })
            if(res){
                console.log(res)
            }
        }

    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/avt.png")}
                style={styles.logo}
            />
            <View style={styles.login}>
                <Text
                    style={{
                        marginTop: 72,
                        fontSize: 30,
                        fontWeight: "bold",
                    }}
                >
                    BaeMin
                </Text>
                <TextInput
                    placeholder="Enter your phone number"
                    style={styles.user}
                    value={username}
                    onChangeText={(value) => setUsername(value)}

                />
                <TextInput
                    placeholder="Enter your password"
                    style={styles.user}
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                />
                <View
                    style={{
                        marginTop: 30,
                        width: 0.25 * widthScreen,
                        height: 50,
                    }}
                >
                    <Button
                        title="Login"
                        color={"gray"}
                        onPress={handleLogin}
                    />
                </View>
                <Text>Or login by</Text>
                <View
                    style={{
                        height: 20,
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 20,
                    }}
                >
                    <Image
                        source={require("../../../assets/iphone.png")}
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            backgroundColor: "#fff",
                            alignSelf: "center",
                        }}
                    />
                    <Image
                        source={require("../../../assets/facebook.png")}
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            backgroundColor: "#fff",
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#40DFEF",
        width: widthScreen,
        flex: 1,
    },

    logo: {
        width: widthScreen * 0.45,
        height: widthScreen * 0.45,
        borderRadius: widthScreen * 0.45,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        backgroundColor: "#fff",
        marginTop: heightScreen * 0.15,
        zIndex: 1,
    },
    img: {
        width: widthScreen * 0.45,
        height: widthScreen * 0.45,
        borderRadius: widthScreen * 0.45,
        backgroundColor: "#fff",
    },
    login: {
        backgroundColor: "#fff",
        width: widthScreen,
        height: heightScreen * 0.7,
        alignItems: "center",
        marginTop: heightScreen * 0.3,
    },
    user: {
        marginTop: 20,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 4,
        width: "80%",
        paddingLeft: 20,
        padding: 5,
    },
});
