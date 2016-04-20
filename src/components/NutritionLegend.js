import React, {
  PropTypes,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Colors from '../constants/Colors'
import SharedStyle from '../constants/SharedStyle'
import NutritionLegendIcon from './NutritionLegendIcon'

const styles = StyleSheet.create({
  'NutritionLegend': {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  'NutritionLegend-row': {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
  },
  'NutritionLegend-text': {
    backgroundColor: 'transparent',
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: '500',
    color: Colors.text,
    ...SharedStyle.textShadow,
  }
})

const NutritionLegend = ({
  carbs,
  fats,
  fiber,
  protein,
}) => (
  <View style={styles['NutritionLegend']}>
    <View style={styles['NutritionLegend-row']}>
      <NutritionLegendIcon color={Colors.pink} />
      <Text style={styles['NutritionLegend-text']}>Carbs: {carbs || 0}g</Text>
    </View>
    <View style={styles['NutritionLegend-row']}>
      <NutritionLegendIcon color={Colors.oceanBlue} />
      <Text style={styles['NutritionLegend-text']}>Fats: {fats || 0}g</Text>
    </View>
    <View style={styles['NutritionLegend-row']}>
      <NutritionLegendIcon color={Colors.skyBlue} />
      <Text style={styles['NutritionLegend-text']}>Fiber: {fiber || 0}g</Text>
    </View>
    <View style={styles['NutritionLegend-row']}>
      <NutritionLegendIcon color={Colors.oceanGreen} />
      <Text style={styles['NutritionLegend-text']}>Protein: {protein || 0}g</Text>
    </View>
  </View>
)
NutritionLegend.propTypes = {
  carbs: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  fiber: PropTypes.number.isRequired,
  protein: PropTypes.number.isRequired,
}

export default NutritionLegend
