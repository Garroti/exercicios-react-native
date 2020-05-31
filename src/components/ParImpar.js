import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../styles/Padrao'

function parOuImpar(num) {
  const texto = num % 2 == 0 ? 'Par' : 'Impar'
  return <Text style={ Padrao.ex }>{ texto }</Text>
}

export default props => 
  <View>
    {
      parOuImpar(props.numero)
    }
  </View>