import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text> Welcome to HomePage</Text>
      <Link href={"/product"}>Go to Product</Link>
      <Link href={"/login"}>Go to login</Link>
    </View>
  );
};
export default HomePage;
