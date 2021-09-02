import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Keyboard,
  ActivityIndicator,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// Icons
import { EvilIcons } from "@expo/vector-icons";

// Contexts
import { useAuth } from "../../contexts/auth";

// Styles
import styles, { FOOTER_HEIGHT, ICON_SIZE } from "./styles";
import { MAIN_COLOR, WHITE_COLOR } from "../../../styles.global";

const MAIN_BTN_LOADING_INDICATOR_SIZE = 28;
const FACEBOOK_BTN_LOADING_INDICATOR_SIZE = 25;

export default function Login() {
  const { authWithFacebook, signInWithEmail } = useAuth();
  const navigation = useNavigation();
  const [mainButtonLoading, setMainButtonLoading] = useState(false);
  const [facebookButtonLoading, setFacebookButtonLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const footerAnim = useRef(new Animated.Value(FOOTER_HEIGHT)).current;

  const iconSizeAnim = useRef(new Animated.Value(ICON_SIZE)).current;
  const iconOpacityAnim = useRef(new Animated.Value(1)).current;
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
  };

  function handleEmailSignIn() {
    setMainButtonLoading(true);

    // If request succeeds user will be redirected to profile page,
    // so there's no need to setMainButtonLoading(false) if it succeeds
    signInWithEmail(email, password).catch((err) => {
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

  function handleNavigationToSignup() {
    navigation.navigate("Signup");
  }

  function handleForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AnimatedEvilIcons
          name="user"
          style={{ fontSize: iconSizeAnim, opacity: iconOpacityAnim }}
          color="white"
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Entre com a sua conta</Text>
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
          placeholder="Digite sua senha"
          placeholderTextColor="#FFF"
          secureTextEntry
          onChange={(event) => {
            setPassword(event.nativeEvent.text);
            setErrorMessage("");
          }}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            disabled={mainButtonLoading || facebookButtonLoading}
            onPress={handleForgotPassword}
            activeOpacity={0.5}
            style={styles.forgotPasswordButton}
          >
            <Text style={styles.forgotPasswordText}>
              Esqueci a minha senha?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
        <RectButton
          enabled={!mainButtonLoading && !facebookButtonLoading}
          onPress={handleEmailSignIn}
          style={styles.signInButton}
        >
          {mainButtonLoading ? (
            <ActivityIndicator
              size={MAIN_BTN_LOADING_INDICATOR_SIZE}
              color={MAIN_COLOR}
            />
          ) : (
            <Text style={styles.signInButtonText}>Entrar</Text>
          )}
        </RectButton>
        <TouchableOpacity
          disabled={mainButtonLoading || facebookButtonLoading}
          onPress={handleNavigationToSignup}
          activeOpacity={0.5}
          style={styles.createAccountButton}
        >
          <Text style={styles.createAccountText}>Criar uma conta</Text>
        </TouchableOpacity>
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
              size={FACEBOOK_BTN_LOADING_INDICATOR_SIZE}
              color={WHITE_COLOR}
            />
          ) : (
            <Text style={styles.buttonText}>Conectar-se com o Facebook</Text>
          )}
        </RectButton>
      </Animated.View>
    </SafeAreaView>
  );
}
