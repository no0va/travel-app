import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { FormikTouched, useFormikContext } from "formik";
import { useState } from "react";

export const BaseInput = ({
  placeholder,
  icon,
  value,
  name,
  type,
}: {
  placeholder: string;
  icon: any;
  value: string;
  name: string;
  type: "text" | "email" | "password";
}) => {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();
  const invalidInput =
    errors[name as keyof FormikTouched<unknown>] &&
    touched[name as keyof FormikTouched<unknown>];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.baseInputStyle}>
      <View style={styles.inputContainer}>
        <View
          style={[styles.inputBorder, invalidInput && styles.inputBorderError]}
        >
          <MaterialCommunityIcons
            name={icon}
            style={styles.inputIcon}
            size={25}
          />
          {type === "password" ? (
            <>
              <TextInput
                value={value}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={handleChange(name)}
                secureTextEntry={!showPassword}
                onBlur={handleBlur(name)}
              />
              <MaterialCommunityIcons
                name={showPassword ? "eye-off" : "eye"}
                size={19}
                color="#aaa"
                style={{
                  marginLeft: 10,
                }}
                onPress={toggleShowPassword}
              />
            </>
          ) : (
            <TextInput
              value={value}
              style={styles.input}
              placeholder={placeholder}
              onChangeText={handleChange(name)}
              secureTextEntry={false}
              onBlur={handleBlur(name)}
            />
          )}
        </View>
        <AntDesign
          name="caretright"
          style={[styles.inputArrow, invalidInput && styles.inputArrowError]}
          size={13}
        />
      </View>
      {invalidInput && (
        <Text style={styles.error}>
          {errors[name as keyof FormikTouched<unknown>]}
        </Text>
      )}
    </View>
  );
};
