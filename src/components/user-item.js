import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ava: {
    height: 36,
    width: 36,
    borderRadius: 4,
    marginRight: 10
  }
})

// onPress={() => this.visitProfile(ti.actor)}
export const UserItem = ({ user }) => (
  <View style={styles.item}>
    <Image
      source={{uri: user.avatar_url}}
      style={styles.ava}
    />
    <Text style={styles.title}>{user.login}</Text>
  </View>
)

export default UserItem
