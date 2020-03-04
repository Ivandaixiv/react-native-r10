import AsyncStorage from '@react-native-community/async-storage';

export const createFave = faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (e) {
    return false;
  }
};

export const deleteFave = faveId => {
  return AsyncStorage.removeItem(`${faveId}`);
};

export const queryFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allStores = await AsyncStorage.multiGet(keys);
    return allStores.filter(store => store[1].includes('faved_on'));
  } catch (e) {
    return false;
  }
};
