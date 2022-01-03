import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, Linking, StyleSheet} from 'react-native';
import moment from 'moment';

export default VideoItem = ({video}) => {

  function openVideoPage() {
    Linking.openURL(`https://www.youtube.com/embed/${video.id.videoId}`);
  }

  return (
    <Pressable onPress={openVideoPage} style={styles.videoCard}>
      <View>
        <Image
          style={styles.thumbnail}
          source={{uri: video.snippet.thumbnails.high.url || ''}}
        />
      </View>
      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Middle container: Title, subtitle, etc. */}
        <View style={styles.midleContainer}>
          <Text style={styles.title}>{video.snippet.title}</Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{video.snippet.channelTitle}</Text>
            <Text style={styles.subtitle}>
              {moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>
        {/* Icon */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    // marginVertical: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
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
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    width: '100%',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '300',
  },
});
