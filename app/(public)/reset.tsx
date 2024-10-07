import { useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function ResetPassword() {
  const { signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const router = useRouter();

  const onRequestReset = async () => {
    try {
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      });
      // Navigate to a verification screen or show a message
      console.log('Password reset email sent');
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={setEmailAddress}
        style={styles.input}
      />
      <Button onPress={onRequestReset} title="Request Password Reset" />
      <Button
        onPress={() => router.push('/login')}
        title="Back to Sign In"
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