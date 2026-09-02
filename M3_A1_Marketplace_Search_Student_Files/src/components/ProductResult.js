import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/theme';

export default function ProductResult({ id, name, rating, reviewCount, price, quantity, delivery, imageSource, inCart, onAddToCart }) {
  // TODO 2: Add the availability logic from Step 3 of the README.
  const unavailable = false;
  const lowStock = false;
  const availability = 'In Stock';

  return (
    <View style={styles.row}>
      <View style={styles.imageShell}>
        <Image accessibilityLabel={`${name} product`} resizeMode="contain" source={imageSource} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={3}>{name}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <View style={styles.stars}>{[0,1,2,3,4].map((n)=><Ionicons key={n} name="star" size={13} color="#de7921" />)}</View>
          <Text style={styles.reviews}>{reviewCount.toLocaleString()}</Text>
        </View>
        <View style={styles.priceRow}><Text style={styles.dollar}>$</Text><Text style={styles.price}>{Math.floor(price)}</Text><Text style={styles.cents}>{price.toFixed(2).split('.')[1]}</Text></View>
        <Text style={styles.delivery}>{delivery}</Text>
        <Text style={[styles.availability, unavailable?styles.unavailable:lowStock?styles.lowStock:styles.inStock]}>{availability}</Text>
        <Pressable disabled={unavailable || inCart} onPress={() => { /* TODO 3: connect onAddToCart(id) */ }} style={({pressed})=>[styles.button,(unavailable||inCart)&&styles.buttonDisabled,pressed&&!unavailable&&!inCart&&styles.buttonPressed]}>
          <Text style={styles.buttonText}>{unavailable?'Unavailable':inCart?'Added to Cart':'Add to Cart'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  row:{backgroundColor:'#fff',borderBottomColor:colors.line,borderBottomWidth:1,flexDirection:'row',paddingHorizontal:14,paddingVertical:15},
  imageShell:{alignItems:'center',backgroundColor:'#f7f7f7',height:154,justifyContent:'center',width:145}, image:{height:136,width:136}, info:{flex:1,paddingLeft:14},
  name:{color:colors.text,fontSize:15,lineHeight:20}, ratingRow:{alignItems:'center',flexDirection:'row',marginTop:6},rating:{color:'#1670a5',fontSize:12,marginRight:4},stars:{flexDirection:'row'},reviews:{color:'#1670a5',fontSize:12,marginLeft:5},
  priceRow:{alignItems:'flex-start',flexDirection:'row',marginTop:7},dollar:{fontSize:12,marginTop:4},price:{fontSize:25,lineHeight:27},cents:{fontSize:12,marginTop:3}, delivery:{color:colors.text,fontSize:12,marginTop:4},
  availability:{fontSize:12,fontWeight:'700',marginTop:5},inStock:{color:colors.success},lowStock:{color:colors.warning},unavailable:{color:colors.unavailable},
  button:{alignItems:'center',alignSelf:'flex-start',backgroundColor:colors.accent,borderColor:'#f2c200',borderRadius:18,borderWidth:1,marginTop:10,minWidth:122,paddingHorizontal:16,paddingVertical:8},buttonPressed:{backgroundColor:colors.accentPressed},buttonDisabled:{backgroundColor:'#ececec',borderColor:'#d4d4d4'},buttonText:{color:colors.text,fontSize:12,fontWeight:'600'}
});
