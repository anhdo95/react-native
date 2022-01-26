import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Header(props) {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={props.title} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
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
    fontFamily: 'open-sans-bold',
    fontSize: 20
  }
});
