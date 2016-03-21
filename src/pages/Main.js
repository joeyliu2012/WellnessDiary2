import React, {
  Component,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'
import Colors from '../constants/Colors'

import TopNav from '../components/TopNav'
import TopNavLink from '../components/TopNavLink'
import Card from '../components/Card'


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
        <TopNav onPressSettings={() => null}> 
          <TopNavLink onPress={() => null} active>Today</TopNavLink>
          <TopNavLink onPress={() => null}>Yesterday</TopNavLink>
          <TopNavLink onPress={() => null}>History</TopNavLink>
        </TopNav>
        <ScrollView>
          <Card>
            <Card.Header>
              <Card.Title>Breakfast</Card.Title>
            </Card.Header>
            <Card.Body>
              
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Lunch</Card.Title>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Dinner</Card.Title>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Snacks</Card.Title>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card>
        </ScrollView>
      </View>
    )
  }
}
