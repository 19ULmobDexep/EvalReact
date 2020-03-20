import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
  },
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'grey',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'silver',
    // borderRadius: 10,
  },
  validButton: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
  listItem: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    minHeight: 100,
  },
  avatar : {
    width:50,
    height: 50,
    borderRadius: 25,
  }
});
