import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    borderBottomWidth: 2,
    flexDirection: "row",
    height: 82,
  },

  headerLeft: {
    flex: 1,
    height: "100%",
    marginHorizontal: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  title: {
    fontFamily: "Poppins_600SemiBold",
    textAlignVertical: "center",
    transform: [{ translateY: 2 }],
  },

  headerRight: {
    flex: 1,
    height: "100%",
    marginHorizontal: 15,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default styles;
