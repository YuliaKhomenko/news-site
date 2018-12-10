import React from 'react'

import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'
import pictureshot from '../pictures/pictureshot'
import picturescelebreties from '../pictures/picturescelebreties'
import ArticlesListItem from './ArticlesListItem'

const ArticleList = () => {
    return (
        <div className="row">
            {
                pictureshot.map(({
                    id,
                    image,
                    name,
                })=>(
                    <div className="col-md-12" key={id}>
                        <ArticlesListItem
                            id={id}
                            image={image}
                            name={name}
                        />
                    </div>
                ))
            }
        </div>
    )
}

const ArticleListCelebreties = () => {
    return (
        <div className="row">
            {
                picturescelebreties.map(({
                    id,
                    image,
                    name,
                })=>(
                    <div className="col-md-12" key={id}>
                        <ArticlesListItem
                            id={id}
                            image={image}
                            name={name}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export {ArticleListCelebreties}

export default ArticleList