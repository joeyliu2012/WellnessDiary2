import React, {
  Component,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import _ from 'lodash/fp'
import Images from '../constants/Images'
import SharedStyle from '../constants/SharedStyle'
import Card from '../components/Card'
import NutritionBody from '../components/NutritionBody'
import CirclePlusIcon from '../components/CirclePlusIcon'

const styles = StyleSheet.create({
  'MealCard--empty-text': {
    color: 'grey',
    padding: 8,
    backgroundColor: 'transparent',
  }
})

const Body = ({meal}) => {
  const { photo, nutrition } = meal
  if (!_.isEmpty(photo) || !_) {
    return (
      <NutritionBody nutrition={nutrition} />
    )
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
        style={styles['MealCard--empty-text']}>
        Nothing logged for {_.get('type', meal, '').toLowerCase()}
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
    <Card
      backgroundImage={!_.isEmpty(meal.photo) && _.get('photo', meal)}
      blurred={!_.isEmpty(meal.photo) /*&& !_.isEmpty(meal.nutrition)*/}
    >
      <Card.Header>
        <Card.Title
          shaddow={!_.isEmpty(meal.photo)}
        >
          {_.get('type', meal)}
        </Card.Title>
        <CirclePlusIcon />
      </Card.Header>
      <Body meal={meal} />
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
