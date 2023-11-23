import React from "react";

const Post = (props) => {
    return(
        <div className="post">
            <div className="img-thumb">
                <img src="https://picsum.photos/200" alt="Gambar dari picsum.photos" />
            </div>
            <div className="content">
                <p className="tittle">{ props.data.title }</p>
                <p className="desc">{ props.data.body }</p>
                <button className="btn-hapus" onClick={() => props.hapusPost(props.data.id)}>Hapus</button>
            </div>
        </div>
    );
}

export default Post;