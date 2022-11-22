import { StyleSheet } from 'react-native';

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign:'center'
  
  },
  texts: {
    fontSize:18,
    fontWeight:'bold',
    color:'green'
  }, 
  alingViews:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const viewChilds = StyleSheet.create({
  views:{
    width: '80%',
    marginLeft: '5%',
    marginTop:10,
    borderRadius:10
  }
})
  export { styles1, viewChilds}