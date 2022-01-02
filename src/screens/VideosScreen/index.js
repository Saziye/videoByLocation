import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchVideoAction} from '../../actions/youtubeAction';
import VideoItem from '../../components/VideoItem';

export default function VideosScreen({navigation, route}) {
  const dispatch = useDispatch();
  const youtube = useSelector(state => state.youtube);

  const [coord] = useState(route.params.coord);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  function getYoutubeVideos() {
    const data = {
      coords: coord
    };
    dispatch(fetchVideoAction(data));
  }

  function showMore() {
    setIsLoading(false);
    const data = {
        coords: coord,
        nextPageToken: youtube.nextPageToken 
      };
      dispatch(fetchVideoAction(data));
  }

  return (
    <View style={styles.container}>
      {youtube.loading && isLoading ? (
        <ActivityIndicator style={styles.indicatorContianer} size={'large'} color={'red'} />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={youtube?.videos}
          renderItem={({item, index}) => {
            return (
              <VideoItem video={item}/>
            );
          }}
          ListEmptyComponent={() => {
            return null;
          }}
          onEndReached={()=>showMore()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
