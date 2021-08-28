import { StyleSheet } from "react-native";

import {
  MAIN_COLOR,
  WHITE_COLOR,
  RED_COLOR,
  SECONDARY_COLOR,
} from "../../../styles.global";

export const FOOTER_HEIGHT = 115;
export const ICON_SIZE = 150;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: MAIN_COLOR,
  },

  header: {
    alignItems: "center",
  },

  headerText: {
    marginBottom: 14,
    fontSize: 23,
    fontFamily: "Poppins_400Regular",
    color: WHITE_COLOR,
    textAlign: "center",
  },

  formContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
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

  passwordInput: {
    width: "75%",
    textAlignVertical: "center",
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

  errorContainer: {
    width: "75%",
  },

  errorMessage: {
    fontSize: 13,
    color: RED_COLOR,
    textAlign: "center",
    marginBottom: 7,
    fontFamily: "Poppins_400Regular",
  },

  signUpButton: {
    width: "75%",
    backgroundColor: SECONDARY_COLOR,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 25,
  },

  signUpButtonText: {
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
    color: WHITE_COLOR,
  },

  footerContainer: {
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },

  footerText: {
    marginBottom: 14,
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: WHITE_COLOR,
    textAlign: "center",
  },

  facebookButton: {
    width: "75%",
    paddingVertical: 10,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
});

export default styles;
