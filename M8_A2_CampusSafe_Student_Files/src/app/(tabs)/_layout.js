import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/theme';

const icons = {
  index: ['home', 'home-outline'],
  assist: ['shield-checkmark', 'shield-checkmark-outline'],
  safety: ['heart', 'heart-outline'],
  profile: ['person', 'person-outline'],
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: '#78879A',
        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: colors.paper,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '800',
        },
        tabBarIcon: ({ focused, color, size }) => {
          const pair = icons[route.name] || ['ellipse', 'ellipse-outline'];
          return (
            <Ionicons
              name={focused ? pair[0] : pair[1]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="assist" options={{ title: 'Assist' }} />
      <Tabs.Screen name="safety" options={{ title: 'Safety' }} />
      <Tabs.Screen name="profile" options={{ title: 'About' }} />
    </Tabs>
  );
}
