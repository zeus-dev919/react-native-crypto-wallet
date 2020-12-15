import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CCVPScreens, StackNavigationProps } from 'types';
import { useAlert } from 'utils';

import { PinLayout } from 'components/PinLayout';

const CreateConfirmVerifyPin = ({
  navigation,
}: StackNavigationProps<CCVPScreens, 'CreateConfirmVerifyPin'>) => {
  const [pin, setPin] = useState<string | null>(null);
  const [pinEntry, setPinEntry] = useState<string>('');
  const [createdPin, setCreatedPin] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const alert = useAlert();
  const isLogin = pin !== null;
  const isConfirm = createdPin.length === 4;

  const checkIfPinExists = useCallback(async () => {
    const savedPin = await AsyncStorage.getItem('pin');
    setPin(savedPin);
  }, []);

  const handleNavigateHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const savePin = useCallback(async () => {
    await AsyncStorage.setItem('pin', pinEntry, () => {
      handleNavigateHome();
    });
    setLoading(false);
  }, [handleNavigateHome, pinEntry]);

  const handleInvalidPin = useCallback(() => {
    setLoading(false);
    setPinEntry('');
    alert('Invalid PIN', 'Please try again.');
  }, [alert]);

  const handlePinEntry = (v: string) => {
    if (!isLogin && !isConfirm) {
      setCreatedPin(p => p.concat(v));
    } else {
      setPinEntry(p => p.concat(v));
    }
  };

  const handlePinEntryFinish = useCallback(() => {
    if (pinEntry.length === 4) {
      setLoading(true);
      if (isLogin) {
        if (pinEntry === pin) {
          handleNavigateHome();
        } else {
          handleInvalidPin();
        }
      } else if (isConfirm) {
        if (pinEntry === createdPin) {
          savePin();
        } else {
          handleInvalidPin();
        }
      } else {
        setLoading(false);
      }
    }
  }, [
    createdPin,
    handleInvalidPin,
    handleNavigateHome,
    isConfirm,
    isLogin,
    pin,
    pinEntry,
    savePin,
  ]);

  return (
    <PinLayout
      {...{ pinEntry, loading, isLogin }}
      onPinChange={handlePinEntry}
      onCheckIfPinExists={checkIfPinExists}
      onPinEntryFinished={handlePinEntryFinish}
      onPinDelete={() => setPinEntry(p => p.slice(1, p.length))}
    />
  );
};

export default CreateConfirmVerifyPin;
