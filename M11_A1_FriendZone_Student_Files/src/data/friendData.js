export const myProfile = {
  name: 'You',
  interests: ['Gaming', 'Technology', 'Basketball', 'Music', 'Movies'],
};

export const profiles = [
  {
    id: 'p1',
    name: 'Avery',
    age: 22,
    area: 'South Campus',
    bio: 'Always down for a movie, coffee, or pickup game.',
    interests: ['Movies', 'Basketball', 'Music', 'Travel', 'Photography'],
    image: require('../assets/images/avery.jpg'),
  },
  {
    id: 'p2',
    name: 'Jordan',
    age: 21,
    area: 'Houston',
    bio: 'Tech student who likes games, anime, and weekend food spots.',
    interests: ['Gaming', 'Technology', 'Anime', 'Food', 'Music'],
    image: require('../assets/images/jordan.jpg'),
  },
  {
    id: 'p3',
    name: 'Maya',
    age: 23,
    area: 'Pearland',
    bio: 'Creative, active, and always looking for new local events.',
    interests: ['Art', 'Fitness', 'Photography', 'Travel', 'Music'],
    image: require('../assets/images/maya.jpg'),
  },
  {
    id: 'p4',
    name: 'Chris',
    age: 24,
    area: 'Houston',
    bio: 'Sports, movies, and game nights are usually a yes.',
    interests: ['Sports', 'Movies', 'Gaming', 'Food', 'Basketball'],
    image: require('../assets/images/chris.jpg'),
  },
];

export const events = [
  {
    id: 'e1',
    title: 'Game & Chill Night',
    time: 'Friday • 7:00 PM',
    tags: ['Gaming', 'Food', 'Social'],
    going: 12,
    friendsInterested: 4,
  },
  {
    id: 'e2',
    title: 'Coffee & Creatives Meetup',
    time: 'Saturday • 11:00 AM',
    tags: ['Photography', 'Art', 'Coffee'],
    going: 18,
    friendsInterested: 3,
  },
  {
    id: 'e3',
    title: 'Campus Fitness Meetup',
    time: 'Sunday • 3:00 PM',
    tags: ['Fitness', 'Walking', 'Sports'],
    going: 9,
    friendsInterested: 2,
  },
];