import React from 'react'
import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'
import pictureshot,{ getArticlesMap } from '../pictures/pictureshot';

const ArticleOne=({
    articlesItem = getArticlesMap(pictureshot),
    match
}) =>
    <div className="teme-main"><a href=''>{articlesItem[match.params.articleId].name}</a>
        <div className="picture-right-article"><a href=''><img src={articlesItem[match.params.articleId].image} alt=''/></a></div>
        <div class="text-article"> {articlesItem[match.params.articleId].content}
        </div> 
	</div>


export default ArticleOne