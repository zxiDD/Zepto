import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Searchbar, Card } from "react-native-paper";

import FoodItemCard from "../../components/FoodItemCard";
import foodItems from "../../components/Items";
import { FlatList } from "react-native-gesture-handler";

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <MaterialIcons name="account-circle" size={50} color="black" />
          <View style={{ marginHorizontal: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 25 }}>Delivery in </Text>
              <Text style={{ fontSize: 26 }}>10 Mins</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>ABC Street, New Delhi, India...</Text>
              <MaterialIcons name="expand-more" size={24} color="black" />
            </View>
          </View>
        </View>
        <Searchbar
          placeholder="Search for"
          onChangeText={() => {}}
          style={{
            height: 50,
            borderRadius: 15,
          }}
          inputStyle={{ alignContent: "center" }}
        />
      </View>
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: "https://static.toiimg.com/thumb/msid-108112736,width-1070,height-580,imgsize-24554,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          }}
          style={{ height: 150, width: "auto", resizeMode: "contain" }}
        />
        <View style={{ alignItems: "center", }}>
          <FlatList
            data={foodItems}
            renderItem={({ item }) => (
              <FoodItemCard title={item.title} imageUrl={item.imageUrl} />
            )}
            numColumns={3}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    justifyContent: "center",
    backgroundColor: "#B5DFEF",
    padding: 10,
  },
  container: {
    flex: 0.8,
  },
});

export default Home;
