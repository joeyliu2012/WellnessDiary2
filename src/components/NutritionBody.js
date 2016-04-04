import React, {
  PropTypes,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { isEmpty } from 'lodash/fp'
import Colors from '../constants/Colors'
import Images from '../constants/Images'
import Card from './Card'
import NutritionLegend from './NutritionLegend'
import NutritionChart from './NutritionChart'

const styles = StyleSheet.create({
  'NutritionBody': {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const NutritionBody = ({nutrition}) => {
  if (isEmpty(nutrition)) {
    return (
      <Card.Body style={{height: 140}} empty>
        <Image
          key='image'
          style={{ width: 20, height: 20}}
          source={Images['CirclePlus']}
        />
        <Text
          key='text'
          style={{color: 'grey', padding: 8, backgroundColor: 'transparent'}}>
          Log nutrition info
      </Text>
      </Card.Body>
    )
  }
  return (
    <Card.Body>
      <View style={styles['NutritionBody']}>
        <NutritionLegend {...nutrition} />
        <NutritionChart {...nutrition} />
      </View>
    </Card.Body>
  )
}
NutritionBody.propTypes = {
  nutrition: PropTypes.object,
}

export default NutritionBody
// const xLabels = ['0','1','2','3']
// Nutritionview: {
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'space-around'
// },
// chart: {
//   flex: 1,
//   width: 240,
// height: 140,
//   alignSelf: 'center'
// },
// nutritionListing: {
//   flex: 1,
//   flexDirection: 'column',
//   alignSelf: 'flex-end',
// },
// nutritionEntry: {
//   color: Colors.text,
//   fontWeight: '400',
//   fontSize: 14,
// },

// function generateChartData(nutritionData) {
//   const carbs = parseInt(_.get('carbs', nutritionData), 10)
//   const fats = parseInt(_.get('fats', nutritionData), 10)
//   const fiber = parseInt(_.get('fiber', nutritionData), 10)
//   const calories = parseInt(_.get('calories', nutritionData), 10)

//   return ([
//     {
//       name: 'BarChart',
//       type: 'pie',
//       data: [isNaN(carbs) ? 0 : carbs,
//              isNaN(fats) ? 0 : fats,
//              isNaN(fiber) ? 0 : fiber,
//              isNaN(calories) ? 0 : calories],
//       sliceColors: [Colors['pink'], Colors['oceanBlue'], Colors['skyBlue'], Colors['oceanGreen']]
//     }
//   ])
// }

// <View style={styles.Nutritionview}>
//   <View style={styles.nutritionListing}>
//     <View style={{flexDirection:'row'}}>
//       <View style={{width: 9, height: 9, backgroundColor: Colors['pink'], alignSelf: 'center'}}></View>
//       <Text style={styles.nutritionEntry}> Carbs: {_.get('carbs', nutrition)}g </Text>
//     </View>
//     <View style={{flexDirection:'row'}}>
//       <View style={{width: 9, height: 9, backgroundColor: Colors['oceanBlue'], alignSelf: 'center'}}></View>
//       <Text style={styles.nutritionEntry}> Fats: {_.get('fats', nutrition)}g </Text>
//     </View>
//     <View style={{flexDirection:'row'}}>
//       <View style={{width: 9, height: 9, backgroundColor: Colors['skyBlue'], alignSelf: 'center'}}></View>
//       <Text style={styles.nutritionEntry}> Fiber: {_.get('fiber', nutrition)}g </Text>
//     </View>
//     <View style={{flexDirection:'row'}}>
//       <View style={{width: 9, height: 9, backgroundColor: Colors['oceanGreen'], alignSelf: 'center'}}></View>
//       <Text style={styles.nutritionEntry}> Calories: {_.get('calories', nutrition)} </Text>
//     </View>
//     <Text> </Text>
//   </View>

//   <RNChart style={styles.chart}
//       chartData={generateChartData(_.get('nutrition', meal))}
//       xLabels={xLabels}
//    />
// </View>
