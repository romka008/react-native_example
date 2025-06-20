import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <ThemedView style={styles.container}>
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
    title: {
        textAlign: "center"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    }
});
