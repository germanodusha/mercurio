const category01 = [
  {
    src: 'adele.mp3',
    shortDescription: 'M2_1_FIX 0.01 JLZ',
    descriptions: [
      'FIX 0.01',
      'JLZ',
      'M-1. LT POST-STUDIES',
      'TOQUE N.2 REMIX',
      'VITOR ARAÚJO',
    ],
  },
  {
    src: 'queen.mp3',
    shortDescription: 'M2_2_FIX 0.02 HURTMOLD',
  },
  {
    src: 'test-a-3.mp3',
    shortDescription: 'M2_3_MUT 0.01 RAKTA',
  },
  {
    src: 'test-a-4.mp3',
    shortDescription: 'M2_4_FIX 0.01 JLZ',
  },
  {
    src: 'test-a-5.mp3',
    shortDescription: 'M2_5_FIX 0.02 HURTMOLD',
  },
  {
    src: 'test-a-6.mp3',
    shortDescription: 'M2_6_MUT 0.01 RAKTA',
  },
]

const category02 = [
  {
    src: 'test-b-1.mp3',
    shortDescription: 'M2_1_FIX 0.01 JLZ',
  },
  {
    src: 'test-b-2.mp3',
    shortDescription: 'M2_2_FIX 0.02 HURTMOLD',
  },
  {
    src: 'test-b-3.mp3',
    shortDescription: 'M2_3_MUT 0.01 RAKTA',
  },
  {
    src: 'test-b-4.mp3',
    shortDescription: 'M2_4_FIX 0.01 JLZ',
  },
]

const playlists = [
  category01,
  category02,
  [...category01, ...category02],
  category02,
]

export default playlists
