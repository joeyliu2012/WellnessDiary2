import React, {
  StyleSheet,
} from 'react-native'
import Colors from '../constants/Colors'
import RNChart from 'react-native-chart'

const styles = StyleSheet.create({
  'NutritionChart': {
    justifyContent: 'flex-end',
    width: 140,
  },
})

const NutritionChart = ({
  calories,
  fats,
  fiber,
  protein,
  carbs,
}, context) => (
  <RNChart
    style={styles['NutritionChart']}
    xLabels={['0', '1', '2', '3']}
    chartData={[{
      name: 'BarChart',
      type: 'pie',
      data: [
        carbs || 0,
        fats || 0,
        fiber || 0,
        protein || 0,
      ],
      sliceColors: [Colors.pink, Colors.oceanBlue, Colors.skyBlue, Colors.oceanGreen]
    }]}
  />
)

export default NutritionChart
