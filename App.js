import React from 'react'
import { Dimensions, StyleSheet, ScrollView, View, Keyboard } from 'react-native'
import I18n from 'ex-react-native-i18n'
import { Provider, connect } from 'react-redux';

import store from 'redux/store'
import Loading from 'components/loading/Loading'
import Router from 'components/router/Router'

class App extends React.Component {
  state = {
    keyboardHeight: 0
  }

  componentWillMount() {
    I18n.locale = 'fr'
    I18n.initAsync()
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this))
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow(e) {
    this.setState({ keyboardHeight: e.endCoordinates.height })
  }

  _keyboardDidHide(e) {
    this.setState({ keyboardHeight: 0 })
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        height: Dimensions.get('window').height - this.state.keyboardHeight,
        paddingTop: 26,
        // justifyContent: 'center',
      },
      resizeContainer: {
        height: Dimensions.get('window').height - this.state.keyboardHeight
      }
    })

    return (
      <Provider store={store} >
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" scrollEnabled={!!this.state.keyboardHeight} style={styles.resizeContainer}>
          <View style={styles.container}>
            <Router />
            <Loading />
          </View>
        </ScrollView>
      </Provider>
    )
  }
}

export default App