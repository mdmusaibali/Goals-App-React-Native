import { StyleSheet, Text, View, Pressable, Image } from "react-native";

function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(null, itemData.item.id)}
      >
        <Image
          source={require("../assets/images/dustbin.png")}
          style={styles.dustBinImage}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  goalText: {
    color: "white",
    fontSize: 16,
    width: "90%",
  },
  dustBinImage: {
    height: 30,
    width: 30,
  },
});
export default GoalItem;
