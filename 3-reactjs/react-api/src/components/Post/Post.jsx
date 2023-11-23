import React from "react";

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://picsum.photos/200" alt="Gambar dari picsum.photos" />
            </div>
            <div className="content">
                <p className="tittle">{ props.tittle }</p>
                <p className="desc">{ props.desc }</p>
            </div>
        </div>
    );
}

export default Post;