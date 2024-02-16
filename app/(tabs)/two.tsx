import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { openBrowserAsync } from 'expo-web-browser';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>References</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Privacy Policy"
        onPress={() => openBrowserAsync('https://zwc0.github.io/main/mobileapps/privacy-policy.txt')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
