import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("a");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          autoCapitalize="none"
          //keyboardType="numeric"
          //maxLength={6}
          //multiline={true}
          autoCorrect={false}
          style={{ borderColor: "violet", borderWidth: 1, padding: 10 }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.text}>{name}</Text>
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
