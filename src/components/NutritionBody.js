import React, {
  PropTypes,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import _, { isEmpty } from 'lodash/fp'
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
  if (_.isEmpty(_.pick(['protein','fats','carbs','fiber'], nutrition))) {
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
          Add nutrition info
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
