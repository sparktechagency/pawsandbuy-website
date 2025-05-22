
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Blogs = () => {
  const navigate = useNavigate()


  const [blogsOne, setBlogsOne] = useState([]);
  const [blogsTwo, setBlogsTwo] = useState([]);

  useEffect(() => {
    fetch("/firstBlog.json")
      .then((res) => res.json())
      .then((data) => setBlogsOne(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  useEffect(() => {
    fetch("/secondBlog.json")
      .then((res) => res.json())
      .then((data) => setBlogsTwo(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);


  const handleFirstBlog = (firstId) => {
    navigate(`/blog-details/${firstId}`)
  }
  const handleSecondBlog = (secondId) => {
    navigate(`/blog-details/${secondId}`)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-40 pb-[30px] md:pb-[40px] lg:pb-[96px]">
      <div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="font-Poppins font-semibold text-[16px] text-secondery">Blog posts</h1>
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4] text-center">
            To get knowledge about the pet's world read our blogs
          </h1>
          <p className="font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center text-wrap px-4 md:px-0">Helps you to keep update about your pet’s fitness.</p>
        </div>



        {/* blogs images */}
        <div className="space-y-5 px-4 lg:px-0 pt-20 lg:pt-0">
          {/* first blogs */}
          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* card one */}
            {
              blogsOne.map((item, index) => {
                return (
                  <div key={index}
                    onClick={() => handleFirstBlog(item.id)}
                    className="relative cursor-pointer">
                    <img src={item.image} alt="blog photo" className="object-cover h-[350px] lg:h-full rounded-md" />

                    <div className="absolute bottom-6 px-4">
                      <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">{item.title}</h1>
                      <p className="font-Poppins text-[14px] text-[#3E4F6B] text-wrap">
                        {item?.description1?.split(' ').length > 30
                          ? item?.description1?.split(' ').slice(0, 30).join(' ') + ''
                          : item?.description1}
                      </p>
                      <button className="flex items-center gap-1 font-Poppins text-[14px] text-[#073F40] font-bold pt-[22px] pl-3">Read more <IoIosArrowRoundForward className="text-[#0373F40] text-xl font-bold" /></button>
                    </div>
                  </div>
                )
              })
            }
          </div>


          {/* second blogs */}
          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* curd three */}
            {
              blogsTwo?.map((itemTwo, index) => {
                return (
                  <div key={index}
                    onClick={() => handleSecondBlog(itemTwo.id)}
                    className="relative cursor-pointer">
                    <img src={itemTwo.image} alt="blog photo" className="object-cover h-[350px] lg:h-full rounded-md" />
                    <div className="absolute  bottom-6  px-4">
                      <h1 className="font-Poppins font-semibold text-[20px] md:text-[30px] text-[#172B4D]">{itemTwo.title}</h1>

                      <p className="font-Poppins text-[14px] text-[#3E4F6B] text-wrap">
                        {itemTwo?.description1?.split(' ').length > 30
                          ? itemTwo?.description1?.split(' ').slice(0, 30).join(' ') + ''
                          : itemTwo?.description1}
                      </p>

                      <button className="flex items-center gap-1 font-Poppins text-[14px] text-[#073F40] font-bold pt-[22px] pl-3">Read more <IoIosArrowRoundForward className="text-[#0373F40] text-xl font-bold" /></button>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs