import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { useProfileContext } from "@/context/profile-context";

export default function HeaderProfile({ userData }: any) {
  const {userDetails} = useProfileContext();
  return (
    <View style={[styles.card, styles.elevation]}>
      <View style={styles.title}>
        <Text style={styles.username}>
          {userDetails.name + " " + userDetails.lastName}
        </Text>
        <Text style={styles.phoneNumber}>09309427662</Text>
      </View>
      <Image source={require("@/assets/images/Person.png")} />
    </View>
  );
}
