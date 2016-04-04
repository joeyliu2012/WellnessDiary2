import React, {
  Component,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import _ from 'lodash/fp'
import moment from 'moment'
import Images from '../constants/Images'
import Card from '../components/Card'
import CirclePlusIcon from '../components/CirclePlusIcon'


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
