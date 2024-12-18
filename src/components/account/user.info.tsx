import SharedInput from "@/components/input/shared.input";
import { useCurrentApp } from "@/context/app.context";
import { getURLBaseBackend } from "@/utils/api";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
  },
});
const UserInfo = () => {
  const { theme, appState } = useCurrentApp();

  const baseImage = `${getURLBaseBackend()}/images/avatar`;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserInfo;
