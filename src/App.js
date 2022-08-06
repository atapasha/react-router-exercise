import React, { Suspense } from 'react'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Contact from './components/Contact/Contact'
import Posts from './components/Posts/Posts'
import SinglePost from './components/SinglePost/SinglePost'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { Switch } from 'react-router-dom'
const App = () => {
    return (
        <BrowserRouter >
            <Header />

            <div className='container mx-auto'>

                <Suspense fallback={<div>Loading....</div>}>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/posts' component={Posts} />
                        <Redirect from='/' to='/posts' />

                    </Switch>
                </Suspense>
                <Footer />
            </div>
        </BrowserRouter >
    )
}

export default App