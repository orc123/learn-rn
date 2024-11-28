import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { registerAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
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

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSingUp = async () => {
    try {
      const res = await registerAPI(email, password, name);

      if (res.data) {
        router.navigate("/(auth)/verify");
      } else {
        Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.ORANGE,
          opacity: 1,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <SharedInput title="Họ tên" value={name} setValue={setName} />
          <SharedInput
            title="Email"
            keyboardType="email-address"
            value={email}
            setValue={setEmail}
          />
          <SharedInput
            title="Password"
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
          <View style={{ marginVertical: 10 }}></View>
          <View>
            <ShareButton
              title="Đăng Ký"
              onPress={() => handleSingUp()}
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
