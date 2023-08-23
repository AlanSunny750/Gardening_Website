import { useState } from "react";
import Navbar from "./Navbar";

function Comunity() {
    const [user] = useState({
        name: 'User',
        lastName: 'Name',
        email: 'email'
    });

    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState({
        title: '',
        description: ''
    });

    const [image, setImage] = useState(null);

    const [isClicked, setIsClicked] = useState(false);

    const sow = () => {
        setIsClicked(true);
    }

    const plant = () => {
        if (newPost.title && newPost.description) {
            const newPostWithImage = {
                ...newPost,
                image: image ? URL.createObjectURL(image) : null
            };
            setPosts(prevPosts => [...prevPosts, newPostWithImage]);
            setIsClicked(false);
            setNewPost({
                title: '',
                description: ''
            });
            setImage(null);
        } else {
            alert("Please fill in both title and description.");
        }
    }

    return (
        <>
            <Navbar />
            <div className="mt-16 mx-auto bg-white p-8 w-4/5 shadow-lg rounded-lg">
                <div className="text-center mb-8"> 
                    <h1 className="text-3xl font-bold mb-2">Welcome to the Green Planner Community!</h1>
                    <p className="text-xl">This is where we share to improve.</p>           
                </div>

                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4">
                            <button 
                                className="bg-amber-700 text-white rounded-md px-4 py-2 hover:bg-amber-800 transition duration-150"
                                onClick={sow}
                            > 
                                Sow
                            </button>

                            <button 
                                className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition duration-150"
                                onClick={plant}
                            > 
                                Plant
                            </button>
                        </div> 

                        <div className="flex gap-4">
                            <button className="hover:bg-gray-200 rounded-md px-4 py-2">My Feed</button>
                            <button className="hover:bg-gray-200 rounded-md px-4 py-2">Comments</button>
                            <button className="hover:bg-gray-200 rounded-md px-4 py-2">Replies</button>
                        </div>
                    </div>

                    {isClicked && (
                        <div className="bg-gray-100 p-4 shadow-md rounded-md mb-4">
                            <input 
                                type="text" 
                                placeholder="Title" 
                                value={newPost.title}
                                onChange={e => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                                className="w-full p-2 mb-2 border rounded-md"
                            />
                            <textarea 
                                placeholder="Description" 
                                value={newPost.description}
                                onChange={e => setNewPost(prev => ({ ...prev, description: e.target.value }))}
                                className="w-full p-2 mb-2 border rounded-md"
                                rows="4"
                            ></textarea>
                            <input 
                                type="file" 
                                onChange={e => setImage(e.target.files[0])}
                                className="mb-2"
                            />
                            <button onClick={plant} className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-150">Submit</button>
                        </div>
                    )}

                    {posts.map((post, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
                            <h3 className="text-lg font-semibold mb-1">{user.name + ' ' + user.lastName}</h3>
                            <h4 className="text-md font-semibold mb-1">{post.title}</h4>
                            {post.image && <img src={post.image} alt="Uploaded content" className="w-full h-64 object-cover mb-2"/>}
                            <div className="description mb-2">{post.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Comunity;
