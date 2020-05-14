import React, {useEffect} from 'react';
import {Linking, Alert} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {Preloader} from '../components/preloader';

const openUrl = async (goBack, url) => {
  try {
    if (!url) {
      goBack();
    }

    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        dismissButtonStyle: 'close',
        modalPresentationStyle: 'overFullScreen',
      });
    } else {
      Linking.openURL(url);
    }

    goBack();
  } catch (error) {
    goBack();
    Alert.alert(error.message);
  }
};

export const WebView = ({goBack, href}) => {
  useEffect(
    () => {
      openUrl(goBack, href);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <Preloader title="Redirecting..." />;
};
