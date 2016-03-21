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
import CirclePlusIcon from '../components/CirclePlusIcon'

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
}, {
  openModal,
}) => (
  <TouchableOpacity onPress={() => openModal(title)}>
    <Card backgroundImage={_.get(meal, 'photo')} blurred={!!_.get(meal, 'photo')}>
      <Card.Header>
        <Card.Title blurred={!_.isEmpty(meal)}>{title}</Card.Title>
        <CirclePlusIcon />
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
MealCard.contextTypes = {
  openModal: React.PropTypes.func,
}

export default MealCard
