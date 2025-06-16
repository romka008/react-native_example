import {Image} from "expo-image";
import React, {useState} from "react";
import {ColorSchemeName, Dimensions, StyleSheet} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Button} from "@/components/ui/Button";
import {ErrorNotification} from "@/components/ui/ErrorNotification";
import {Input} from "@/components/ui/Input";
import {useColorScheme} from "@/hooks/useColorScheme.web";

export default function HomeScreen() {
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

    return (
        <>
            <ErrorNotification error={error} />
            <ParallaxScrollView headerBackgroundColor={{light: "#A1CEDC", dark: "#14151C"}}>
                <ThemedView style={styles.container}>
                    <ThemedView style={styles.logotypeContainer}>
                        <Image source={require("@/assets/icons/react.svg")} style={styles.logo} />
                        <ThemedText type="title">логотип</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.form}>
                        <Input
                            onChangeText={text => setFormValue(prev => ({...prev, email: text}))}
                            textContentType="emailAddress"
                            value={formValue.email}
                            placeholder="Email"
                        />
                        <Input
                            onChangeText={text => setFormValue(prev => ({...prev, password: text}))}
                            textContentType="password"
                            value={formValue.password}
                            placeholder="Password"
                            isPassword
                        />

                        <Button onPress={handleClickButton} text="Войти" />
                    </ThemedView>
                    <ThemedText type="link" style={styles.linkRecoverPassword}>
                        Восстановить пароль
                    </ThemedText>
                </ThemedView>
            </ParallaxScrollView>
        </>
    );
}

const makeStyles = (isDarkTheme: boolean) =>
    StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        },
        button: {
            backgroundColor: "#5e64d9",
            color: "#fff"
        },
        titleContainer: {
            flexDirection: "column",
            alignItems: "center",
            gap: 8
        },
        stepContainer: {
            gap: 8,
            marginBottom: 8
        },
        reactLogo: {
            height: 178,
            width: 290,
            bottom: 0,
            left: 0,
            position: "absolute"
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
            textAlign: "center",
            paddingTop: 24
        }
    });
