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

interface IProps {
  addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
  const { addTodo } = props;
  const [name, setName] = useState<string>("");
  const handleAddNewTodo = () => {
    addTodo(name);
  };
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
        <Button title="Add new" onPress={handleAddNewTodo} />
      </View>
    </>
  );
};

export default InputTodo;
