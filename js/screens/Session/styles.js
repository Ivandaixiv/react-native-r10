import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
  },
  time: {
    color: '#cf392a',
    marginBottom: 10,
  },
  grayText: {
    color: '#999999',
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    padding: 5,
    alignSelf: 'center',
    color: 'white',
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
    paddingBottom: 25,
    marginTop: 20,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  buttonParent: {
    marginTop: 25,
    width: 200,
    alignSelf: 'center',
  },
  button: {
    borderRadius: 25,
  },
});
export default styles;
