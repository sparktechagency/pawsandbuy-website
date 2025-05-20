
const About = () => {
  const values = [
    {
      image: ` <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1" />
                      <path d="M29 33V31C29 29.9391 28.5786 28.9217 27.8284 28.1716C27.0783 27.4214 26.0609 27 25 27H17C15.9391 27 14.9217 27.4214 14.1716 28.1716C13.4214 28.9217 13 29.9391 13 31V33M35 33V31C34.9993 30.1137 34.7044 29.2528 34.1614 28.5523C33.6184 27.8519 32.8581 27.3516 32 27.13M28 15.13C28.8604 15.3503 29.623 15.8507 30.1676 16.5523C30.7122 17.2539 31.0078 18.1168 31.0078 19.005C31.0078 19.8932 30.7122 20.7561 30.1676 21.4577C29.623 22.1593 28.8604 22.6597 28 22.88M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>`,
      title: "Care about our team",
      description: "We prioritize our team's well-being growth and success by fostering a supportive inclusive and empowering work environment every day."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M32.8401 16.6099C32.3294 16.0989 31.7229 15.6935 31.0555 15.417C30.388 15.1404 29.6726 14.998 28.9501 14.998C28.2276 14.998 27.5122 15.1404 26.8448 15.417C26.1773 15.6935 25.5709 16.0989 25.0601 16.6099L24.0001 17.6699L22.9401 16.6099C21.9084 15.5782 20.5092 14.9986 19.0501 14.9986C17.5911 14.9986 16.1918 15.5782 15.1601 16.6099C14.1284 17.6416 13.5488 19.0408 13.5488 20.4999C13.5488 21.9589 14.1284 23.3582 15.1601 24.3899L16.2201 25.4499L24.0001 33.2299L31.7801 25.4499L32.8401 24.3899C33.3511 23.8791 33.7565 23.2727 34.033 22.6052C34.3096 21.9378 34.4519 21.2224 34.4519 20.4999C34.4519 19.7774 34.3096 19.062 34.033 18.3945C33.7565 17.7271 33.3511 17.1206 32.8401 16.6099V16.6099Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Be excellent to each other",
      description: "Treat everyone with kindness respect and empathy—creating a positive collaborative culture where all voices are valued and supported."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M35 18L25.5 27.5L20.5 22.5L13 30M35 18H29M35 18V24" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Pride in what we do",
      description: "We take ownership deliver high-quality work and celebrate our impact—driven by passion purpose and a commitment to excellence."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M20 26C20 26 21.5 28 24 28C26.5 28 28 26 28 26M21 21H21.01M27 21H27.01M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Don't the customer",
      description: "Don't disregard the customer prioritize their satisfaction to foster loyalty positive feedback and repeat business which are crucial for long-term success."
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M16 27C16 27 17 26 20 26C23 26 25 28 28 28C31 28 32 27 32 27V15C32 15 31 16 28 16C25 16 23 14 20 14C17 14 16 15 16 15V27ZM16 27V34" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Do the impossible",
      description: "Embrace challenges and push boundaries striving for the seemingly impossible often leads to innovation, growth and the achievement of remarkable feats.'"
    },
    {
      image: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#4A9935" fill-opacity="0.1"/>
<path d="M25 14L15 26H24L23 34L33 22H24L25 14Z" stroke="#4A9935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      title: "Sweat the small stuff",
      description: "Don't dismiss minor details meticulous attention to them ensures accuracy quality and prevents bigger problems down the line."
    },
  ]


  return (
    <div className="container mx-auto px-4 pt-20 md:pt-40 pb-[30px] md:pb-[40px] lg:pb-[95px]">
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="font-Poppins font-semibold text-[16px] text-secondery">About us</h1>
        <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4D]">About the service</h1>
        <p className="font-Inter text-[20px] text-[#3E4F6B] pt-[12px] pb-8 md:pb-[64px] max-w-[560px] text-center">Learn more about the company and the team behind it.</p>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[96px]">
        <div>
          <img src="/about/photo01.png" alt="about photo" />
        </div>
        <div>
          <div className="max-w-[560px] pb-6 md:pb-0">
            <h2 className="font-Inter font-semibold text-[16px] text-secondery">We’ve helped hundreds of companies</h2>
            <h1 className="font-Poppins font-semibold md:text-[24px] lg:text-[36px] text-[#172B4D] pt-3 lg:pt-0">We’re only just getting started on our journey</h1>
          </div>


          <div className="flex justify-between py-6 lg:pb-[64px]">
            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery">8k+</h1>
              <p>Active users</p>
            </div>

            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery text-end lg:text-start">600%</h1>
              <p>Return on investment</p>
            </div>
          </div>


          <div className="flex justify-between">
            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery">10k</h1>
              <p>Global downloads</p>
            </div>

            <div>
              <h1 className="font-Poppins font-semibold text-[30px] lg:text-[60px] text-secondery text-end lg:text-start">200+</h1>
              <p>5-star reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[122px]">
        <h2 className="font-Poppins font-medium text-[16px] text-[#535862] text-center">From startups to the world’s largest companies</h2>

        <div className="flex justify-center items-center  pt-[32px]">
          <div className="flex flex-wrap lg:flex-row items-center gap-10 md:gap-6 lg:space-x-[92px]">
            <span className="flex items-center gap-2">
             <img src="/aboutLogo/capitalism.png" alt="" className="w-[40px]"/>
              <h2 className="text-[#535862] font-semibold font-Poppins">Capitalism</h2>
            </span>

            <span className="flex items-center gap-2">
              <img src="/aboutLogo/ukbaa.png" alt="" className="h-[30px] w-full object-cover"/>
              <h2 className="text-[#535862] font-semibold font-Poppins">Ukbaa</h2>
            </span>

            <span className="flex items-center gap-2">
              <img src="/aboutLogo/crowdcube-logo.svg" alt="" />

              <h2 className="text-[#535862] font-semibold font-Poppins">Crowdcube</h2>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center space-y-3 pt-[122px] lg:pt-[212px]">
          <h1 className="font-Poppins font-semibold text-[16px] text-secondery">Our values</h1>
          <h1 className="font-Poppins font-semibold text-[20px] md:text-[36px] text-[#172B4D]">How we work </h1>
          <p className="font-Inter text-center text-[20px] text-[#3E4F6B] pt-[12px] pb-[64px]">Our shared values keep us connected and guide us as one team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {
            values.map((item, index) => {
              return (
                <div key={index} className="max-w-[384px] text-center pt-10 md:pt-[64px]">
                  <span className="flex justify-center pb-[20px]" dangerouslySetInnerHTML={{ __html: item.image }}>
                  </span>

                  <h2 className="font-Poppins font-medium text-[20px] text-[#172B4D]">{item.title}</h2>
                  <p className="font-Poppins text-[#3E4F6B]">{item.description}</p>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default About 