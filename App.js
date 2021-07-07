import * as React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import Start from './Start'


export default function App(){
  return(
<Provider store={store} >
   <Start />
    </Provider>
  )
}