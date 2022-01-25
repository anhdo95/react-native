import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#cf26aa',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    color: '#fff',
    fontWeight: 'bold'
  }
});
