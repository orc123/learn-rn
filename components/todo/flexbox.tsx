import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  //default: display flex => column
  container: {
    flex: 1,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "red",

    flexDirection: "column", //oy
    justifyContent: "center",
    //alignItems: "center", //ox

    // flexDirection: "row", //ox
    // justifyContent: "center",
    // alignItems: "center", //oy
  },
  item1: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: "violet",
    //height: 250,
    flex: 4,
    width: 60,
  },
  item2: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: "green",
    //height: 300,
    flex: 1,
    width: 30,
  },
  item3: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: "orange",
    //height: 100,
    flex: 1,
    width: 100,
  },
  item4: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: "grey",
  },
});
//height, width <div></div>
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text> Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text> Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text> Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text> Item 4</Text>
      </View>
    </View>
  );
};
export default FlexBox;
