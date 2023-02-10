import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ title = 'Find The Cost', onPress }) {


        return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      );

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'grey',
    marginLeft: 120,
    marginRight: 120,

  },
  text: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'white',
  },
});
