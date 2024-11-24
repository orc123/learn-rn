import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  inputGroup: {
    padding: 5,
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

interface IProps {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
}

const SharedInput = (props: IProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { title, keyboardType } = props;

  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.text}> {title}</Text>}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={[
          styles.input,
          { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY },
        ]}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default SharedInput;
