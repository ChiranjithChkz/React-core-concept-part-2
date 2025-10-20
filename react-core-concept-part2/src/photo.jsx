export default function Photo({photo}){
    return(
        <div className="card">
            <p>{photo.title}</p>
            <p>{photo.url}</p>
        </div>
    )
}