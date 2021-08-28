import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import { MAIN_COLOR, WHITE_COLOR, RED_COLOR } from "../../../styles.global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    paddingTop: Constants.statusBarHeight + 20,
  },

  returnButton: {
    paddingLeft: 20,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  title: {
    fontSize: 23,
    fontFamily: "Poppins_700Bold",
    color: WHITE_COLOR,
    textAlign: "center",
  },

  description: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: WHITE_COLOR,
    marginBottom: 40,
  },

  emailInput: {
    width: "75%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: WHITE_COLOR,
    marginBottom: 7,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: WHITE_COLOR,
  },

  button: {
    width: "75%",
    backgroundColor: WHITE_COLOR,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 25,
  },

  buttonText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: MAIN_COLOR,
  },

  errorContainer: {
    width: "75%",
  },

  errorMessage: {
    fontSize: 13,
    color: RED_COLOR,
    textAlign: "center",
    marginTop: 7,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
