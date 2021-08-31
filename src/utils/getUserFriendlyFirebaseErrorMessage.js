import userFriendlyFirebaseErrors, {
  genericErrorMessage,
} from "../common/enum/userFriendlyFirebaseErrors.js";

export default function getUserFriendlyFirebaseErrorMessage(firebaseError) {
  const message =
    userFriendlyFirebaseErrors[firebaseError?.code] || genericErrorMessage;

  return message;
}
