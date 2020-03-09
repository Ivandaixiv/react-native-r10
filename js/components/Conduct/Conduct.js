import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
  Easing,
  View,
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
  const [plusOpacity] = useState(new Animated.Value(0));
  const [minusOpacity] = useState(new Animated.Value(0));
  const [textHeight, setTextHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const animate = () => {
    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
        useNativeDriver: true,
      });
    };

    if (isOpen === false) {
      console.log('Opens Text');
      spinIcon.setValue(0);
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
      setTextHeight(100);
      Animated.parallel([
        createAnimation(spinIcon, 500, Easing.ease),
        createAnimation(plusOpacity, 500, Easing.ease),
        createAnimation(minusOpacity, 500, Easing.ease),
      ]).start();
      setOpen(true);
    } else {
      console.log('Closes Text');
      spinIcon.setValue(0);
      LayoutAnimation.configureNext({
        duration: 200,
        create: {
          type: 'spring',
          property: 'scaleXY',
          springDamping: 0.7,
        },
      });
      Animated.parallel([
        createAnimation(spinIcon, 500, Easing.ease),
        createAnimation(plusOpacity, 500, Easing.ease),
        createAnimation(minusOpacity, 500, Easing.ease),
      ]).start();
      minusOpacity.setValue(0);

      plusOpacity.setValue(0);
      setTextHeight(0);
      setOpen(false);
    }
  };

  const spin = spinIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const plusFade = plusOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const minusFade = minusOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <TouchableOpacity
      onPress={() => {
        animate();
      }}>
      <View style={styles.conductContainer}>
        <View style={styles.iconContainer}>
          <Animated.View
            style={{
              ...styles.animatedIcon,
              opacity: plusFade,
              transform: [{rotate: spin}, {perspective: 1000}],
            }}>
            <MaterialCommunityIcons color="#9963ea" name="plus" />
          </Animated.View>
          <Animated.View
            style={{
              ...styles.animatedIcon,
              opacity: minusFade,
              transform: [{rotate: spin}, {perspective: 1000}],
            }}>
            <MaterialCommunityIcons color="#9963ea" name="minus" />
          </Animated.View>
        </View>
        <Text style={styles.conduct}>{item.title}</Text>
      </View>
      <Text style={{height: textHeight}}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default Conduct;
