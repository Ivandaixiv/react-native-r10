import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Conduct = ({item}) => {
  const [spinIcon] = useState(new Animated.Value(0));
  const [textHeight, setTextHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const animate = () => {
    if (isOpen === false) {
      console.log('Opens Text');
      spinIcon.setValue(0);
      const createAnimation = (value, duration, easing, delay = 0) => {
        return Animated.timing(value, {
          toValue: 1,
          duration,
          easing,
          delay,
        });
      };
      LayoutAnimation.configureNext({
        duration: 200,
        create: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
        },
        update: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
        },
        delete: {
          type: 'linear',
          property: 'opacity', // also scaleXY
        },
      });
      Animated.parallel([createAnimation(spinIcon, 2000, Easing.ease)]).start();

      setTextHeight(100);
      setOpen(true);
    } else {
      console.log('Closes Text');
      LayoutAnimation.configureNext({
        duration: 200,
        create: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
        },
      });
      setTextHeight(0);
      setOpen(false);
    }
  };

  const spin = spinIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity
      onPress={() => {
        animate();
      }}>
      {/* TODO If true/false dispaly + or -  */}
      <Animated.View style={{transform: [{rotateY: spin}]}}>
        <MaterialCommunityIcons name="plus" />
      </Animated.View>
      <MaterialCommunityIcons name="minus" />
      <Text>{item.title}</Text>
      <Text style={{height: textHeight}}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default Conduct;
