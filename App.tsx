import { useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function HomeScreen(props: any) {
  const navigation = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go  user id = 1"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go user id = 2"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}

function DetailsScreen() {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>User id = ???</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go back Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
