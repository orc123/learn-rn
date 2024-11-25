import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { APP_COLOR } from "@/utils/constant";
import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
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

const SignUpPage = () => {
  const URL_BACKEND = process.env.EXPO_PUBLIC_API_URL;

  const [name, setName] = useState<string>("a");
  const [email, setEmail] = useState<string>("b");
  const [password, setPassword] = useState<string>("c");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(URL_BACKEND!);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

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
              onPress={() => console.log(name, email, password)}
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
