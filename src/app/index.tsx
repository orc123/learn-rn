import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";

const AppRoot = () => {
  const handleLogin = () => {
    alert("login");
    //router.navigate("/login");
    router.navigate("/user");
  };
  return (
    <View>
      <Text>1Hello world with Expo Router</Text>
      <Link href={"/orc12"}>Go to Orc12</Link>
      <Link href={"/like/like.detail"} asChild>
        <Button title="Go to like Detail" />
      </Link>
      <View style={{ margin: 20 }}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};
export default AppRoot;
