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


const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner']

const mapStateToProps = (date) => (state) => ({
  meals: state.meals[date],
})

const DayViewFactory = (date) => (
  class DayView extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = { isLoading: true, meals: {} }
      this.renderMeals = _.map((meal) => <MealCard key={meal.type} meal={meal} />)
      this.fetchData = this.fetchData.bind(this)
      this.handleStoreUpdate = this.fetchData.bind(this)
      this._mounted = false
      store.subscribe(this.handleStoreUpdate)
    }

    componentDidMount() {
      this.fetchData()
      this._mounted = true
    }

    componentWillUnmount() {
      this._mounted = false
    }

    handleStoreUpdate() {
      this.fetchData()
    }

    fetchData() {
      if (this._mounted) this.setState({ isLoading: true })
      AsyncStorage.getItem(date, (err, result) => {
        if (this._mounted) {
          this.setState({
            isLoading: false,
            meals: JSON.parse(result),
          })
        }
      })
    }

    render() {
      if (this.state.isLoading) return <LoadingView />
      const meals = _.map((type) => _.get(type, this.state.meals) || ({ type, date }), MEAL_TYPES)
      return (
        <ScrollView>
          {this.renderMeals(meals)}
        </ScrollView>
      )
    }
  }
)


export default DayViewFactory
