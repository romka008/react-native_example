import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        FiraSans: require("../assets/fonts/FiraSans-Regular.ttf"),
        FiraSansSemiBold: require("../assets/fonts/FiraSans-SemiBold.ttf")
    });

    useEffect(() => {
        if (loaded) {
            // Async font loading only occurs in development.
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        if (error) {
            throw error;
        }
    }, [error]);

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
