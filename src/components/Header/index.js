import React from "react";
import { Text, View } from "react-native";

import { useTheme } from "../../contexts/theme";

import styles from "./styles";

function Header({
  title,
  titleSize = 22,
  headerLeft,
  headerRight,
  headerCenter,
}) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { borderColor: theme.colors.division }]}>
      <View style={styles.headerLeft}>{headerLeft}</View>

      {title && !headerCenter && (
        <Text
          style={[
            styles.title,
            { fontSize: titleSize, color: theme.colors.main },
          ]}
        >
          {title}
        </Text>
      )}

      {!title && headerCenter && <View>{headerCenter}</View>}

      <View style={styles.headerRight}>{headerRight}</View>
    </View>
  );
}

export default Header;
