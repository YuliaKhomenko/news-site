import React from 'react'
import {Link} from 'react-router-dom'
import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'


const ArticlesListItem = ({
    image,
    name,
    id,
}) => {
    return(
        <div className="ArticlesListItem">
            <div className="top">
                <div className="picture-right"><a href=''><img src={image} alt=''/></a></div>
                <div className="text">
                    <Link to={`/${id}`}>{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticlesListItem