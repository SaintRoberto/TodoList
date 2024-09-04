import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#000',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 10,
    color: '#000',
  },
  whiteText: {
    fontSize: 20,
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    color: '#000',
    width: Dimensions.get('screen').width * 0.65,
    borderRadius: 10,
  },
  inputContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    width: Dimensions.get('screen').width * 0.2,
    backgroundColor: '#5688ef',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: '#000',
    fontSize: 10,
  },
  removeButton: {
    paddingHorizontal: 10,
    backgroundColor: '#f33d3d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default styles;
