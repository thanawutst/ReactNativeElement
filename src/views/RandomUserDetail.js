import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, Switch } from 'react-native';
import _ from 'lodash';
import { Text, ListItem, Avatar, Icon, Badge } from 'react-native-elements';
// import { axios } from 'react-native-axios';
import axios from 'axios';
import { Header } from './header';
import colors from '../config/colors';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from '../components/LinearGradient';

const dataList = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
    subtitle: 'Vice President',
    linearGradientColors: ['#FF9800', '#F44336'],
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
    subtitle: 'Vice Chairman',
    linearGradientColors: ['#3F51B5', '#2196F3'],
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
    subtitle: 'CEO',
    linearGradientColors: ['#FFD600', '#FF9800'],
  },
  {
    name: 'Christy Thomas',
    avatar_url:
      'https://randomuser.me/api/portraits/women/48.jpg',
    subtitle: 'Lead Developer',
    linearGradientColors: ['#4CAF50', '#8BC34A'],
  },
  {
    name: 'Melissa Jones',
    avatar_url:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
    subtitle: 'CTO',
    linearGradientColors: ['#F44336', '#E91E63'],
  },
];

const log = () => console.log('this is an example method');


const renderRow = ({ item }) => {
  return (
    <ListItem onPress={log} bottomDivider>
      <Icon name={item.icon} />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

const GetRandomUser = () => {
  axios.get('https://randomuser.me/api/')
    .then(function (response) {
      console.log(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const RandomUserDetail = () => {
  useEffect(() => {
    GetRandomUser();
  }, [])
  return (
    <>
      <Header title="Random User" />
      {/* <FlatList
        ListHeaderComponent={ */}
      <ScrollView>
        <View style={styles.list}>
          {dataList.map((l, i) => (
            <ListItem
              bottomDivider
              component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95}
              key={i}
              linearGradientProps={{
                colors: l.linearGradientColors,
                start: [1, 0],
                end: [0.2, 0],
              }}
              ViewComponent={LinearGradient}
              containerStyle={{
                marginHorizontal: 16,
                marginVertical: 8,
                borderRadius: 8,
              }}
              onPress={log}
            >
              <Avatar rounded source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  {l.name}
                </ListItem.Title>
                <ListItem.Subtitle style={[{ color: 'white' }]}>
                  {l.subtitle}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron color="white" />
            </ListItem>
          ))}
        </View>
      </ScrollView>
      {/* }
        data={list1}
        keyExtractor={(a) => a.title}
        renderItem={renderRow}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'white',
  },
});

export default RandomUserDetail;
