import React from "react";
import cn from "../lib/cn";
import Container from "../components/layer/Container";

const Home = () => {
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
                  " relative [clip-path:polygon(8%_0,100%_0,92%_100%,0%_100%)]",
                  "mx-auto w-80 h-64 bg-blue-500",
                  "md:w-96"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "text-white text-6xl"
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
          <div className={cn("subHeading")}>
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
      <div className={cn("displaySection bg-slate-50 text-black")}>
        <Container>
          <div className={cn('section2 my-14 mx-2 ')}>
          <div className={cn('picBox ')}></div>
          <div className={cn('heroPic')}>
            <div className={cn('txt md:flex md:items-center md:justify-between ')}>
            <p className={cn('font-bold text-lg py-4 text-center',
              'md:text-4xl md:w-96 md:text-left'
            )}>
            Digital thinkers.
            Small studios build awesome design.
            </p>
            <p className={cn('py-4 text-sm',
              'md:w-96'
            )}>
              Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome designs.
            </p>
            </div>
            <div className={cn('showPic py-2 flex justify-between ')}>
              <div className={cn('w-40 h-40 mx-auto bg-green-300 my-1 rounded-3xl',
                'md:w-[717px] md:h-[504px] md:mx-0'
              )}></div>
              <div className={cn('w-40 h-40 mx-auto bg-red-400 my-1 rounded-3xl',
                'md:w-[403px] md:h-[663px] md:mx-0'
              )}></div>
            </div>
          </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
