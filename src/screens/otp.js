import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import CountDown from "react-native-countdown-component";
import { useRoute } from "@react-navigation/native";

const Otp = ({ navigation }) => {
  const route = useRoute();
  const phoneNo = route.params?.phoneNo;
  const otpArr = Array.from(new Array(Math.floor(6)));
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/zepto_otp.jpg")}
        style={styles.background}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/back.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.text}>OTP</Text>
        <Text style={styles.text}>Verification</Text>
        <Text style={[styles.text, { fontSize: 18, margin: 20 }]}>
          OTP has been sent to +91 {phoneNo}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {otpArr.map((item, index) => (
            <TextInput
              key={index}
              mode="outlined"
              outlineStyle={{ borderRadius: 40 }}
              onChangeText={() => {}}
              style={styles.otpInput}
              keyboardType="phone-pad"
              maxLength={1}
            />
          ))}
        </View>
        <View style={{ marginTop: 20 }}>
          <CountDown
            until={60}
            digitStyle={{ backgroundColor: "transparent" }}
            digitTxtStyle={{ color: "white" }}
            timeLabelStyle={{ color: "white" }}
            separatorStyle={{ color: "white" }}
            showSeparator
            timeToShow={["M", "S"]}
            timeLabels={{ m: null, s: null }}
            size={20}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", margin: 10 }}>Didn't get it?</Text>
          <Text
            style={{
              color: "white",
              margin: 10,
              textDecorationLine: "underline",
            }}
          >
            Send OTP(SMS)
          </Text>
          <Pressable
            onPress={() =>
              navigation.navigate("Bottom-Tabs")
            }
          >
            <Text style={{ color: "red" }}>Submit</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: 30,
    marginLeft: 10,
    color: "white",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    padding: 15,
  },
  backIcon: {
    marginTop: 50,
    marginBottom: 20,
    height: 40,
    width: 40,
  },
  otpInput: {
    height: 40,
    width: 40,
    marginTop: 40,
    marginHorizontal: 5,
    justifyContent: "center",
  },
});

export default Otp;
