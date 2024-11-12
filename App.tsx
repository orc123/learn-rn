import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  //data-type
  //string
  const [name, setName] = useState<string>("hoidanit");
  //number
  const [age, setAge] = useState<number>(30);
  //null, undefined, boolean
  const test = false;
  //object, array
  const [person, setPerson] = useState([6, 9]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{JSON.stringify(person)}</Text>
      </View>
      <Text style={styles.text}>
        Hello World
        <Text style={styles.item}> Dong.orc12</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,
    color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    color: "green",
  },
});
