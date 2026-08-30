// Use the array below to store the product information for the Drop Inventory app.
const products = [
  {
    id: 'drop-001',
    image: require('../assets/images/apex-runner.png'),
    name: 'Apex Runner 01',
    category: 'Performance',
    price: 128,
    quantity: 12,
    accent: '#5669FF',
  },

  {
  id: 'drop-002',
  image: require('../assets/images/night-shift.png'),
  name: 'Night Shift 02',
  category: 'Street',
  price: 145,
  quantity: 4,
  accent: '#00C4A0',
},


  {
  id: 'drop-003',
  image: require('../assets/images/studio-low.png'),
  name: 'Studio Low 03',
  category: 'Lifestyle',
  price: 110,
  quantity: 0,
  accent: '#F58E3C',
},

  // Add one original product below.
  // Use image: require('../assets/images/your-drop.png')
  {
    id: 'drop-004',
    image: require('../assets/images/your-drop.png'),
    name: 'Metro Canvas 04',
    category: 'Everyday',
    price: 120,
    quantity: 10,
    accent: '#FF5733',
  },
  // Choose your own unique id, name, category, price, and quantity.
];

export default products;
