import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 15 }}>Trending Near </Text>
          <Text style={{ fontSize: 15, color: "#982ECC" }}>You</Text>
        </View>
        <FlatList
          data={foodItems}
          renderItem={(item) => (
            <FoodItemCard title={item.title} imageUrl={item.imageUrl} />
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
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
