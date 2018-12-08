import React from 'react'

import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'


const ArticlesListItem = ({
    image,
    name,
}) => {
    return(
        <div className="ArticlesListItem">
            <div className="top">
                <div className="picture-right"><a href=''><img src={image} alt=''/></a></div>
                <div className="text"><a href=''>{name}</a></div>
            </div>
        </div>
    )
}

export default ArticlesListItem