import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, Linking, StyleSheet} from 'react-native';
import moment from 'moment';

export default VideoItem = ({video}) => {
  function openVideoPage() {
    Linking.openURL(`https://www.youtube.com/embed/${video.id.videoId}`);
  }

  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      <Image
        style={styles.thumbnail}
        source={{uri: video.snippet.thumbnails.high.url || ''}}
        resizeMode={'cover'}
      />
      <View style={{position:'absolute',backgroundColor:'#000', borderRadius:10, top:10, left:15,opacity:0.8}}>
      <Text style={{color:'#fff', fontSize:11,padding:3}}>
              {moment(video.snippet.publishedAt).fromNow()}
      </Text>
      </View>
      <View
        style={{
          borderRadius: 20,
          backgroundColor: '#fff',
          opacity: 0.8,
          width: '70%',
          height: 70,
          position: 'absolute',
          alignSelf: 'center',
          bottom: -25,
          padding:5, flex:1
        }}>
        <Text style={styles.subtitle}>{video.snippet.channelTitle}</Text>
        <Text numberOfLines={2} style={styles.title}>{video.snippet.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    marginHorizontal: 10,
    marginVertical: 18,
    // borderBottomWidth: 1,
    // borderColor: 'grey',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
    //width:400,height:400, alignSelf:'center',
    overflow: 'hidden',
    borderRadius: 40,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#283D3B',
    paddingVertical: 8,
  },
  midleContainer: {
    flex: 1,
  },
  title: {
    color: '#3e3e3e',
    fontSize: 13,
    fontWeight: '400',
    width: '100%',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    alignSelf:'center'
  },
});
