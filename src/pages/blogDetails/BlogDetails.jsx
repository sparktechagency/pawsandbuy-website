
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams();
    const convertId = parseInt(id);

    const [singleBlogOne, setSingleBlogOne] = useState(null);
    const [singleBlogTwo, setSingleBlogTwo] = useState(null);

    useEffect(() => {
        fetch('/firstBlog.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === convertId);
                setSingleBlogOne(found);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
            });
    }, [convertId]);

    useEffect(() => {
        fetch('/secondBlog.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === convertId);
                setSingleBlogTwo(found);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
            });
    }, [convertId]);




    return (
        <>
            {
                singleBlogOne && <div className=' lg:w-[800px] bg-gray-400 bg-opacity-10 mx-auto rounded-xl p-8 mt-32 mb-10'>
                    <div className="p-4 max-w-xl mx-auto">
                        <img src={singleBlogOne.image} alt={singleBlogOne.title}
                            className="w-full mb-4 rounded" />
                        <h2 className="text-[20px] md:text-2xl font-bold mb-2">{singleBlogOne.title}</h2>
                        <p>{singleBlogOne.description}</p>
                    </div>
                </div>

            }

            {
                singleBlogTwo && <div className=' lg:w-[800px] bg-gray-400 bg-opacity-10 mx-auto rounded-xl p-8 mt-32 mb-10'>
                    <div className="p-4 max-w-xl mx-auto">
                        <img src={singleBlogTwo.image} alt={singleBlogTwo.title} className="w-full mb-4 rounded" />
                        <h2 className="text-[20px] md:text-2xl font-bold mb-2">{singleBlogTwo.title}</h2>
                        <p>{singleBlogTwo.description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogDetails