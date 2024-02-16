import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet } from 'react-native';
import {AVPlaybackSource, Audio} from 'expo-av';

import { Text, View } from '@/components/Themed';
import animals from '@/constants/animals';

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
    <Pressable onPress={playSound} style={{height: 200, width: '45%'}}>
      <Image source={img} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
    </Pressable>
  );
}

export default function TabOneScreen() {
  return (
    <ScrollView style={{
      display: 'flex',
      flex: 1,
    }}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {
          animals.map((x,i)=>(
            <AnimalCard
              key={i}
              img={x.img}
              audio={x.audio}
            />
          ))
        }
        <Text>More coming soon!</Text>
      </View>
    </ScrollView>
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
