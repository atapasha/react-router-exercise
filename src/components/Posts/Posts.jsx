import React, { lazy, useState } from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const LazyLoad = lazy(() => import('../LazyLoad/LazyLoad'))
const Posts = (props) => {
    console.log(props)


    const [showComponent, setShowComponent] = useState(false)

    return (
        <div>
            <div>
                Posts page
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/posts/1">Post 1</Link>
                        <Link to="/posts/2">Post 2</Link>
                        <Link to="/posts/3">Post 3</Link>
                    </li>
                </ul>

                <div>
                    <a href="#" onClick={() => setShowComponent(!showComponent)}>Toggle Component</a>
                </div>

                {showComponent && (
                    <div><LazyLoad /></div>

                )}
                <div>
                    <Route path='/posts/:id' component={SinglePost} />

                </div>
            </div>


        </div>
    )
}

export default Posts