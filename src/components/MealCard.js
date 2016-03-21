import React, {
  Component,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Images from '../constants/Images'
import Card from '../components/Card'

const MealCard = ({
  title,
}) => (
  <TouchableOpacity onPress={() => null}>
    <Card>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Image source={Images['CirclePlus']} style={{ width: 20, height: 20 }}  />
      </Card.Header>
      <Card.Body empty>
        <Text style={{color:'grey'}}>No food logged for {title.toLowerCase()}</Text>
      </Card.Body>
    </Card>
  </TouchableOpacity>
)
MealCard.propTypes = {
  title: React.PropTypes.string,
}

export default MealCard
