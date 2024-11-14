import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState<string>("a");

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Dong :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ]);

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

      <Button title="Add new" onPress={() => alert("Tap me")} />

      <FlatList
        style={{
          marginTop: 20,
          borderColor: "red",
          borderWidth: 1,
        }}
        data={todoList}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return <Text style={styles.todo}>{item.title}</Text>;
        }}
      />

      {/* <ScrollView
        style={{
          marginTop: 20,
          borderColor: "red",
          borderWidth: 1,
        }}
      >
        {todoList.map((todo) => {
          return (
            <Text key={todo.id} style={styles.todo}>
              {todo.title}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15,
  },
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
    marginTop: 50,
  },
  item: {
    color: "green",
  },
});
