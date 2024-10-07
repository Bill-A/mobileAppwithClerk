import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Register() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.create({
        emailAddress,
        password,
      });
      await setActive({ session: completeSignUp.createdSessionId });
      router.replace('/home');
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={setEmailAddress}
        style={styles.input}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button onPress={onSignUpPress} title="Sign up" />
      <Button
        onPress={() => router.push('/login')}
        title="Already have an account? Sign in"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
  },
});