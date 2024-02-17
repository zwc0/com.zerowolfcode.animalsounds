const animals = [
  {
    img: require('@/assets/images/animals/cat.png'),
    audio: require('@/assets/audio/animals/cat.mp3'),
  },
  {
    img: require('@/assets/images/animals/cow.png'),
    audio: require('@/assets/audio/animals/cow.mp3'),
  },
  {
    img: require('@/assets/images/animals/dog.png'),
    audio: require('@/assets/audio/animals/dog.mp3'),
  },
  {
    img: require('@/assets/images/animals/elephant.png'),
    audio: require('@/assets/audio/animals/elephant.mp3'),
  },
  {
    img: require('@/assets/images/animals/owl.png'),
    audio: require('@/assets/audio/animals/owl.mp3'),
  },
  {
    img: require('@/assets/images/animals/turkey.png'),
    audio: require('@/assets/audio/animals/turkey.mp3'),
  },
] as const;
export default animals;