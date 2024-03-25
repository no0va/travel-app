import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import * as NavigationBar from 'expo-navigation-bar';

const TicketRoute = () => <Text>Ticket</Text>;
const SearchRoute = () => <Text>Search</Text>;
const ToursRoute = () => <Text>Tours</Text>;
const HomeRoute = () => <Text>Home</Text>;
const ProfileRoute = () => <Text>Profile</Text>;

const Landing = () => {
  NavigationBar.setBackgroundColorAsync("rgb(237, 237, 255)");
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "tours", focusedIcon: "palm-tree" },
    {
      key: "ticket",
      focusedIcon: "ticket-confirmation",
      unfocusedIcon: "ticket-confirmation-outline",
    },
    {
      key: "home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "search", focusedIcon: "magnify" },
    {
      key: "profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ticket: TicketRoute,
    search: SearchRoute,
    tours: ToursRoute,
    home: HomeRoute,
    profile: ProfileRoute,
  });

  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        //   shifting={true}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#fff"
        labeled={false}
        barStyle={{ backgroundColor: "rgb(237, 237, 255)" }}
        activeIndicatorStyle={{ backgroundColor: "#0C359E" }}
      />
    </View>
  );
};

export default Landing;
