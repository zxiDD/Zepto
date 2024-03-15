import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const FoodItemCard = ({ title, imageUrl, price }) => {
  return (
    <Card
      mode="elevated"
      style={styles.card}
      contentStyle={{
        width: 100,
        height:100,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <Card.Cover
        source={{ uri: imageUrl }}
        style={{ height: 50, width: "auto", resizeMode: "contain" }}
      />
      <Card.Content>
        <Text style={{fontSize:10}}>{title}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 10,
  },
});

export default FoodItemCard;
