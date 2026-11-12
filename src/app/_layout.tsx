import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#13436B' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Datos personales',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={String(color)} />,
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => <Ionicons name="school-outline" size={size} color={String(color)} />,
        }}
      />
      <Tabs.Screen
        name="experiencia"
        options={{
          title: 'Experiencia',
          tabBarIcon: ({ color, size }) => <Ionicons name="briefcase-outline" size={size} color={String(color)} />,
        }}
      />
      <Tabs.Screen
        name="hobbies"
        options={{
          title: 'Hobbies',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={String(color)} />,
        }}
      />
    </Tabs>
  );
}