import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RegisterScreen from './screens/RegisterScreen';
import RecipeScreen from './screens/RecipeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import NetworkScreen from './screens/NetworkScreen';

const {Navigator, Screen} = createStackNavigator();
const Tab = createBottomTabNavigator();

const BotTab = () =>
{
  return (
    <Tab.Navigator
      initialRouteName='Recipe Screen'
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.navigate(route);
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Shopping List"
        component={ShoppingScreen}
        options={{
          tabBarLabel: 'Shopping List',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="format-list-checks" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Recipe Screen"
        component={RecipeScreen}
        options={{
          tabBarLabel: 'My Recipes',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="food-fork-drink" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarLabel: 'Find/Share Recipes',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="earth" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="botTab">
            <Screen name="botTab" component={BotTab} options={{headerShown: false}}/>
            <Screen name="Register" component={RegisterScreen}/>
            <Screen name="RecipeScreen" component={RecipeScreen}/>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;