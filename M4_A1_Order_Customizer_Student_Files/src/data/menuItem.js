const menuItem = {
  id: 'meal-101',
  name: 'Signature Stack Burger',
  description: 'Double beef, cheddar, lettuce, tomato, pickles, and house sauce.',
  basePrice: 10.99,
  imageSource: require('../assets/images/signature-burger.png'),
  addOns: [
    { id: 'addon-bacon', label: 'Applewood Bacon', price: 1.75 },
    { id: 'addon-cheese', label: 'Extra Cheddar', price: 1.25 },
    { id: 'addon-avocado', label: 'Avocado', price: 2.00 },
    { id: 'addon-jalapeno', label: 'Jalapeños', price: 0.75 },

    // TODO 1: Add your original add-on from Step 2.
  ],
};

export default menuItem;
