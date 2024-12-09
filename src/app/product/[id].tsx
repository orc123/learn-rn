import RMain from "@/components/example/restaurant/main";
import { getRestaurantAPI } from "@/utils/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [restaurant, setRestaurants] = useState<IRestaurant | null>(null);

  useEffect(() => {
    fetchRestaurant();
  }, [id]);

  const fetchRestaurant = async () => {
    const res = await getRestaurantAPI(id as string);
    if (res.data) {
      setRestaurants(res.data);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <RMain restaurant={restaurant} />
    </View>
  );
};

export default ProductPage;
