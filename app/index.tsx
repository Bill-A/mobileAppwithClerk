import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/login" />;
}