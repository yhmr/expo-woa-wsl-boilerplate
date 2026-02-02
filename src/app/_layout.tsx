import * as Sentry from "@sentry/react-native";
import { Stack } from "expo-router";

if (process.env.EXPO_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
    sendDefaultPii: true,
    enableLogs: true,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    integrations: [Sentry.mobileReplayIntegration()],
    debug: false,
  });
}

function RootLayout() {
  return <Stack />;
}

export default Sentry.wrap(RootLayout);
