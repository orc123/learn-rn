import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { loginAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-root-toast";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10,
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await loginAPI(email, password);
      setLoading(false);
      if (res.data) {
        router.replace("/(tabs)");
      } else {
        Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1,
        });

        if (res.statusCode === 400) {
          router.replace({
            pathname: "/(auth)/verify",
            params: { email: email, isLogin: 1 },
          });
        }
      }
    } catch (error) {
      console.log(">>> check error: ", error);
    }
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 26, fontWeight: 600, marginVertical: 30 }}>
            Đăng nhập
          </Text>
          <SharedInput
            title="Email"
            keyboardType="email-address"
            value={email}
            setValue={setEmail}
          />
          <SharedInput
            title="Mật khẩu"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />

          <View style={{ marginVertical: 10 }}></View>
          <View>
            <ShareButton
              title="Đăng Nhập"
              onPress={() => handleLogin()}
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
              loading={loading}
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
                Đăng ký.
              </Text>
            </Link>
          </View>

          <SocialButton title="Đăng nhập với" />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LoginPage;
