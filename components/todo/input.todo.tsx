import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

const InputTodo = () => {
  const [name, setName] = useState<string>("");
  return (
    <>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.todoInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button title="Add new" onPress={() => alert("Tap me")} />
      </View>
    </>
  );
};

export default InputTodo;
