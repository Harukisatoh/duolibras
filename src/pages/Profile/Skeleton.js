import React from "react";
import { View, Text, ScrollView } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

// Icons
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// Contexts
import { useTheme } from "../../contexts/theme";

// Components
import Header from "../../components/Header";

// Styles
import styles from "./styles";

function Skeleton() {
  const { theme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header title="Perfil" />

      <ScrollView>
        <View
          style={[styles.profileInfo, { borderColor: theme.colors.division }]}
        >
          <View style={styles.basicInfo}>
            <SkeletonContent
              layout={[
                {
                  width: "75%",
                  height: 25,
                  borderRadius: 5,
                  alignSelf: "flex-start",
                  marginBottom: 15,
                },
                {
                  width: "90%",
                  height: 15,
                  borderRadius: 5,
                  alignSelf: "flex-start",
                  marginBottom: 5,
                },
                {
                  width: "40%",
                  height: 15,
                  borderRadius: 5,
                  alignSelf: "flex-start",
                },
              ]}
            ></SkeletonContent>
          </View>
          <View style={styles.profileImageContainer}>
            <SkeletonContent
              layout={[{ width: 100, height: 100, borderRadius: 50 }]}
            ></SkeletonContent>
          </View>
        </View>

        <View style={styles.statisticsContainer}>
          <Text
            style={[styles.statisticsText, { color: theme.colors.strongText }]}
          >
            Estatísticas
          </Text>
          <View style={styles.statisticsContent}>
            <View
              style={[
                styles.experienceContainer,
                { borderColor: theme.colors.division },
              ]}
            >
              <AntDesign
                style={styles.experienceIcon}
                name="star"
                size={30}
                color={theme.colors.profileExperienceIcon}
              />
              <View style={styles.experienceInfo}>
                <SkeletonContent
                  layout={[
                    {
                      width: "50%",
                      height: 20,
                      alignSelf: "flex-start",
                      marginBottom: 10,
                      marginTop: 5,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.experienceDescription,
                    { color: theme.colors.lightText },
                  ]}
                >
                  Experiência
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.moneyContainer,
                { borderColor: theme.colors.division },
              ]}
            >
              <MaterialIcons
                name="attach-money"
                size={30}
                color={theme.colors.profileMoneyIcon}
              />
              <View style={styles.moneyInfo}>
                <SkeletonContent
                  layout={[
                    {
                      width: "50%",
                      height: 20,
                      alignSelf: "flex-start",
                      marginBottom: 10,
                      marginTop: 5,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.moneyDescription,
                    { color: theme.colors.lightText },
                  ]}
                >
                  Dinheiro
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.badgesContainer}>
          <Text style={[styles.badgesText, { color: theme.colors.strongText }]}>
            Medalhas
          </Text>
          <View
            style={[
              styles.badgesContent,
              { borderColor: theme.colors.division },
            ]}
          >
            <View style={[styles.badgeContainer, { maxHeight: 120 }]}>
              <SkeletonContent
                containerStyle={{ flex: 0.3 }}
                layout={[{ width: "100%", height: "100%" }]}
              />

              <View style={styles.badgeInfo}>
                <SkeletonContent
                  layout={[
                    {
                      height: 25,
                      width: 140,
                      marginBottom: 15,
                      borderRadius: 5,
                    },
                    {
                      height: 15,
                      width: 190,
                      marginBottom: 5,
                      borderRadius: 5,
                    },
                    {
                      height: 15,
                      width: 150,
                      marginBottom: 5,
                      borderRadius: 5,
                    },
                    {
                      height: 15,
                      width: 170,
                      marginBottom: 5,
                      borderRadius: 5,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Skeleton;
