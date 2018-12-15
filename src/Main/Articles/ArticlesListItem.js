import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../common/style/reset.css'
import '../../common/style/bootstrap.css'
import '../../common/style/style.css'
import {connect} from 'react-redux'

class ArticlesListItem extends Component {
   
    static defaultProps = {
        isLiked: false,
    }

onLikeClick = () => {
    if (this.props.isLiked) {
        this.props.dispachDisLike(this.props.id)
    } else {
        this.props.dispachLike(this.props.id)
    }
}


    render () {
    const {
    image,
    name,
    id,
    isLiked,
} = this.props
    return(
        <div className="ArticlesListItem">
            <div className="top">
                <div className="picture-right"><a href=''><img src={image} alt=''/></a></div>
                <div className="text">
                    <Link to={`articles/${id}`}>{name}</Link>
                </div>
                <button className="button" onClick={() => this.onLikeClick()}>
                    {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                </button>

            </div>
            
        </div>
    )
}
}

const mapStateToProps = (state,props)=> {
    return {
        isLiked:state[props.id]
    }
}

const mapDispatchToProps = (dispach) =>({
    dispachLike: (id) => dispach({
        type:"LIKE",
        id: id,
    }),
    dispachDisLike: (id) => dispach({
        type:"DISLIKE",
        id: id,
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticlesListItem)
