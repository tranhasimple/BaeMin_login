import { View, Image, StyleSheet, Text, TextInput, Button } from "react-native";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";

const { height: heightScreen, width: widthScreen } = Dimensions.get("window");
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.login}>
        <Text
          style={{
            marginTop: widthScreen * 0.15,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          BaeMin
        </Text>
        <TextInput placeholder="Enter your phone number" style={styles.user} />
        <TextInput placeholder="Enter your password" style={styles.user} />
        <View style={{ marginTop: 30, width: 0.25 * widthScreen, height: 50 }}>
          <Button title="Login" color={"gray"} />
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
            source={require("../assets/iphone.png")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: "#fff",
              alignSelf: "center",
            }}
          />
          <Image
            source={require("../assets/facebook.png")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
      <View style={styles.logo}>
        <Image source={require("../assets/avt.png")} style={styles.img}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40DFEF",
    width: "100%",
    flex: 1,
    // flexDirection: "column",
    // alignItems: "flex-end",
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    marginTop: heightScreen * 0.35,
  },
  img: {
    width: widthScreen * 0.45,
    height: widthScreen * 0.45,
    borderRadius: widthScreen * 0.45,
    backgroundColor: "#fff",
  },
  login: {
    flex: 1,
    borderTopLeftRadius: 140,
    borderTopEndRadius: 140,
    backgroundColor: "#fff",
    width: widthScreen,
    height: heightScreen * 0.5,
    alignItems: "center",
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
