import { Image, Pressable, Text, TextInput, View } from "react-native";
import UserAcount from "../user-account";

export const LoginPage = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Image
          source={require("@/assets/images/login.png")}
          style={{
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          padding: 16,
          flex: 1,
        }}
      >
        <View
          style={{
            paddingRight: 25,
          }}
        >
          <Text
            style={{
              fontSize: 34,
              fontWeight: "700",
              lineHeight: 53,
            }}
          >
            ورود
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginTop: 15,
              fontWeight: "400",
              color: "rgba(153, 153, 153, 1)",
            }}
          >
            لطفا برای ادامه وارد شوید.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              padding: 6,
              marginTop: 60,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 48,
              width: "100%",
            }}
          >
            <TextInput
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                direction: "rtl",
                fontFamily: "iran-sans",
                width: "100%",
              }}
              placeholder="نام کاربری خود را وارد کنید"
            />
            <TextInput
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                direction: "rtl",
                fontFamily: "iran-sans",
              }}
              placeholder="نام کاربری خود را وارد کنید"
            />
            <Pressable
              style={{
                backgroundColor: "rgba(164, 235, 243, 1)",
                width: 128,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 48,
                borderRadius: 48,
              }}
            >
              <Text
                style={{
                  color: "rgba(12, 53, 158, 1)",
                  fontWeight: "700",
                  fontSize: 24,
                }}
              >
                ورود
              </Text>
            </Pressable>
          </View>
          <UserAcount label="ثبت نام" />
        </View>
      </View>
    </View>
  );
};
