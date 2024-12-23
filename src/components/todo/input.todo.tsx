import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: "violet",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

interface IProps {
  addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");
  const handleAddNewTodo = () => {
    if (!name) {
      Alert.alert("Thông tin không hợp lệ", "Tiêu đề không được để trống", [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel",
        // },
        { text: "OK Con dê", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    addTodo(name);
    setName("");
  };
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.todoInput}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <MineButton title="Add New" onPress={handleAddNewTodo} />
      </View>
    </>
  );
};

export default InputTodo;
