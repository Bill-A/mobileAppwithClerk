import { useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Email: {user?.primaryEmailAddress?.emailAddress}</Text>
      <Button title="Go to Home" onPress={() => router.push('/home')} />
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