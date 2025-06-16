import {
    ActivityIndicator,
    Animated,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleSheet,
    Text
} from "react-native";
import {ThemedView} from "../ThemedView";

export function Button({text, isLoading, ...props}: PressableProps & {text: string; isLoading?: boolean}) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: ["#452481", "#6C38CC"]
    });

    const fadeIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }).start();
        props.onPressIn && props.onPressIn(e);
    };

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: false
        }).start();
        props.onPressOut && props.onPressOut(e);
    };

    return (
        <ThemedView>
            <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
                <Animated.View
                    style={{
                        ...styles.button,
                        backgroundColor: color
                    }}>
                    {!isLoading && <Text style={styles.text}>{text}</Text>}
                    {isLoading && <ActivityIndicator size="large" color={"fff"} />}
                </Animated.View>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderRadius: 10
    },
    text: {
        color: "#fff",
        fontSize: 16
    }
});
