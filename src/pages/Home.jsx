import React from "react";
import cn from "../lib/cn";
import Container from "../components/layer/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "../components/layer/Accordion";
import gra from "/public/gra.jpeg"

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const data = [
    {
      name: "SEO",
      img: "",
      path: "#seo",
    },
    {
      name: "Web Development",
      img: "",
      path: "#web",
      
    },
    {
      name: "PPC",
      img: "",
      path: "#ppc",
    },
    {
      name: "Graphics",
      img: "",
      path: "#graphics",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={cn("home my-[50px]")}>
      <Container>
        <div className={cn(" main mobileDevice", "largeDevice ")}>
          <div className="relative md:h-40">
            <div
              className={cn(
                "heading",
                "md:absolute md:left-1/2 md:-translate-x-full md:top-0 "
                // 'md:flex md:items-center md:justify-between  '
              )}
            >
              <div
                className={cn(
                  // " relative [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)]",
                  "mx-auto w-60 h-20 bg-blue-500",
                  "md:w-96",
                  'flex justify-center items-center',
                  'rounded-se-3xl rounded-es-3xl'
                )}
              >
                <div
                  className={cn(
                    // "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "text-white text-6xl flex justify-center items-center",
                    
                  )}
                >
                  Atomix
                </div>
              </div>
              <div
                className={cn(
                  "text-white text-6xl text-center my-2 mr-1",
                  "md:absolute md:left-full  md:top-1/2 md:-translate-y-1/2"
                )}
              >
                Marketing
              </div>
            </div>
          </div>
          <div className={cn("subHeading", "md:mb-10")}>
            <p className={cn("my-4 text-2xl text-center md:mt-40")}>
              Indonesia-Based Digital Agency
            </p>
            <p className={cn("my-2 text-lg text-center")}>
              Katalyst Design Studio is a dynamic and innovative design agency
              that brings creative ideas to life. We works with a wide range of
              clients to develop unique and effective branding, web design, and
              graphic design solutions.
            </p>
          </div>
        </div>
      </Container>
      <div className={cn("displaySection  bg-gray-100 text-black")}>
        <Container>
          <div className={cn("section2 relative   my-3  py-5", " ")}>
            <div className={cn("slider1  p-5 mb-5 rounded-xl")}>
              <h1 className={cn("text-center pb-4 font-bold text-3xl")}>
                Our services
              </h1>
              <div className=" md:w-3/4 mx-auto">
                <Slider {...settings}>
                  {data.map((d, index) =>(
                    <div className="bg-indigo-400  rounded-xl w-72 h-72 relative ">
                    <div className="flex flex-col  items-center">
                      <div className="w-full py-6 rounded-t-xl flex justify-center font-bold text-2xl bg-slate-200">
                        {d.name}
                        </div>
                      <div className="img h-24"></div>
                      <div className="btn absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-full">
                        <button className="bg-slate-50 p-2 font-semibold rounded-3xl border border-transparent hover:bg-transparent hover:border-black hover:text-white transition-all duration-300" >
                          <a href={d.path}>
                          Learn More
                          </a>
                          </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className={cn("heroPic")}>
              <div
                className={cn(
                  "txt md:flex md:items-center md:justify-between "
                )}
              >
                <p
                  className={cn(
                    "font-bold text-lg py-4 text-center",
                    "md:text-4xl md:w-96 md:text-left"
                  )}
                >
                  Digital thinkers. Small studios build awesome design.
                </p>
                <p
                  className={cn(
                    "py-4 text-sm",
                    "md:w-96 md:text-xl md:font-semibold"
                  )}
                >
                  Despite being a small team, we believe that our size gives us
                  an advantage, allowing us to be nimble, adaptable, and able to
                  work closely with our clients to deliver truly awesome
                  designs.
                </p>
              </div>
              <div className={cn("showPic py-2 flex justify-between ")}>
                <div
                  className={cn(
                    "w-40 h-40 mx-auto bg-green-300 my-1 rounded-3xl",
                    "md:w-[717px] md:h-[504px] md:mx-0"
                  )}
                ></div>
                <div
                  className={cn(
                    "w-40 h-40 mx-auto bg-red-400 my-1 rounded-3xl",
                    "md:w-[403px] md:h-[663px] md:mx-0"
                  )}
                ></div>
              </div>
            </div>
          </div>
        </Container>
        <div className={cn('services main py-20 mx-5',
            'md:py-40'
        )} id="services">
          <Container>
            <div className="mainPart flex flex-col justify-center items-center">
              <p className="my-4 font-bold text-xl md:text-2xl ">Our <span className="bg-indigo-200 p-2 rounded-se-2xl rounded-es-2xl"> Services</span></p>
            </div>
            <div className="servicePart">
              <div className="">
                <p className="text-center">Katalyst Studio offers a range of design services that are tailored to meet the unique needs of each client</p>
                <div className="py-4">
                <Accordion id={'web'} src={gra} title={'Web Development'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nisi officiis laborum non quia, molestias quo ut deserunt asperiores consectetur quis! Omnis cupiditate, at impedit provident iusto est ab.'}/> 
                <Accordion id={'graphics'} src={gra} title={'Graphics Design'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nisi officiis laborum non quia, molestias quo ut deserunt asperiores consectetur quis! Omnis cupiditate, at impedit provident iusto est ab.'}/> 
                <Accordion id={'ppc'} src={gra} title={'PPC'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nisi officiis laborum non quia, molestias quo ut deserunt asperiores consectetur quis! Omnis cupiditate, at impedit provident iusto est ab.'}/> 
                <Accordion id={'seo'} src={gra} title={'SEO'} answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nisi officiis laborum non quia, molestias quo ut deserunt asperiores consectetur quis! Omnis cupiditate, at impedit provident iusto est ab.'}/> 
                </div>
              </div>
            </div>
          </Container>  
        </div>
      </div>
    </div>
    
  );
};

export default Home;
