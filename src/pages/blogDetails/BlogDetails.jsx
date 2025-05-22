
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


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
            {
                singleBlogOne && <div className='lg:w-[800px] bg-gray-50 bg-opacity-40 mx-auto rounded-xl px-4 pt-8 md:p-8 mt-10 md:mt-32 mb-10'>
                    <div className="md:p-4 w-full md:max-w-xl mx-auto">
                        <img src={singleBlogOne.image} alt={singleBlogOne.title}
                            className="w-full mb-4 rounded" />
                        <h2 className="text-[20px] md:text-2xl font-bold mb-2">{singleBlogOne.title}</h2>
                        <div className='space-y-3'>
                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName1}</p>
                                <p>{singleBlogOne.description1}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName2}</p>
                                <p>{singleBlogOne.description2}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName3}</p>
                                <p>{singleBlogOne.description3}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName4}</p>
                                <p>{singleBlogOne.description4}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName5}</p>
                                <p>{singleBlogOne.description5}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>{singleBlogOne.descriptionName6}</p>
                                <p>{singleBlogOne.description6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                singleBlogTwo && <div className=' lg:w-[800px] bg-gray-50 bg-opacity-40 mx-auto rounded-xl px-4 pt-8 md:p-8 mt-10 md:mt-32 mb-10'>
                    <div className="md:p-4 w-full md:max-w-xl mx-auto">
                        <img src={singleBlogTwo.image} alt={singleBlogTwo.title} className="w-full mb-4 rounded" />
                        <h2 className="text-[20px] md:text-2xl font-bold mb-2">{singleBlogTwo.title}</h2>
                        <div className='space-y-3'>
                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName1}</p>
                                <p>{singleBlogTwo.description1}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName2}</p>
                                <p>{singleBlogTwo.description2}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName3}</p>
                                <p>{singleBlogTwo.description3}</p>
                            </div>

                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName4}</p>
                                <p>{singleBlogTwo.description4}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName5}</p>
                                <p>{singleBlogTwo.description5}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>{singleBlogTwo.descriptionName6}</p>
                                <p>{singleBlogTwo.description6}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BlogDetails