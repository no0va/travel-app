import { TextInput, View } from "react-native";
import { styles } from "./style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export const BaseInput = ({
  placeholder,
  icon,
}: {
  placeholder: string;
  icon: any;
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputBorder}>
        <MaterialCommunityIcons name={icon} style={styles.inputIcon} size={25} />
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
      <AntDesign name="caretright" style={styles.inputArrow} size={13} />
    </View>
  );
};
