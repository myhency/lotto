import { useCallback, useEffect, useState } from "react";
import { Animated, View } from "react-native";
import { Typography } from "./Typography";

interface Props {
    numbers: number[];
}

export const LottoNumberView = ({ numbers }: Props) => {
    const [viewHeight, setViewHeight] = useState(0);
    const [animatedValue] = useState(new Animated.Value(0));

    const getNumberBackgroundColor = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 10) % 6;
        if (randomNumber === 0) return "red";
        if (randomNumber === 1) return "orange";
        if (randomNumber === 2) return "gray";
        if (randomNumber === 3) return "green";
        if (randomNumber === 4) return "blue";
        return "purple";
    }, []);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-viewHeight * 0.6, 0],
    });

    useEffect(() => {
        animatedValue.setValue(0);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [numbers]);

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
            }}
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                setViewHeight(height);
            }}
        >
            {numbers.map((item) => {
                return (
                    <Animated.View
                        key={`lotto-number-${item}`}
                        style={{
                            backgroundColor: getNumberBackgroundColor(),
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            transform: [
                                {
                                    translateY: translateY,
                                },
                            ],
                        }}
                    >
                        <Typography color="white" fontSize={20}>
                            {item}
                        </Typography>
                    </Animated.View>
                );
            })}
        </View>
    );
};
