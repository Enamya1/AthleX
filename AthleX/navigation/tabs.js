import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../assets/colors";
import { Animated } from 'react-native';


import HealthScreen from '../screens/HealthScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import DeviceScreen from '../screens/DeviceScreen';
import MeScreen from '../screens/MeScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const scale = useRef(new Animated.Value(1)).current;

          useEffect(() => {
            Animated.spring(scale, {
              toValue: focused ? 1.2 : 1,
              useNativeDriver: true,
              friction: 7,
            }).start();
          }, [focused]);

          let iconName;
          
          if (route.name === "Health") {
            iconName = "heart-outline";
          } else if (route.name === "Exercise") {
            iconName = "bicycle-outline";
          } else if (route.name === "Discover") {
            iconName = "compass-outline";
          } else if (route.name === "Device") {
            iconName = "hardware-chip-outline";
          } else if (route.name === "Me") {
            iconName = "happy-outline";
          }

          return (
            <Animated.View style={{ transform: [{ scale }] }}>
              <Ionicons name={iconName} size={size} color={color} />
            </Animated.View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarBackground: () => (
          <Animated.View style={{ flex: 1, backgroundColor: colors.background }} />
        ),
        headerShown: false,
      })}
    >

   

      <Tab.Screen name="Health" component={HealthScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Device" component={DeviceScreen} />
      <Tab.Screen name="Me" component={MeScreen} />

    </Tab.Navigator>
  );
};

export default Tabs;
