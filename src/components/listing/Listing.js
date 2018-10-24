import React, { Component } from 'react'
import I18n from 'i18n'
import { ScrollView, Input, Image, Button } from 'react-native'
import SearchForm from 'components/search/SearchForm'

import cFetch from 'utils/fetch'
import * as storage from 'utils/storage'

class Listing extends Component {

  state = {
    form: {},
    adverts: [],
  }

  componentWillMount = () => {
    cFetch('/api/getAdvert', {
      keywords: ''
    })
      .then(response => {
        response.json().then(e => {
          const adverts = e.adverts
          this.setState({ adverts })
        })
      })
  }

  handleSubmit = () => {
    const values = this.refs.form.getValue() || {}
    console.log(this.state.form)
    cFetch('/api/getAdvert', {
      keywords: values.keywords || ''
    })
      .then(response => {
        response.json().then(e => {
          const adverts = e.adverts
          this.setState({ adverts })
        })
      })
  }

  render = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" >
        {SearchForm(this)}
        <Button
          title={'GO'}
          onPress={this.handleSubmit.bind(this)}
        />
        {this.state.adverts.map((img, index) =>
          <Image key={index} style={{ width: "100%", height: 150 }} source={{ uri: 'http://192.168.13.164:3000/' + img.imgPath + '.jpg' }} />
        )}
      </ScrollView>
    )
  }
}

export default Listing