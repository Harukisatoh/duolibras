import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Header from "../../components/Header";
import Skeleton from "./Skeleton";
// import Database from "../../services/Database";
import { useAuth } from "../../contexts/auth";
import { useTheme } from "../../contexts/theme";

import styles from "./styles";

function Profile(
  {
    // route: {
    //   params: { userId },
    // },
  }
) {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { user: authenticatedUser } = useAuth();

  const [loading, setLoading] = useState(true);

  const [userName, setUserName] = useState();
  const [userExperience, setUserExperience] = useState();
  const [userMoney, setUserMoney] = useState();
  const [userSignUpDate, setUserSignUpDate] = useState();
  const [userAvatarUrl, setUserAvatarUrl] = useState();

  const [badgesList, setBadgesList] = useState({}); // List of available badges
  const [userBadges, setUserBadges] = useState({}); // Information about all available badges related to a respective user (eg, if it's already been achieved by that user)
  const [badgesToBeShown, setBadgesToBeShown] = useState([]); // Which badges to be shown on the screen

  // const componentIsMounted = useRef(true);
  useEffect(() => {
    setTimeout(() => {
      setUserName("Gabriel Haruki");
      setUserExperience(0);
      setUserMoney(0);
      setUserSignUpDate("09/04/2021");
      setUserAvatarUrl("");
      setLoading(false);
    }, 2000);

    // Database.getUserDetails(userId, (response) => {
    //   if (componentIsMounted.current) {
    //     setUserDetails(response);
    //   }
    // });
    // Database.getBadgesList().then((response) => {
    //   if (componentIsMounted.current) {
    //     setBadgesList(response);
    //   }
    // });
    // Database.getUserBadges(userId, (response) => {
    //   if (componentIsMounted.current) {
    //     setUserBadges(response);
    //   }
    // });
    // return () => {
    //   componentIsMounted.current = false;
    // };
  }, []);

  useEffect(() => {
    try {
      if (
        Object.keys(badgesList).length !== 0 &&
        Object.keys(userBadges).length !== 0
      ) {
        const badgesId = Object.keys(badgesList);

        const badgesAuxList = [];

        badgesId.forEach((badgeId) => {
          if (userBadges[badgeId]["achieved"]) {
            badgesAuxList.push({
              ...badgesList[badgeId],
              quantity: userBadges[badgeId]["quantity"],
            });
          }
        });

        if (componentIsMounted.current) {
          setBadgesToBeShown(badgesAuxList);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [badgesList, userBadges]);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    const formattedDate = `${day} de ${month} de ${year}`;
    return formattedDate;
  }

  function handleNavigationToEditProfile() {
    navigation.navigate("EditProfile");
  }

  if (loading) {
    return <Skeleton />;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header
        title="Perfil"
        headerRight={
          <BorderlessButton
            rippleColor={theme.colors.borderlessButtonRipple}
            onPress={handleNavigationToEditProfile}
          >
            <FontAwesome5 name="edit" size={26} color={theme.colors.main} />
          </BorderlessButton>
        }
      />

      <ScrollView>
        <View
          style={[styles.profileInfo, { borderColor: theme.colors.division }]}
        >
          <View style={styles.basicInfo}>
            <Text style={[styles.name, { color: theme.colors.strongText }]}>
              {userName || ""}
            </Text>
            <Text style={[styles.date, { color: theme.colors.lightText }]}>
              {userSignUpDate ? `Entrou em ${formatDate(userSignUpDate)}` : ""}
            </Text>
          </View>
          <View style={styles.profileImageContainer}>
            {userAvatarUrl ? (
              <Image
                style={styles.profileImage}
                source={{ uri: userAvatarUrl }}
              />
            ) : (
              <FontAwesome
                name="user-circle"
                size={100}
                color={theme.colors.lightDefaultProfileIcon}
              />
            )}
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
                <Text
                  style={[
                    styles.experienceTitle,
                    { color: theme.colors.strongText },
                  ]}
                >
                  {userExperience}
                </Text>
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
                <Text
                  style={[
                    styles.moneyTitle,
                    { color: theme.colors.strongText },
                  ]}
                >
                  {userMoney}
                </Text>
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
            {badgesToBeShown.length !== 0 ? (
              badgesToBeShown.map((badge, badgeIndex) => (
                <View
                  key={badgeIndex}
                  style={
                    badgeIndex < badgesToBeShown.length - 1
                      ? [
                          styles.badgeContainer,
                          styles.badgeBottomDivision,
                          { borderColor: theme.colors.division },
                        ]
                      : styles.badgeContainer
                  }
                >
                  {badge["media"] === "" ? (
                    <View
                      style={[
                        styles.badgeIconContainer,
                        {
                          backgroundColor: theme.colors.defaultBadgeBackground,
                          borderColor: theme.colors.defaultBadgeBorder,
                        },
                      ]}
                    >
                      <MaterialCommunityIcons
                        name="trophy-award"
                        size={50}
                        color={theme.colors.defaultBadgeIcon}
                      />
                      {badge["cumulative"] === true && (
                        <View style={styles.badgeQuantityIconContainer}>
                          <Text
                            style={[
                              styles.badgeQuantityIconText,
                              { color: theme.colors.defaultBadgeIcon },
                            ]}
                          >{`x${badge["quantity"]}`}</Text>
                        </View>
                      )}
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={{ uri: badge["media"] }}
                        style={styles.badgeImage}
                      />
                      {badge["cumulative"] === true && (
                        <View
                          style={[
                            styles.badgeQuantityImageContainer,
                            {
                              backgroundColor:
                                theme.colors.imageBadgeQuantityBackground,
                            },
                          ]}
                        >
                          <Text
                            style={[
                              styles.badgeQuantityImageText,
                              { color: theme.colors.imageBadgeQuantityText },
                            ]}
                          >{`x${badge["quantity"]}`}</Text>
                        </View>
                      )}
                    </View>
                  )}
                  <View style={styles.badgeInfo}>
                    <Text
                      style={[
                        styles.badgeTitle,
                        { color: theme.colors.strongText },
                      ]}
                    >
                      {badge.title}
                    </Text>
                    <Text
                      style={[
                        styles.badgeDescription,
                        { color: theme.colors.lightText },
                      ]}
                    >
                      {badge.text}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View style={styles.badgeContainer}>
                <View style={styles.emptyBadgeInfo}>
                  <Text
                    style={[
                      styles.emptyBadgeTitle,
                      { color: theme.colors.lightText },
                    ]}
                  >
                    Nenhuma medalha{"\n"} foi encontrada :(
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
