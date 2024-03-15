import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ImageBackground, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

const Login = ({navigation}) => {
  const [phone, setPhone] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/zepto_login.jpg")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/Zepto Logo Vector.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Groceries</Text>
        <Text style={styles.text}>delivered in</Text>
        <Text style={styles.text}>10 minutes</Text>
        <TextInput
          mode="outlined"
          outlineStyle={{ borderRadius: 40 }}
          placeholder="Enter Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.phoneInput}
          left={<TextInput.Affix text="+91" />}
          keyboardType="phone-pad"
        />

        <LinearGradient
          colors={["#BC246D", "#BF4F5D"]}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 0.0, x: 1.0 }}
          style={{ borderRadius: 40, marginTop: 15, height: 50 }}
        >
          <Button mode="contained" onPress={() => {navigation.navigate('OTP', {phoneNo: phone})}} style={styles.button}>
            Continue
          </Button>
        </LinearGradient>
        <View style={styles.footer}>
            <Text style={styles.footerText}>By continuing, you agree to our</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={[styles.footerText, {color:'red', marginRight:5}]}>Terms of Use</Text>
            <Text style={[styles.footerText, {marginRight:5}]}>&</Text>
            <Text style={[styles.footerText, {color:'red'}]}>Privacy Policy</Text>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
  },
  logo: {
    height: 75,
    width: 170,
    marginTop: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  phoneInput: {
    height: 50,
    marginTop: 40,
    justifyContent: "center",
  },
  button: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  background: {
    position:'absolute',
    top:0,
    left:0,
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    padding:15
  },
  footer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:40
  },
  footerText:{
    color:'white',
    fontSize:15
  }
});

export default Login;
