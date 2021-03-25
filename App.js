import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const App = () => {
  const {t, i18n} = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{t('greeting-text')}</Text>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => i18n.changeLanguage('ru')}
          title="Russian"
          style={styles.btn}
        />
        <Button
          onPress={() => i18n.changeLanguage('en')}
          title="English"
          style={styles.btn}
        />
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
  greeting: {
    paddingBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: 50,
    // paddingRight: 20,
  },
});

export default App;
