import React, {
  ScrollView,
  View,
  Text,
  Component,
  TouchableOpacity,
  Alert,
} from 'react-native'

const Row = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const Label = ({children, onPress}) => (
  <Text
    style={{
      color: 'white',
      fontSize: 18,
      fontWeight: '700',
    }}
  >
    {children}
  </Text>
)

const Value = ({children}) => (
  <Text
    style={{
      color: 'white',
      fontSize: 18,
      fontWeight: '400',
    }}
  >
    {children}
  </Text>
)

export default class Settings extends Component {
  static contextTypes = {
    persistor: React.PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context)
    this.handlePressDeleteAll = this.handlePressDeleteAll.bind(this)
  }

  handlePressMissingFeature(f) {
    return () => {
      Alert.alert(
        'Coming soon',
        `${f} has not been added yet.`,
        [{text: 'Dismiss', onPress: () => null}]
      )
    }
  }

  handlePressDeleteAll() {
    Alert.alert(
      'WARNING',
      'Pressing ERASE will delete ALL stored data including photos, nutrition informaion, and location data',
      [
        { text: 'Canel', onPress: () => null },
        { text: 'ERASE', onPress: this.context.persistor.purgeAll },
      ]
    )
  }

  render() {
    return (
      <ScrollView>
        <Row onPress={this.handlePressMissingFeature('Dropbox sync')}>
          <Label>Dropbox Sync</Label>
          <Value>Off</Value>
        </Row>
        <Row onPress={this.handlePressDeleteAll}>
          <Label>Delete all data</Label>
          <Value>DEBUG</Value>
        </Row>
      </ScrollView>
    )
  }
}
