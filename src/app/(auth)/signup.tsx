import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
});

const SignUpPage = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 600,
                marginVertical: 30,
              }}
            >
              Đăng ký tài khoản
            </Text>
          </View>
          <SharedInput title="Họ tên" />
          <SharedInput title="Email" keyboardType="email-address" />
          <SharedInput title="Password" />
          <View style={{ marginVertical: 10 }}></View>
          <View>
            <ShareButton
              title="Đăng Ký"
              onPress={() => alert("me")}
              textStyle={{
                textTransform: "uppercase",
                color: "#fff",
                paddingVertical: 5,
              }}
              btnStyle={{
                justifyContent: "center",
                borderRadius: 30,
                marginHorizontal: 50,
                paddingVertical: 10,
                backgroundColor: APP_COLOR.ORANGE,
              }}
              pressStyle={{ alignSelf: "stretch" }}
            />
          </View>

          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              Chưa có tài khoản?
            </Text>
            <Link href={"/(auth)/signup"}>
              <Text style={{ color: "black", textDecorationLine: "underline" }}>
                Đăng nhập.
              </Text>
            </Link>
          </View>

          <SocialButton />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default SignUpPage;