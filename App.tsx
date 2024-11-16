import { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputTodo from "./components/todo/input.todo";
import ListTodo from "./components/todo/list.todo";
import FlexBox from "./components/todo/flexbox";

export default function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {
    const todo: ITodo = {
      id: randomInteger(1, 1000000),
      title: title,
    };
    setTodoList([...todoList, todo]);
  };

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter((x) => x.id != id);
    setTodoList(newTodo);
  };

  return (
    // <FlexBox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputTodo addTodo={addTodo} />
        <ListTodo todoList={todoList} deleteTodo={deleteTodo} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,
    color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
