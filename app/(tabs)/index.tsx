import {StyleSheet, View } from 'react-native';
import HomeScreen from "../screens/Home"

export default function App() {
    return (
        <View style={styles.container}>
            <HomeScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white"
    }
});
