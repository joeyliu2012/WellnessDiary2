import React, {
  Component,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native'
import Colors from '../constants/Colors'
import Images from '../constants/Images'

import TopNav from '../components/TopNav'
import TopNavLink from '../components/TopNavLink'
import MealCard from '../components/MealCard'
import Card from '../components/Card'


const styles = StyleSheet.create({
  'Main': {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.background,
  },
  'Main-scroll': {

  },
})

export default class Main extends Component {
  render() {
    return (
      <View style={styles['Main']}>
        <TopNav onPressSettings={() => null}> 
          <TopNavLink onPress={() => null} active>Today</TopNavLink>
          <TopNavLink onPress={() => null}>Yesterday</TopNavLink>
          <TopNavLink onPress={() => null}>History</TopNavLink>
        </TopNav>
        <ScrollView>
          <MealCard title="Breakfast"/>
          <MealCard title="Lunch"/>
          <MealCard title="Dinner"/>
          <MealCard title="Snacks"/>
        </ScrollView>
      </View>
    )
  }
}
