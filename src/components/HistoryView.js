import React, {
  ActivityIndicatorIOS,
  Component,
  ScrollView,
} from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import _ from 'lodash'
import MealCard from './MealCard'
import { fetchMealHistory } from '../actions/history'

class MealHistory extends Component {

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const { history } = this.props
    const historyCards = _.map(history, (nutrition, key) =>
      <MealCard key={key} meal={{
        type: moment(key, 'YYYY-WW').format('[Week of] MMM Do'),
        nutrition
      }}
      />
    )
    return historyCards.length > 0
      ? (
        <ScrollView>
          {historyCards}
        </ScrollView>
      )
      : <ActivityIndicatorIOS />
  }
}

const mapStateToProps = ({ history }) => ({
  history,
})

const mapDispatchToProps = {
  fetch: fetchMealHistory,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealHistory)
