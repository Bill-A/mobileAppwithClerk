import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => router.push('/profile')} />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});