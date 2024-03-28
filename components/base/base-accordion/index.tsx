import React, { ReactNode, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Icon } from "react-native-paper";

export default function BaseAccordion({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  const pressHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: "#AAAAAA",
        marginBottom: 5,
      }}
    >
      <Pressable
        onPress={pressHandler}
        style={{
          flexDirection: "row-reverse",
          alignItems: "baseline",
        }}
      >
        {isActive ? (
          <Icon source="chevron-down" color="#0C359E" size={27} />
        ) : (
          <Icon source="chevron-left" color="#0C359E" size={27} />
        )}
        <Icon source={icon} color="#0C359E" size={27} />
        <Text
          style={{
            color: "#0C359E",
            fontSize: 22,
            fontWeight: "600",
            marginRight: 6,
          }}
        >
          {title}
        </Text>
      </Pressable>
      {isActive && children}
    </View>
  );
}
