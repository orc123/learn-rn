import { Text, View } from "react-native";
import { Link } from "expo-router";

const AppRoot = () => {
  return (
    <View>
      <Text>1Hello world with Expo Router</Text>
      <Link href={"/orc12"}>Go to Orc12</Link>
      <Link href={"/like"}>Go to Like</Link>
    </View>
  );
};
export default AppRoot;
