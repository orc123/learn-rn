import { useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
          onPress={() =>
            navigation.navigate("Details", {
              userId: 1,
              name: "Dong",
            })
          }
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="Go user id = 2"
          onPress={() =>
            navigation.navigate("Details", {
              userId: 2,
              name: "AAAA",
            })
          }
        />
      </View>
    </View>
  );
}

function DetailsScreen(props: any) {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>User id = {route?.params?.userId}</Text>
      <View style={{ marginVertical: 10 }}>
        <Button title="Go back Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={(props: any) => ({
            headerTitle: `Xem chi tiết ${props.route?.params?.userId ?? ""}`,
          })}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Details">
        <Drawer.Screen
          options={{ drawerLabel: "Trang chủ", headerTitle: "Trang chủ" }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
