import { Image } from "expo-image";
import React, { useState } from "react";
import { ColorSchemeName, Dimensions, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@/components/ui/Button";
import { ErrorNotification } from "@/components/ui/ErrorNotification";
import { Input } from "@/components/ui/Input";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
    const [isShowRestoreForm, setIsShowRestoreForm] = useState(false);
    const [formValue, setFormValue] = React.useState({
        email: "",
        password: ""
    });

    const colorTheme = useColorScheme();
    console.log(colorTheme);
    const isDarkTheme = (themeName: ColorSchemeName) => {
        return themeName === "dark";
    };
    const styles = makeStyles(isDarkTheme(colorTheme));

    const handleClickButton = () => {
        customAlert();
        // if (Platform.OS === "web") {
        //     alert("Simple Button pressed");
        // } else if (formValue.email && formValue.password) {
        //     Alert.alert("Simple Button pressed");
        // }
    };

    const width = Dimensions.get("window").width; // ширина экрана

    console.log(formValue);

    const [error, setError] = useState<string | undefined>();

    const customAlert = () => {
        setError("Неверный логин или пароль");
        setTimeout(() => {
            setError("");
        }, 4000);
    };

    const handleRestorePassword = () => {
        setIsShowRestoreForm(prev => !prev);
    };

    const textTargetRestore = isShowRestoreForm ? "Вернуться к странице входа" : "Восстановить пароль";
    const textButtonRestore = isShowRestoreForm ? "Восстановить пароль" : "Войти";

    return (
        <>
            <ErrorNotification error={error} />
            <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#14151C" }}>
                <SafeAreaProvider>
                    <SafeAreaView>
                        <ThemedView style={styles.container}>
                            <ThemedView style={styles.logotypeContainer}>
                                <Image source={require("@/assets/icons/react.svg")} style={styles.logo} />
                                <ThemedText type="title">логотип</ThemedText>
                            </ThemedView>
                            <ThemedView style={styles.form}>
                                <Input
                                    onChangeText={text => setFormValue(prev => ({ ...prev, email: text }))}
                                    textContentType="emailAddress"
                                    value={formValue.email}
                                    placeholder="Email"
                                />
                                {!isShowRestoreForm && (
                                    <Input
                                        onChangeText={text =>
                                            setFormValue(prev => ({
                                                ...prev,
                                                password: text
                                            }))
                                        }
                                        textContentType="password"
                                        value={formValue.password}
                                        placeholder="Password"
                                        isPassword
                                    />
                                )}

                                <Button onPress={handleClickButton} text={textButtonRestore} />
                            </ThemedView>
                            <ThemedText type="link" style={styles.linkRecoverPassword} onPress={handleRestorePassword}>
                                {textTargetRestore}
                            </ThemedText>
                            <Link href={"/explorer"} style={styles.notFound}>
                                <ThemedText type="link" style={styles.textNotFound}>
                                    Открыть несуществующий экран
                                </ThemedText>
                            </Link>
                        </ThemedView>
                    </SafeAreaView>
                </SafeAreaProvider>
            </ParallaxScrollView>
        </>
    );
}

const makeStyles = (isDarkTheme: boolean) => {
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            fontFamily: "FiraSans-SemiBold"
        },
        logotypeContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingTop: 100,
            paddingBottom: 14
        },
        logo: {
            width: 50,
            height: 50
        },
        form: {
            display: "flex",
            alignSelf: "center",
            width: "100%",
            gap: 16,
            padding: 16,
            maxWidth: 450
        },
        linkRecoverPassword: {
            fontFamily: "FiraSans",
            textAlign: "center",
            paddingTop: 24
        },
        notFound: {
            paddingTop: 20,
            color: "f9f9f9"
        },
        textNotFound: {
            color: "#213e87"
        }
    });
    return styles;
};
