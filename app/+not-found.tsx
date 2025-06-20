import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <ThemedView style={styles.container}>
                <Image
                    source={require("@/assets/images/not-found-page.png")}
                    style={styles.image}
                    contentFit="contain"
                />
                <ThemedText type="title" style={styles.title}>
                    Такого экрана не существует.
                </ThemedText>
                <Link href="/" style={styles.link}>
                    <ThemedText type="link">Перейти на главный экран!</ThemedText>
                </Link>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20
    },
    image: {
        width: "100%",
        height: "100%",
        maxWidth: 350,
        maxHeight: 350
    },
    title: {
        textAlign: "center"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    }
});
