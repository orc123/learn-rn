import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
  const handleLogin = () => {};
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
              title="Đăng NHập"
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
