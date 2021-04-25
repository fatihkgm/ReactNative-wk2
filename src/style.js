import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#f00',
  },
  textStyle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },

  header: {
    backgroundColor: '#ff0',
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },

  main: {
    flexDirection: 'row',
    backgroundColor: '#0f0',
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },

  side: {
    backgroundColor: '#f00',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#0f0',
    flex: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },

  footer: {
    backgroundColor: '#00f',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
