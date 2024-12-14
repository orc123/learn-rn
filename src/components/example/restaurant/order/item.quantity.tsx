import { currencyFormatter, getURLBaseBackend } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Image, Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCurrentApp } from "@/context/app.context";

interface IProps {
  menuItem: IMenuItem;
  restaurant: IRestaurant | null;
}

const ItemQuantity = (props: IProps) => {
  const { menuItem, restaurant } = props;
  const { cart, setCart } = useCurrentApp();

  const handlePressItem = (item: IMenuItem, action: "MINUS" | "PLUS") => {
    if (restaurant?._id) {
      const total = action === "MINUS" ? -1 : 1;
      if (!cart[restaurant?._id]) {
        // Chưa tồn tại cửa hàng => khởi tạo cửa hàng
        cart[restaurant._id] = {
          sum: 0,
          quantity: 0,
          items: {},
        };
      }
      // xử lý
      cart[restaurant._id].sum =
        cart[restaurant._id].sum + total * item.basePrice;
      cart[restaurant._id].quantity = cart[restaurant._id].quantity + 1;

      // Check sản phẩm đã từng thêm vào chưa
      if (!cart[restaurant._id].items[item._id]) {
        cart[restaurant._id].items[item._id] = {
          data: menuItem,
          quantity: 0,
        };
      }
      cart[restaurant._id].items[item._id] = {
        data: menuItem,
        quantity: cart[restaurant._id].items[item._id].quantity + total,
      };
    }
    console.log(cart);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        gap: 10,
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View>
        <Image
          style={{ height: 100, width: 100 }}
          source={{
            uri: `${getURLBaseBackend()}/images/menu-item/${menuItem?.image}`,
          }}
        />
      </View>
      <View style={{ flex: 1, gap: 10 }}>
        <View>
          <Text>{menuItem.title}</Text>
        </View>
        <View>
          <Text>{menuItem.description}</Text>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={{ color: APP_COLOR.ORANGE }}>
            {currencyFormatter(menuItem.basePrice)}
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 3,
            }}
          >
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed === true ? 0.5 : 1,
                alignSelf: "flex-start",
              })}
              onPress={() => handlePressItem(menuItem, "MINUS")}
            >
              <AntDesign
                name="minussquareo"
                size={24}
                color={APP_COLOR.ORANGE}
              />
            </Pressable>
            <Text
              style={{
                minWidth: 25,
                textAlign: "center",
              }}
            >
              10
            </Text>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed === true ? 0.5 : 1,
                alignSelf: "flex-start",
              })}
              onPress={() => handlePressItem(menuItem, "PLUS")}
            >
              <AntDesign name="plussquare" size={24} color={APP_COLOR.ORANGE} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemQuantity;
