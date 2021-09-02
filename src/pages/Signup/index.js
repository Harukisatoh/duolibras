import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Animated,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// Icons
import { EvilIcons, Feather } from "@expo/vector-icons";

// Contexts
import { useAuth } from "../../contexts/auth";

// Styles
import styles, { FOOTER_HEIGHT, ICON_SIZE } from "./styles";
import { WHITE_COLOR } from "../../../styles.global";

const MAIN_BTN_LOADING_INDICATOR_SIZE = 28;
const FACEBOOK_BTN_LOADING_INDICATOR_SIZE = 25;

export default function Signup() {
  const { authWithFacebook, signUpWithEmail } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [mainButtonLoading, setMainButtonLoading] = useState(false);
  const [facebookButtonLoading, setFacebookButtonLoading] = useState(false);

  const footerAnim = useRef(new Animated.Value(FOOTER_HEIGHT)).current;

  const iconSizeAnim = useRef(new Animated.Value(ICON_SIZE)).current;
  const iconOpacityAnim = useRef(new Animated.Value(1)).current;
  const backIconOpacityAnim = useRef(new Animated.Value(1)).current;
  const AnimatedEvilIcons = Animated.createAnimatedComponent(EvilIcons);

  useEffect(() => {
    const didShowKeyboardSubscription = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    const didHideKeyboardSubscription = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    return function cleanup() {
      didShowKeyboardSubscription.remove();
      didHideKeyboardSubscription.remove();
    };
  }, []);

  const keyboardDidShow = (event) => {
    Animated.timing(footerAnim, {
      duration: Platform.OS === "ios" ? event.duration : 0,
      toValue: 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconSizeAnim, {
      duration: Platform.OS === "ios" ? event.duration + 200 : 0,
      toValue: 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconOpacityAnim, {
      duration: Platform.OS === "ios" ? event.duration + 150 : 0,
      toValue: 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(backIconOpacityAnim, {
      duration: Platform.OS === "ios" ? event.duration + 150 : 0,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const keyboardDidHide = (event) => {
    Animated.timing(footerAnim, {
      duration: Platform.OS === "ios" ? event.duration : 0,
      toValue: FOOTER_HEIGHT,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconSizeAnim, {
      duration: Platform.OS === "ios" ? event.duration + 200 : 0,
      toValue: ICON_SIZE,
      useNativeDriver: false,
    }).start();
    Animated.timing(iconOpacityAnim, {
      duration: Platform.OS === "ios" ? event.duration + 150 : 0,
      toValue: 1,
      useNativeDriver: false,
    }).start();
    Animated.timing(backIconOpacityAnim, {
      duration: Platform.OS === "ios" ? event.duration + 150 : 0,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  async function handleEmailSignUp() {
    setMainButtonLoading(true);

    // If request succeeds user will be redirected to profile page,
    // so there's no need to setMainButtonLoading(false) if it succeeds
    signUpWithEmail(email, password).catch((err) => {
      setErrorMessage(err.message);
      setMainButtonLoading(false);
    });
  }

  function handleAuthWithFacebook() {
    setFacebookButtonLoading(true);

    // If request succeeds user will be redirected to profile page,
    // so there's no need to setFacebookButtonLoading(false) if it succeeds
    authWithFacebook().catch((err) => {
      setErrorMessage(err.message);
      setFacebookButtonLoading(false);
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          position: "absolute",
          left: 20,
          top: 50,
          opacity: backIconOpacityAnim,
        }}
      >
        <BorderlessButton
          enabled={!mainButtonLoading && !facebookButtonLoading}
          onPress={handleGoBack}
        >
          <Feather name="arrow-left" size={35} color={WHITE_COLOR} />
        </BorderlessButton>
      </Animated.View>
      <View style={styles.header}>
        <AnimatedEvilIcons
          name="user"
          style={{ fontSize: iconSizeAnim, opacity: iconOpacityAnim }}
          color="white"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>
          Crie uma conta com
          {"\n"}
          seu email e senha
        </Text>
        <TextInput
          style={styles.emailInput}
          autoCompleteType="email"
          keyboardType="email-address"
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          onChange={(event) => {
            setEmail(event.nativeEvent.text);
            setErrorMessage("");
          }}
        />
        <TextInput
          style={styles.passwordInput}
          autoCompleteType="password"
          placeholder="Digite uma senha"
          placeholderTextColor="#FFF"
          secureTextEntry
          onChange={(event) => {
            setPassword(event.nativeEvent.text);
            setErrorMessage("");
          }}
        />
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
        <RectButton
          enabled={!mainButtonLoading && !facebookButtonLoading}
          onPress={handleEmailSignUp}
          style={styles.signUpButton}
        >
          {mainButtonLoading ? (
            <ActivityIndicator
              color={WHITE_COLOR}
              size={MAIN_BTN_LOADING_INDICATOR_SIZE}
            />
          ) : (
            <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
          )}
        </RectButton>
      </View>
      <Animated.View style={[styles.footerContainer, { height: footerAnim }]}>
        <Text style={styles.footerText}>
          Você também pode
          {"\n"}
          conectar-se com seu Facebook
        </Text>
        <RectButton
          enabled={!mainButtonLoading && !facebookButtonLoading}
          onPress={handleAuthWithFacebook}
          style={styles.facebookButton}
        >
          {facebookButtonLoading ? (
            <ActivityIndicator
              color={WHITE_COLOR}
              size={FACEBOOK_BTN_LOADING_INDICATOR_SIZE}
            />
          ) : (
            <Text style={styles.buttonText}>Conectar-se com o Facebook</Text>
          )}
        </RectButton>
      </Animated.View>
    </SafeAreaView>
  );
}
