import React, {
  Component,
  ScrollView,
  AsyncStorage,
} from 'react-native'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import LoadingView from './LoadingView'
import MealCard from './MealCard'
import store from '../store'
import { fetchMeals } from '../actions/meals'


const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner']

const mapStateToProps = (date) => (state) => ({
  meals: state.meals[date],
  isNotLoading: state.loading[date],
})

const mapDispatchToProps = (date) => (dispatch) => ({
  fetch: () => dispatch(fetchMeals(date))
})

const DayViewFactory = (date) => (
  connect(
    mapStateToProps(date),
    mapDispatchToProps(date),
  )(class DayView extends Component {
    constructor(props, context) {
      super(props, context)
      this.renderMeals = _.map((meal) => <MealCard key={meal.type} meal={meal} />)
    }

    componentDidMount() {
      this.props.fetch()
    }

    render() {
      if (!this.props.isNotLoading) return <LoadingView />
      const meals = _.map((type) => _.get(type, this.props.meals) || ({ type, date }), MEAL_TYPES)
      return (
        <ScrollView>
          {this.renderMeals(meals)}
        </ScrollView>
      )
    }
  })
)


export default DayViewFactory
