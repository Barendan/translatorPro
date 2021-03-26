import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t('greeting-text')}</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => i18n.changeLanguage('ru')} title="Russian" />
        <Button onPress={() => i18n.changeLanguage('en')} title="English" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});

export default App;
