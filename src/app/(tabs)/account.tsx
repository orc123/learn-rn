import SharedInput from "@/components/input/shared.input";
import { useCurrentApp } from "@/context/app.context";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
  },
});
const AccountPage = () => {
  const { theme, appState } = useCurrentApp();

  const backend =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_ANDROID_API_URL
      : process.env.EXPO_PUBLIC_IOS_API_URL;

  const baseImage = `${backend}/images/avatar`;
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", gap: 5 }}>
        <Image
          style={{ height: 150, width: 150 }}
          source={{ uri: `${baseImage}/${appState?.user.avatar}` }}
        />
        <Text>{appState?.user.name}</Text>
      </View>
      <View style={{ marginTop: 20, gap: 20 }}>
        <SharedInput title="Họ tên" value={appState?.user.name} />
        <SharedInput
          title="Email"
          keyboardType="email-address"
          value={appState?.user.email}
        />

        <SharedInput title="Số điện thoại" value={appState?.user.phone} />
      </View>
    </View>
  );
};

export default AccountPage;
