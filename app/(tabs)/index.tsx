import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet } from 'react-native';
import {AVPlaybackSource, Audio} from 'expo-av';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

function AnimalCard({img, audio}: {img: ImageSourcePropType; audio: AVPlaybackSource;}){
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Pressable onPress={playSound} style={{height: 200, width: '100%'}}>
      <Image source={img} style={{width: '100%', height: '100%'}} />
    </Pressable>
  );
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <AnimalCard img={require('@/assets/images/animals/turkey.jpg')} audio={require('@/assets/audio/animals/turkey.mp3')} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
