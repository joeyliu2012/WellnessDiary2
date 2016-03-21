import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native'

import Main from './Main'
import Modal from './Modal'

const styles = StyleSheet.create({
  'Index': {
    flex: 1,
  },
})

export default class Index extends Component {
  static childContextTypes = {
    openModal: React.PropTypes.func,
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      modalOpen: true,
      mealType: null,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  getChildContext() {
    return {
      openModal: this.handleOpenModal,
    }
  }

  handleOpenModal(mealType) {
    this.setState({ modalOpen: true, mealType })
  }

  handleCloseModal() {
    this.setState({ modalOpen: false, mealType: null })
  }

  render() {
    const { modalOpen } = this.state
    return (
      <View style={styles['Index']}>
        <Main openModal={this.handleOpenModal} />
        {modalOpen && <Modal mealType={this.state.mealType} closeModal={this.handleCloseModal} />}
      </View>
    )
  }
}

