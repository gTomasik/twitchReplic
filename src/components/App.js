import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import Header from './Header'

const App = () =>{
  return (
    <div className="ui container">
      <BrowserRouter >
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
      </BrowserRouter>
    </div>
  )
} 
export default App
//903507469191-8sji88e89jm8jp3rpg32lh7gah677v2v.apps.googleusercontent.com
//5OSeqavh5swalWHVbPefcy4V