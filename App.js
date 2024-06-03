import {
    useFonts,
    Raleway_300Light, Raleway_700Bold
}
    from "@expo-google-fonts/raleway";
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Kit from './src/telas/Kits/Index.js'
import Produto from './src/telas/Produto/Index.js'
import Sobre from './src/telas/Sobre'
import mock from './src/mocks/kit.js'
import mock_sobre from './src/mocks/sobre'
import mock_produto from './src/mocks/produto.js'

function MenuKit() {
    return <Kit {...mock} />
}

function MenuSobre() {
    return <Sobre {...mock_sobre} />
}
function MenuProduto() {
    return <Produto {...mock_produto} />
}

const tab = createBottomTabNavigator();

function TabsMenu() {
    return <tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Kit") {
                    iconName = focused
                        ? 'basket'
                        : 'basket-outline';
                } else if (route.name === "Sobre nós") {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === "Produtos") {
                    iconName = focused
                        ? 'list'
                        : 'list-outline';
                } else if (route.name === "Lista de Desejos") {
                    iconName = focused
                        ? 'heart'
                        : 'heart-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#01426c',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
        })}>
        <tab.Screen name='Sobre nós' component={MenuSobre} />
        <tab.Screen name='Kit' component={MenuKit} />
        <tab.Screen name='Produtos' component={MenuProduto} />
        <tab.Screen name='Lista de Desejos' component={MenuKit} />
    </tab.Navigator>
}

export default function App() {
    //Carrega a fonte para o projeto
    const [fonteCarregada] = useFonts({
        "ralewayP": Raleway_300Light,
        "ralewayG": Raleway_700Bold,
    })

    //Checa se as fontes já foram carregadas
    if (!fonteCarregada) {
        return <View />
    }

    return <NavigationContainer>
        <TabsMenu />
    </NavigationContainer>
}

