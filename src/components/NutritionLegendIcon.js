import React, {
  View,
  PropTypes,
} from 'react-native'

const NutritionLegendIcon = ({
  color,
  size = 10,
}) => (
  <View
    style={{
      width: size,
      height: size,
      backgroundColor: color,
    }}
  />
)
NutritionLegendIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default NutritionLegendIcon
