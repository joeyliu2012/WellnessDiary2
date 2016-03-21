import React, {
  Image,
  StyleSheet,
} from 'react-native'
import Images from '../constants/Images'

const styles = StyleSheet.create({
  'CirclePlusIcon': {
    width: 20,
    height: 20,
  }
})

const CirclePlusIcon = () => (
  <Image
    source={Images['CirclePlus']}
    style={styles['CirclePlusIcon']}
  />
)

export default CirclePlusIcon
