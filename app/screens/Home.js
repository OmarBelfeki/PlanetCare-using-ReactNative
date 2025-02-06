import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <View style={styles.logo_cir}>
                        <View style={{backgroundColor: "#568030", width: 15, height: 15, borderRadius: 180} } />
                        <View style={{backgroundColor: "#568030", width: 6, height: 6, borderRadius: 180}} />
                    </View>
                    <Text style={styles.logo_txt}>Planet Care</Text>
                </View>
                <View style={styles.icon}>
                    <MaterialIcons name="storefront" size={19} color="white" />
                </View>
            </View>
            <View style={styles.categories}>
                <View style={styles.int}>
                    <Text style={styles.int_txt}>Interior</Text>
                </View>
                <View style={styles.ext}>
                    <Text style={styles.ext_txt}>Exterior</Text>
                </View>
            </View>
            <View style={styles.search}>
                <View style={styles.search_icon}>
                    <Feather name="search" size={30} color="black"/>
                </View>
                <Text style={styles.search_txt}>Search</Text>
            </View>
            <View style={styles.product}>
                    <ScrollView contentContainerStyle={styles.product_items}>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                        <View style={styles.product_items_1}>
                            <Image source={require("../assets/Product Image-1.png")}/>
                            <View style={styles.product_items_fav}>
                                <Text style={styles.product_items_txt}>Ficus Lyrata</Text>
                                <MaterialIcons name="favorite-border" size={24} color="black" />
                            </View>
                            <Text style={styles.product_items_money}>$123</Text>
                        </View>
                    </ScrollView>
            </View>
            <View style={styles.tabbar}>
                <MaterialCommunityIcons name="home" size={24} color="white" />
                <MaterialIcons name="favorite-border" size={24} color="white" />
                <Ionicons name="person-outline" size={24} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        alignItems: "center"
    },
    header: {
        width: 335, height: 53,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,

    },
    logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center"


    },
    logo_cir: {
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    logo_txt: {
        width: 191,
        height: 25,
        fontFamily: "Josefin Sans",
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.33,
        color: "#6B6969",
        textAlign: "start"
    },
    icon: {
        width: 35,
        height: 35,
        backgroundColor: "black",
        borderRadius: 180,
        justifyContent: "center",
        alignItems: "center"
    },
    categories: {
        marginTop: 21,
        width: 345,
        height: 58,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    int: {
        backgroundColor: "black",
        width: 162.11,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center"

    },
    int_txt: {
        color: "white",
        fontFamily: "Josefin Sans",
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.33,

    },
    ext: {
        width: 162.11,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    ext_txt: {
        color: "black",
        fontFamily: "Josefin Sans",
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 0.33,
    },
    search: {
        marginTop: 21.5,
        width: 396, height: 52,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 29,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    search_icon: {
        marginLeft: 20,
        marginRight: 20,

    },
    search_txt: {
        width: 283, height: 52,
        color: '#6B6969',
        alignItems: "center",
        fontFamily: "Lato",
        fontSize: 16,
        letterSpacing: 0.29,
        lineHeight: 22,
        fontWeight: "regular",
        textAlign: "left",
        textAlignVertical: "center"
    },
    product: {
        width: "100%",
    },
    product_items: {
        marginTop: 14.5,
        marginLeft: 13,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        width: 350,
        height: 222 * 4,

    },
    product_items_1: {
        width: 170.51,
        height: 222,
    },
    product_items_fav: {
        flexDirection: "row",
        width: 160.51, height: 27,
        justifyContent: "space-between",

    },
    product_items_txt: {
        fontWeight: "bold",
        fontSize: 17,
        letterSpacing: 0.31,
        fontFamily: "Josefin Sans",
        color: "#6B6969"
    },
    product_items_money: {
        width: 160.51, height: 19,
        color: "#568030",
        fontSize: 16,
        fontFamily: "Lato",
        fontWeight: "bold",
        letterSpacing: 0.29,
        textAlign: "left"
    },
    tabbar: {
        backgroundColor: "black",
        width: "100%",
        height: 57,
        marginTop: -290,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"


    }
});
