import React, {
  Component,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'
import TopNav from '../components/TopNav'
import TopNavLink from '../components/TopNavLink'

import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  'Main': {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: Colors.background,
  },
})

export default class Main extends Component {
  render() {
    return (
      <View style={styles['Main']}>
        <TopNav> 
          <TopNavLink onPress={() => null} active>Today</TopNavLink>
          <TopNavLink onPress={() => null}>Yesterday</TopNavLink>
          <TopNavLink onPress={() => null}>History</TopNavLink>
        </TopNav>
        <ScrollView>

        </ScrollView>
      </View>
    )
  }
}
