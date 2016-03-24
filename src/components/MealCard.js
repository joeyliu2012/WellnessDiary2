import React, {
  Component,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import _ from 'lodash/fp'
import moment from 'moment'
import Images from '../constants/Images'
import Card from '../components/Card'
import CirclePlusIcon from '../components/CirclePlusIcon'

import RNChart from 'react-native-chart'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chart: {
		width: 240,
		height: 140,
		alignSelf: 'center'
  }
})

function generateChartData(nutritionData) {
  const carbs = parseInt(_.get('carbs', nutritionData), 10)
  const fats = parseInt(_.get('fats', nutritionData), 10)
  const fiber = parseInt(_.get('fiber', nutritionData), 10)
  const calories = parseInt(_.get('calories', nutritionData), 10)

  return ([
    {
      name: 'BarChart',
      type: 'pie',
      data: [isNaN(carbs) ? 0 : carbs,
             isNaN(fats) ? 0 : fats,
             isNaN(fiber) ? 0 : fiber,
             isNaN(calories) ? 0 : calories],
      sliceColors: [Colors['pink'], Colors['oceanBlue'], Colors['skyBlue'], Colors['oceanGreen']]
    }
  ])
}

const xLabels = ['0','1','2','3']

const Body = ({meal}) => {
  const { photo, nutrition } = meal
  if (photo || nutrition) {
    return <Card.Body />
  }
  return (
    <Card.Body empty>
      <Image
        key='image'
        style={{ width: 20, height: 20}}
        source={Images['CirclePlus']}
      />
      <Text
        key='text'
        style={{color:'grey', padding: 8 }}>
        No food logged for {_.get('type', meal, '').toLowerCase()}
      </Text>
    </Card.Body>
  )
}

const MealCard = ({
  meal,
}, {
  openModal,
}) => (
  <TouchableOpacity onPress={() => openModal({meal})}>
    <Card backgroundImage={_.get('photo', meal)} blurred={!!_.get('photo', meal)}>
      <Card.Header>
        <Card.Title blurred={!_.isEmpty(meal)}>{_.get('type', meal)}</Card.Title>
        <CirclePlusIcon />
      </Card.Header>
      <Body meal={meal} />
            <RNChart style={styles.chart}
                chartData={generateChartData(_.get('nutrition', meal))}
                xLabels={xLabels}
             />
    </Card>
  </TouchableOpacity>
)
MealCard.propTypes = {
  meal: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
  }).isRequired,
}
MealCard.contextTypes = {
  openModal: React.PropTypes.func.isRequired,
}

export default MealCard
