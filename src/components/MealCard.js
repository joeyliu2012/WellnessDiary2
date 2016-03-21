import React, {
  Component,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import _ from 'lodash'
import Images from '../constants/Images'
import Card from '../components/Card'

const EmptyState = ({title}) => [
  <Image
    key='image'
    style={{ width: 20, height: 20}}
    source={Images['CirclePlus']}
  />,
  <Text
    key='text'
    style={{color:'grey', padding: 8 }}>
    No food logged for {title.toLowerCase()}
  </Text>
]

const MealCard = ({
  title,
  meal,
}) => (
  <TouchableOpacity onPress={() => null}>
    <Card backgroundImage={_.get(meal, 'photo')}>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Image source={Images['CirclePlus']} style={{ width: 20, height: 20 }}  />
      </Card.Header>
      <Card.Body empty={_.isEmpty(meal)}>
        {_.isEmpty(meal) && EmptyState({title})}
      </Card.Body>
    </Card>
  </TouchableOpacity>
)
MealCard.propTypes = {
  title: React.PropTypes.string,
}

export default MealCard
