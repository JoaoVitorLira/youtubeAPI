import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import Tela1 from './tela1';
import Tela2 from './tela2';

const Tab = createBottomTabNavigator();

export default function RotaInterna() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="tela1"
                component={Tela1}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-youtube" size={30} color="red" />)
                        }
                        return (<Ionicons name="logo-youtube" size={24} color="black" />)
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="tela2"
                component={Tela2}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons name="logo-vimeo" size={30} color="#01BAEF" />)
                        }
                        return (<Ionicons name="logo-vimeo" size={24} color="black" />)
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}