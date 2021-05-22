import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const scheduleNotification = (seconds) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 0);
  tomorrow.setHours(20);
  tomorrow.setMinutes(0);
  const now = new Date();
  const timeUntilNextNotification = (tomorrow - now) / 1000;

  const schedulingOptions = {
    content: {
      title: 'Friendly reminder',
      body: 'Remember to Study every day!',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue"
    },
    trigger: {
      seconds: timeUntilNextNotification,
    },
  };
  // Notifications show only when app is not active.
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  );
};

const handleNotification = () => {
  console.warn('Remember to study every day!');
};

const askNotification = async () => {
  // Ask for notifications permission on for android
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (Constants.isDevice && status === 'granted') {
     console.log('Notification permissions granted.');
  } else {
    console.log('You need to allow permissions to this app');
  }
};

const Notification = () => {
  useEffect(() => {
    askNotification();
    scheduleNotification();
    // Handle notifications when app is active
    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return null;
};


export default Notification;
