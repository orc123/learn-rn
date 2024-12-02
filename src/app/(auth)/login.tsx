import ShareButton from "@/components/button/share,button";
import SocialButton from "@/components/button/social.button";
import SharedInput from "@/components/input/shared.input";
import { loginAPI } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { LoginSchema } from "@/utils/validate.schema";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
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
        {/* <View style={styles.container}>
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
        </View> */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log("check values = ", values)}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ margin: 10 }}>
              <Text>Email</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#ccc" }}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
              <View style={{ marginVertical: 10 }}></View>
              <Text>Password</Text>
              <TextInput
                style={{ borderWidth: 1, borderColor: "#ccc" }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}
              <View style={{ marginVertical: 10 }}></View>

              <Button onPress={handleSubmit as any} title="Login" />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default LoginPage;
