import React,{useEffect,useRef,useState} from 'react';
import {Animated,FlatList,Pressable,SafeAreaView,ScrollView,StyleSheet,Text,View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import PostCard from '../components/PostCard'; import StoryBubble from '../components/StoryBubble';
import {posts,stories} from '../data/socialData'; import {colors} from '../styles/theme';
export default function FeedScreen(){
 const [activeTab,setActiveTab]=useState('Feed');
 // TODO 4: Create feed entrance Animated.Value(s). Choose fade, slide, or both and be ready to explain why.
 useEffect(()=>{
   // TODO 5: Start the entrance animation here. Keep it short and purposeful.
 },[]);
 return <SafeAreaView style={s.screen}>
  <View style={s.topBar}><Text style={s.brand}>SOCIAL REEL</Text><View style={s.topActions}><Ionicons name='add-circle-outline' size={27} color={colors.text}/><Ionicons name='paper-plane-outline' size={27} color={colors.text}/></View></View>
  <View style={s.tabs}>{['Feed','Reels'].map(tab=><Pressable key={tab} onPress={()=>setActiveTab(tab)} style={[s.tab,activeTab===tab&&s.activeTab]}><Text style={[s.tabText,activeTab===tab&&s.activeTabText]}>{tab}</Text></Pressable>)}</View>
  {activeTab==='Feed' ?
   /* TODO 6: Wrap the feed area in Animated.View and connect your entrance style. Do NOT animate bottom navigation. */
   <View style={s.flex}><FlatList data={posts} keyExtractor={i=>i.id} renderItem={({item})=><PostCard post={item}/>} ListHeaderComponent={<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.stories}>{stories.map(st=><StoryBubble key={st.id} story={st}/>)}</ScrollView>} showsVerticalScrollIndicator={false}/></View>
   : <View style={s.reels}><Ionicons name='play-circle-outline' size={58} color={colors.accent}/><Text style={s.reelsTitle}>Reels Motion Lab</Text><Text style={s.reelsText}>Think about how short-form video should enter, pause, resume, load, and respond to touch. Your next assignment will build the full video flow.</Text><View style={s.think}><Text style={s.thinkTitle}>THINK BEFORE YOU ANIMATE</Text><Text style={s.thinkText}>What does the movement communicate? Would the user understand the action without it? Is it short enough that it does not slow the experience down?</Text></View></View>}
  <View style={s.bottom}><Ionicons name='home' size={25} color={colors.text}/><Ionicons name='search-outline' size={25} color={colors.text}/><Ionicons name='add-circle-outline' size={28} color={colors.text}/><Ionicons name='play-circle-outline' size={26} color={colors.text}/><Ionicons name='person-circle-outline' size={27} color={colors.text}/></View>
 </SafeAreaView>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:colors.bg},flex:{flex:1},topBar:{height:58,paddingHorizontal:16,borderBottomWidth:1,borderBottomColor:colors.line,flexDirection:'row',alignItems:'center'},brand:{color:colors.text,fontSize:21,fontWeight:'900',letterSpacing:1.3,flex:1},topActions:{flexDirection:'row',gap:18},tabs:{flexDirection:'row',borderBottomWidth:1,borderBottomColor:colors.line},tab:{flex:1,paddingVertical:13,alignItems:'center'},activeTab:{borderBottomWidth:2,borderBottomColor:colors.text},tabText:{color:colors.muted,fontWeight:'800'},activeTabText:{color:colors.text},stories:{paddingHorizontal:14,paddingVertical:15,borderBottomWidth:1,borderBottomColor:colors.line},reels:{flex:1,padding:28,justifyContent:'center',alignItems:'center'},reelsTitle:{color:colors.text,fontSize:28,fontWeight:'900',marginTop:14},reelsText:{color:colors.muted,textAlign:'center',lineHeight:22,marginTop:9,maxWidth:520},think:{marginTop:24,backgroundColor:colors.panel,borderWidth:1,borderColor:colors.line,borderRadius:14,padding:16,maxWidth:520},thinkTitle:{color:colors.accent,fontSize:12,fontWeight:'900',letterSpacing:1.1},thinkText:{color:colors.text,marginTop:7,lineHeight:21},bottom:{height:58,paddingHorizontal:24,borderTopWidth:1,borderTopColor:colors.line,backgroundColor:colors.bg,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}});
