import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 50,
    fontSize: 18,
  },
  speaker: {
    margin: 15,
  },
  close: {
    marginTop: 50,
    marginLeft: 20,
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  speakerName: {
    fontSize: 26,
    alignSelf: 'center',
    margin: 15,
  },
  bio: {
    lineHeight: 30,
  },
  buttonParent: {
    marginTop: 25,
    width: 250,
    alignSelf: 'center',
  },
  button: {
    borderRadius: 25,
  },
});
export default styles;
