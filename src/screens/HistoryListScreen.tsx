import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { LottoNumberView } from "../components/LottoNumberView";
import { Typography } from "../components/Typography";
import { RootState } from "../store/store";

export const HistoryListScreen = () => {
    const history = useSelector((state: RootState) => state.numbers.history);
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="History" />
            </Header>

            <FlatList
                style={{ flex: 1 }}
                data={history}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                height: 120,
                                flexDirection: "column",
                                paddingHorizontal: 24,
                                paddingVertical: 12,
                                backgroundColor: "white",
                            }}
                        >
                            <Typography fontSize={16}>{item.date}</Typography>
                            <LottoNumberView numbers={item.numbers} />
                        </View>
                    );
                }}
            />
        </View>
    );
};
