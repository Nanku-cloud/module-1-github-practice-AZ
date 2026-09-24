import React,{useEffect,useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryStrip from '../components/CategoryStrip';
import MarketHeader from '../components/MarketHeader';
import ProductRow from '../components/ProductRow';
import {EmptyState,ErrorState,LoadingState} from '../components/RequestStates';
import {getProducts} from '../services/productApi';
export default function MarketplaceScreen(){
 const[products,setProducts]=useState([]); const[search,setSearch]=useState(''); const[selectedCategory,setSelectedCategory]=useState('all'); const[isLoading,setIsLoading]=useState(true); const[isRefreshing,setIsRefreshing]=useState(false); const[errorMessage,setErrorMessage]=useState('');
 // TODO 5: create async loadProducts(isManualRefresh=false). Use loading/refreshing, clear error, await getProducts(), setProducts(), catch, finally.
 // TODO 6: useEffect(() => { loadProducts(); }, []);
 const categories=['all',...Array.from(new Set(products.map(p=>p.category))).slice(0,8)];
 const filteredProducts=products.filter(p=>p.title.toLowerCase().includes(search.trim().toLowerCase())&&(selectedCategory==='all'||p.category===selectedCategory));
 if(isLoading)return <LoadingState/>;
 if(errorMessage!==''&&products.length===0)return <ErrorState message={errorMessage} onRetry={()=>loadProducts()}/>;
 return <View style={s.screen}><MarketHeader search={search} onChangeSearch={setSearch} onRefresh={()=>loadProducts(true)} isRefreshing={isRefreshing}/><CategoryStrip categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>{errorMessage!==''&&<View style={s.banner}><Text style={s.bannerText}>{errorMessage}</Text></View>}<FlatList data={filteredProducts} keyExtractor={i=>i.id.toString()} renderItem={({item})=><ProductRow product={item}/>} ListHeaderComponent={<View style={s.head}><Text style={s.eyebrow}>REMOTE DATA</Text><Text style={s.heading}>Live marketplace</Text><Text style={s.sub}>These product rows come from a remote API, not a hard-coded local array.</Text></View>} ListEmptyComponent={<EmptyState/>}/></View>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:'#fff'},banner:{backgroundColor:'#fff1f2',borderBottomWidth:1,borderBottomColor:'#fecdd3',padding:10},bannerText:{color:'#9f1239',fontWeight:'700'},head:{paddingHorizontal:16,paddingTop:18,paddingBottom:9},eyebrow:{fontSize:11,fontWeight:'900',letterSpacing:1,color:'#146eb4'},heading:{marginTop:4,fontSize:27,fontWeight:'900',letterSpacing:-.8},sub:{marginTop:6,color:'#6b7280',lineHeight:19}});