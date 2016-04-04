import React, {
  Component,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native'
import _ from 'lodash/fp'
import SharedStyle from '../constants/SharedStyle'
import Images from '../constants/Images'
import PagesMap from '../constants/PagesMap'

import TopNav from '../components/TopNav'
import TopNavLink from '../components/TopNavLink'
import MealCard from '../components/MealCard'
import Card from '../components/Card'

const styles = StyleSheet.create({
  'Main': {
    flex: 1,
    ...SharedStyle.page,
  },
})

export default class Main extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      currentPage: _.head(_.keys(PagesMap)),
    }
    this.handleTopNavLinkPress = this.handleTopNavLinkPress.bind(this)
    this.renderTopNavLink = this.renderTopNavLink.bind(this)
    this.renderTopNavLinks = _.map(this.renderTopNavLink) // is this too tricky?
  }

  handleTopNavLinkPress(toPage) {
    return () => {
      this.setState({ currentPage: toPage })
    }
  }

  renderTopNavLink(page, idx) {
    return (
      <TopNavLink
        key={`${page}-${idx}`}
        onPress={this.handleTopNavLinkPress(page)}
        active={page === this.state.currentPage}
      >
        {page}
      </TopNavLink>
    )
  }

  render() {
    const { currentPage } = this.state
    return (
      <View style={styles['Main']}>
        <TopNav onPressSettings={this.handleTopNavLinkPress('Settings')}> 
          {this.renderTopNavLinks(_.slice(0, 3, _.keys(PagesMap)))}
        </TopNav>
        {PagesMap[currentPage]()}
      </View>
    )
  }
}
