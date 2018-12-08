import React from 'react'

import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'
import pictures from '../pictures/pictures'
import ArticlesListItem from './ArticlesListItem'

const ArticleList = () => {
    return (
        <div className="Article-list">
            {
                pictures.map(({
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


export default ArticleList