import {Image} from "expo-image";
import React from "react";
import {Alert, Dimensions, Platform, StyleSheet} from "react-native";
import {TextInput} from "react-native-gesture-handler";

import {HelloWave} from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Button} from "@react-navigation/elements";

export default function HomeScreen() {
    const [text, setText] = React.useState("");
    const [number, setNumber] = React.useState("");

    const handleClickButton = () => {
        if (Platform.OS === "web") {
            alert("Simple Button pressed");
        } else {
            Alert.alert("Simple Button pressed");
        }
    };

    const width = Dimensions.get("window").width; // ширина экрана

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: "#A1CEDC", dark: "#1D3D47"}}
            headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}>
            <ThemedText>Привет гость, ты на домашней странице!</ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome!</ThemedText>
                <HelloWave />
                <TextInput style={styles.input} onChangeText={setText} value={text} />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <Button style={styles.button} color="#fff" onPress={handleClickButton}>
                    Нажми меня
                </Button>
            </ThemedView>
            <ThemedView
                style={{
                    gap: 10,
                    backgroundColor: "yellow",
                    alignItems: "flex-end",
                    height: 500,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "center"
                }}>
                <ThemedView style={{backgroundColor: "tomato", width: width / 2 - 37, height: 100}}></ThemedView>
                <ThemedView
                    style={{
                        backgroundColor: "purple",
                        width: width / 2 - 37,
                        height: 100,
                        alignSelf: "flex-start"
                    }}></ThemedView>
                <ThemedView
                    style={{
                        backgroundColor: "green",
                        width: width / 2 - 42,
                        height: 100,
                        alignSelf: "center"
                    }}></ThemedView>
                <ThemedView style={{backgroundColor: "blue", width: width / 2 - 42, height: 100}}></ThemedView>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 1: Try it</ThemedText>
                <ThemedText>
                    Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. Press
                    <ThemedText type="defaultSemiBold">
                        {Platform.select({
                            ios: "cmd + d",
                            android: "cmd + m",
                            web: "F12"
                        })}
                    </ThemedText>
                    to open developer tools.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 2: Explore</ThemedText>
                <ThemedText>
                    {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
                <ThemedText>
                    {`When you're ready, run `}
                    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh
                    <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current
                    <ThemedText type="defaultSemiBold">app</ThemedText> to
                    <ThemedText type="defaultSemiBold">app-example</ThemedText>.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff9e9eb0",
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
        gap: 10
    },
    logo: {
        width: 50,
        height: 50
    },
    form: {
        display: "flex",
        gap: 16,
        padding: 16
    },
    inputForm: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#2c2d3c",
        borderRadius: 8,
        borderColor: "transparent"
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: "#ff9e9e"
    }
});
