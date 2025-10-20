export default function Friend({friend}) {

    console.log(friend);
    const {name,username,phone, email} = friend;  // destructuring elements

    return (
        <div className="card">
            <h4>Name : {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <h3>UserName : {username}</h3>
        </div>
    )
}