import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


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
        tabBarIcon: ({ color, size }) => {
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

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#00bfff",
        tabBarInactiveTintColor: "gray",
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
