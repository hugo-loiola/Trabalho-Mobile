import React from 'react';
import Reat, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Preload from './src/screens/Preload/index'
/*import UserContextProvider from './src/contexts/UserContext';*/
import MainsStack from './src/stacks/MainStack';

export default () => {
  const [exibeSplash, setExibeSplah] = useState(true)

  useEffect(() => {
    setTimeout(() => setExibeSplah(false), 5000)
  }, [])

  return (
    <>
    {exibeSplash ? <Preload/> : <MainsStack />}
    </>
  )
}
