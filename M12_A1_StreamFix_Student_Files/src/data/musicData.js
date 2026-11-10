export const tracks = [
  {
    id:'t1',
    title:'Neon Skyline',
    artist:'Nova Static',
    album:'Neon Skyline',
    cover:require('../assets/covers/cover1.jpg'),
  },
  {
    id:'t2',
    title:'After Hours',
    artist:'Maya Rivers',
    album:'After Hours',
    cover:require('../assets/covers/cover2.jpg'),
  },
  {
    id:'t3',
    title:'Southbound',
    artist:'Cedar Lane',
    album:'Southbound',
    cover:require('../assets/covers/cover3.jpg'),
  },
  {
    id:'t4',
    title:'Midnight Drive Through Downtown Houston — Extended Live Session',
    artist:'Kairo',
    album:'Blue Signal',
    cover:require('../assets/covers/cover4.jpg'),
  },
  {
    id:'t5',
    title:'No Sleep',
    artist:'The Current',
    album:'No Sleep',
    cover:require('../assets/covers/cover5.jpg'),
  },
  {
    id:'t6',
    title:'Sunday Drive',
    artist:'Avery Knox',
    album:'Sunday Drive',
    cover:require('../assets/covers/cover6.jpg'),
  },
  {
    id:'t7',
    title:'Static Bloom',
    artist:'Glassline',
    album:'Static Bloom',
    cover:{ uri:'https://invalid.example.com/missing-cover.jpg' },
  },
  {
    id:'t8',
    title:'Moon Rooms',
    artist:'Jordan Hale',
    album:'Moon Rooms',
    cover:require('../assets/covers/cover8.jpg'),
  },
];

export const shelves = [
  { title:'Recently played', ids:['t1','t2','t3','t4'] },
  { title:'Made for you', ids:['t5','t6','t7','t8'] },
  { title:'Popular right now', ids:['t2','t5','t1','t6'] },
];