import BaseAccordion from "@/components/base/base-accordion";
import { useProfileContext } from "@/context/profile-context";
import React from "react";
import { Image, Text, View } from "react-native";

export default function MyTravels() {
  const { userDetails } = useProfileContext();
  if (userDetails.myTravels) {
    return (
      <BaseAccordion icon="history" title="سفر های من">
        <View>
          <Text>my travels</Text>
        </View>
      </BaseAccordion>
    );
  } else {
    return (
      <BaseAccordion icon="history" title="سفر های من">
        <View
          style={{
            padding: 70,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderColor: "#aaa",
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 18,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
        >
          <Image source={require("@/assets/images/Group 552.png")} />
          <Text
            style={{
              textAlign: "center",
              width: 170,
              fontSize: 16,
              color: "#aaa",
              marginTop: 10,
            }}
          >
            درحال حاضر شما هیچ سفری انجام نداده اید
          </Text>
        </View>
      </BaseAccordion>
    );
  }
}
