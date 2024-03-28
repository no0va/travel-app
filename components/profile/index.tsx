import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import HeaderProfile from "./header-profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BaseButton from "../base/button";
import { router } from "expo-router";
import BaseAccordion from "../base/base-accordion";
import { BaseInput } from "../base/inputs";
import MainProfile from "./main-profile";
import { useProfileContext } from "@/context/profile-context";

export default function Profile() {
  const [token, setToken] = useState<string>("");
  const [userData, setUserData] = useState({});
  const [showlLoader, setShowlLoader] = useState(false);
  const { setUserDetails } = useProfileContext();

  useEffect(() => {
    async function fetchToken() {
      setShowlLoader(true);
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        axios
          .get(
            "https://travelorganization.monster/api/User/User/GetUserDetail",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((json) => {
            if (json.data.isSuccess) {
              setUserDetails(json.data.data);
            }
          })
          .catch((e) => console.log(e))
          .finally(() => setShowlLoader(false));
      }
    }

    fetchToken();
  }, [token]);

  if (token) {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {showlLoader ? (
          <ActivityIndicator
            size="large"
            color="#0C359E"
            style={{ marginTop: 100 }}
          />
        ) : (
          <>
            <HeaderProfile userData={userData} />
            <MainProfile />
          </>
        )}
      </ScrollView>
    );
  } else {
    return (
      <BaseButton
        handleSubmit={() => router.push("/login/")}
        label="ورود"
        loader={false}
      />
    );
  }
}
