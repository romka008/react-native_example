import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";

type ErrorNotificationProps = {
    error?: string;
};

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
    const [isShown, setIsShown] = useState(false);
    const animatedValue = new Animated.Value(-100);

    const onEnter = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        if (!error) {
            return;
        }

        setIsShown(true);
        const timeOutId = setTimeout(() => {
            setIsShown(false);
        }, 3000);
        return () => {
            clearTimeout(timeOutId);
        };
    }, [error]);

    if (!isShown) {
        return <></>;
    }

    return (
        <Animated.View
            style={{
                ...styles.error,
                transform: [{ translateY: animatedValue }]
            }}
            onLayout={onEnter}
        >
            <ThemedText style={styles.errorText}>{error}</ThemedText>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    error: {
        position: "absolute",
        width: "100%",
        zIndex: 1,
        backgroundColor: Colors.red,
        top: 40,
        padding: 15
    },
    errorText: {
        position: "relative",
        fontSize: 16,
        color: "#fff",
        textAlign: "center"
    }
});
