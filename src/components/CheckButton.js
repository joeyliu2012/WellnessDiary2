import React, {
  Image,
  TouchableOpacity,
} from 'react-native'
import Images from '../constants/Images'

const CheckButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={Images['CheckIcon']} />
  </TouchableOpacity>
)

CheckButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
}

export default CheckButton
