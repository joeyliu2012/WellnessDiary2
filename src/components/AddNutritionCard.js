import React, {
  Component,
  StyleSheet,
  PropTypes,
  Text,
  TextInput,
  View,
} from 'react-native'
import Colors from '../constants/Colors'
import Card from './Card'

const styles = StyleSheet.create({
  'AddNutritionCard-row': {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'AddNutritionCard-text': {
    backgroundColor: 'transparent',
    width: 60,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
  },
  'AddNutritionCard-input': {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    height: 20,
  },
  'AddNutritionCard-inputBorder': {
    flex: 1,
    borderColor: 'white',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
})

export default class AddNutritionCard extends Component {
  static propTypes = {

  };

  constructor(props, context) {
    super(props, context)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  parseForValue(v) {
    return v ? v.toString() : ''
  }

  handleInputChange(field) {
    return (text) => {
      this.props.onUpdateNutrition({
        [field]: _.toNumber(text),
      })
    }
  }

  render() {
    const { nutrition } = this.props
    return (
      <Card>
        <View style={styles['AddNutritionCard-row']}>
          <Text style={styles['AddNutritionCard-text']}>Calories</Text>
          <View style={styles['AddNutritionCard-inputBorder']}>
            <TextInput
              style={styles['AddNutritionCard-input']}
              keyboardType="numeric"
              value={this.parseForValue(nutrition.calories)}
              onChangeText={this.handleInputChange('calories')}
            />
          </View>
        </View>
        <View style={styles['AddNutritionCard-row']}>
          <Text style={styles['AddNutritionCard-text']}>Carbs</Text>
          <View style={styles['AddNutritionCard-inputBorder']}>
            <TextInput
              style={styles['AddNutritionCard-input']}
              keyboardType="numeric"
              value={this.parseForValue(nutrition.carbs)}
              onChangeText={this.handleInputChange('carbs')}
            />
          </View>
        </View>
        <View style={styles['AddNutritionCard-row']}>
          <Text style={styles['AddNutritionCard-text']}>Fats</Text>
          <View style={styles['AddNutritionCard-inputBorder']}>
            <TextInput
              style={styles['AddNutritionCard-input']}
              keyboardType="numeric"
              value={this.parseForValue(nutrition.fats)}
              onChangeText={this.handleInputChange('fats')}
            />
          </View>
        </View>
        <View style={styles['AddNutritionCard-row']}>
          <Text style={styles['AddNutritionCard-text']}>Fiber</Text>
          <View style={styles['AddNutritionCard-inputBorder']}>
            <TextInput
              style={styles['AddNutritionCard-input']}
              keyboardType="numeric"
              value={this.parseForValue(nutrition.fiber)}
              onChangeText={this.handleInputChange('fiber')}
            />
          </View>
        </View>
        <View style={styles['AddNutritionCard-row']}>
          <Text style={styles['AddNutritionCard-text']}>Protein</Text>
          <View style={styles['AddNutritionCard-inputBorder']}>
            <TextInput
              style={styles['AddNutritionCard-input']}
              keyboardType="numeric"
              value={this.parseForValue(nutrition.protein)}
              onChangeText={this.handleInputChange('protein')}
            />
          </View>
        </View>
      </Card>
    )
  }
}

