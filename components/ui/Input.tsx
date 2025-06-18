import { useState } from "react";
import { ColorSchemeName, StyleSheet, useColorScheme, type TextInputProps } from "react-native";
import { Pressable, TextInput } from "react-native-gesture-handler";

import EyeClosedIcon from "@/shared/icons/EyeClosedIcon";
import EyeOpenedIcon from "@/shared/icons/EyeOpenedIcon";
import { ThemedView } from "../ThemedView";

export type InputProps = TextInputProps & {
    isPassword?: boolean;
};

export function Input({ style, isPassword, ...otherProps }: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const colorTheme = useColorScheme() ?? "light";

    const isDarkTheme = (themeName: ColorSchemeName) => {
        return themeName === "dark";
    };
    const styles = makeStyles(isDarkTheme(colorTheme));

    return (
        <ThemedView>
            <TextInput
                style={[styles.input, style]}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor="#636161"
                {...otherProps}
            />
            {isPassword && (
                <Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible(prev => !prev)}>
                    {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </ThemedView>
    );
}

const makeStyles = (isDarkTheme: boolean) => {
    const styles = StyleSheet.create({
        input: {
            width: "100%",
            height: 40,
            fontSize: 16,
            borderWidth: 1,
            padding: 10,
            color: isDarkTheme ? "#fff" : "#000",
            backgroundColor: isDarkTheme ? "#2c2d3c" : "#c3c3c3",
            borderRadius: 8,
            borderColor: "transparent"
        },
        eyeIcon: {
            position: "absolute",
            right: 0,
            paddingHorizontal: 16,
            paddingVertical: 8
        }
    });
    return styles;
};
