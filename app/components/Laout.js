import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import FavoriteCom from '@/app/components/Favorite';
import PersonCom from '@/app/components/Person';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false, // Hide header if needed
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteCom} />
            <Tab.Screen name="Person" component={PersonCom} />
        </Tab.Navigator>
    );
}
