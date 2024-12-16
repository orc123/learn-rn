import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Like = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Like component</Text>
      <Button
        title="Like detail"
        onPress={() => navigation.navigate("LikeDetail")}
      />
    </View>
  );
};
export default Like;
