import React, { Component } from 'react'
import t from 'tcomb-form-native'
import I18n from 'i18n'

export default SearchForm = (component) => {

  const Form = t.form.Form
  const state = component.state

  const search = t.struct({
    keywords: t.maybe(t.String),
  })

  const transformer = {
    format: value => value ? value.trim() : null,
    parse: value => value ? value.trim() : null
  }

  const options = {
    i18n: {
      optional: '',
      required: ' *' // inverting the behaviour: adding a postfix to the required fields
    },
    fields: {
      keywords: {
        label: I18n.t('search.label'),
      }
    }
  }

  return (
    <Form
      type={search}
      ref="form"
      options={options}
      value={state.form}
    />
  )
}