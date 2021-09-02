import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  optionsContainer: {
    padding: 20,
    justifyContent: "center",
  },

  darkThemeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  darkThemeTitle: {
    fontSize: 21,
    fontFamily: "Poppins_700Bold",
  },

  signOutContainer: {
    paddingTop: 20,
    borderTopWidth: 2,
  },

  signOutButton: {
    padding: 7,
    borderRadius: 12,
    alignItems: "center",
  },

  signOutText: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});

export default styles;
