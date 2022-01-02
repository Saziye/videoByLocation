import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import moment from 'moment';

export default VideoItem = ({video}) => {
  function openVideoPage() {}

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
          <Text style={styles.subtitle}>{video.snippet.channelTitle}</Text>
          <Text style={styles.title}>{video.snippet.title}</Text>
          <Text style={styles.subtitle}>
            {moment(video.snippet.publishedAt).fromNow()}
          </Text>
        </View>
        {/* Icon */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  videoCard: {
    marginVertical: 1,
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'black',
  },
  midleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  subtitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
});
