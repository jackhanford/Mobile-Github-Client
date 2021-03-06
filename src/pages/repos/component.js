import React, { PureComponent } from 'react'
import sortOn from 'sort-on'
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native'

import { RepoItem } from '../../components'

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

export class Repos extends PureComponent {

  visitRepo = repo => {
    const { navigator } = this.props

    navigator.push({
      screen: 'githubnative.Repo',
      title: repo.name || repo.full_name,
      animated: true
    })
  }

  render () {
    const { list, loading, fetchRepos, navigator } = this.props

    return (
      <View style={styles.list}>
        <ScrollView
          style={{height: 0}}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={fetchRepos}
              tintColor='black'
              title='Loading...'
              titleColor='black'
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor='#ffff00'
            />
          }
        >
          {
            list.map((n, index) => (
              <TouchableOpacity onPress={() => this.visitRepo(n)} key={index}>
                <RepoItem
                  repo={n}
                />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

export default Repos
