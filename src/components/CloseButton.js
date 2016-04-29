import React, {
  Image,
  TouchableOpacity,
} from 'react-native'
import Images from '../constants/Images'

const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={Images['CloseIcon']} />
  </TouchableOpacity>
)

CloseButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
}

export default CloseButton
