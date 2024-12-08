import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Platform,
} from "react-native";
import demo from "@/assets/demo.jpg";
import { APP_COLOR } from "@/utils/constant";
import { useEffect, useState } from "react";
import { getTopRestaurant } from "@/utils/api";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sale: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: APP_COLOR.ORANGE,
    padding: 3,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
});

interface IProps {
  name: string;
  description: string;
  refAPI: string;
}

const CollectionHome = (props: IProps) => {
  const { name, description, refAPI } = props;
  const [restaurants, setRRestaurants] = useState<ITopRestaurant[]>([]);
  useEffect(() => {
    fetchData();
  }, [refAPI]);
  const fetchData = async () => {
    const res = await getTopRestaurant(refAPI);
    if (res.data) {
      setRRestaurants(res.data);
    } else {
      //
    }
  };
  const backend =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_ANDROID_API_URL
      : process.env.EXPO_PUBLIC_IOS_API_URL;
  return (
    <>
      <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
      <View style={styles.container}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text
            style={{
              color: APP_COLOR.ORANGE,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {name}
          </Text>
          <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "#5a5a5a" }}>{description}</Text>
        </View>
        <FlatList
          data={restaurants}
          horizontal
          contentContainerStyle={{ gap: 5 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: "#efefef" }}>
                <Image
                  style={{ height: 130, width: 130 }}
                  source={{ uri: `${backend}/images/restaurant/${item.image}` }}
                />
                <View style={{ padding: 5 }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontWeight: "600", maxWidth: 130 }}
                  >
                    {item.name}
                  </Text>
                  <View>
                    <View style={styles.sale}>
                      <Text style={{ color: APP_COLOR.ORANGE }}>
                        Flash Sale
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default CollectionHome;
