import { AsyncStorage } from 'react-native';

async function set(key, payload) {
  try {
    let serializedPayload = JSON.stringify(payload);
    await AsyncStorage.setItem(key, serializedPayload);
  } catch (error) {
    console.log(error);
  }
};

async function get(key) {
  try {
    const serializedPayload = await AsyncStorage.getItem(key);
    if (serializedPayload == null) { return undefined }

    return JSON.parse(serializedPayload);

  } catch (error) { return undefined }
};

export default localStorage = {
  set: set,
  get: get
}