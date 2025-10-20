import { use } from "react"
import Photo from "./photo"

export default function Photos({photosPromise}){

    const photos = use(photosPromise)
    console.log(photos)
    return (
        <div className="card">
            <p>All the picture are here: {photos.length}</p>
            {
                //  posts.map(post => <Post post={post}></Post>)
                  photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
            }
        </div>
    )
}