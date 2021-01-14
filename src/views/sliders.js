import React, { useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';

import { Header, SubHeader } from './header';

const Sliders = () => {
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);

  return (
    <>
      <Header title="Slider" />
      <SubHeader title="Slider Horizontal" />
      <View style={styles.contentView}>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={50}
          minimumValue={20}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 10, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color="#f50"
              />
            ),
          }}
        />
        <Text>Value: {value}</Text>
      </View>
      <SubHeader title="Slider Vertical" />
      <View style={styles.verticalContent}>
        <Slider
          value={vertValue}
          onValueChange={setVertValue}
          maximumValue={50}
          minimumValue={20}
          step={1}
          orientation="vertical"
          thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
          thumbProps={{
            Component: Animated.Image,
            source: {
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            },
          }}
        />
      </View>
      <Text>Value: {vertValue}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  verticalContent: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default Sliders;
