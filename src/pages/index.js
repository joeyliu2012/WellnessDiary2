import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native'

import Main from './Main'
import Modal from './Modal'

const styles = StyleSheet.create({
  Index: {
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
      modalOpen: false,
      modalProps: {},
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  getChildContext() {
    return {
      openModal: this.handleOpenModal,
    }
  }

  handleOpenModal(modalProps) {
    this.setState({ modalOpen: true, modalProps })
  }

  handleCloseModal() {
    this.setState({ modalOpen: false, mealType: {} })
  }

  render() {
    const { modalOpen, modalProps } = this.state
    return (
      <View style={styles.Index}>
        <Main />
        {modalOpen && <Modal {...modalProps} closeModal={this.handleCloseModal} />}
      </View>
    )
  }
}

