import React from "react";
import "@splidejs/react-splide/css/sea-green";
import { SplideSlide, Splide,} from "@splidejs/react-splide";
import {ImQuotesLeft} from 'react-icons/im'

function Testimonials() {
  return (
    <section className="testimony--section">
      <h2 className="uppercase font-bold text-black text-xl text-center">
        What our clients say <br /> about us
      </h2>
      <div className="testimony--cards mt-10 text-center">
        <Splide
          options={{
            rewind: true,
            gap: "1.5rem",
            perPage: 2,
            autoplay: true,
            pauseOnFocus:true,
            breakpoints:{
              1000:{
                perPage:2
              },
              678:{
                perPage:1,
                arrows:false,
                width:'100%'
              }
            }
          }}
        >
          <SplideSlide>
            <div className="testimony--card bg-white p-5 text-center shadow-lg border-2 border-primary rounded-lg">
              <ImQuotesLeft className="text-secondary text-4xl"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nulla quaerat itaque possimus similique illo consequuntur rem
                iusto laborum impedit! similique illo consequuntur rem iusto
                laborum impedit!
              </p>
              <div className="name text-black text-lg font-bold capitalize pt-5">
                Daniel Sah
              </div>
              <p className="text-primary font-bold pt-2 capitalize">
                full stack dev
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="testimony--card bg-white p-5 text-center shadow-lg border-2 border-primary rounded-lg">
              <ImQuotesLeft className="text-secondary text-4xl"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nulla quaerat itaque possimus similique illo consequuntur rem
                iusto laborum impedit! similique illo consequuntur rem iusto
                laborum impedit!
              </p>
              <div className="name text-black text-lg font-bold capitalize pt-5">
                Daniel Sah
              </div>
              <p className="text-primary font-bold pt-2 capitalize">
                full stack dev
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="testimony--card bg-white p-5 text-center shadow-lg border-2 border-primary rounded-lg">
              <ImQuotesLeft className="text-secondary text-4xl"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nulla quaerat itaque possimus similique illo consequuntur rem
                iusto laborum impedit! similique illo consequuntur rem iusto
                laborum impedit!
              </p>
              <div className="name text-black text-lg font-bold capitalize pt-5">
                Daniel Sah
              </div>
              <p className="text-primary font-bold pt-2 capitalize">
                full stack dev
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}

export default Testimonials;
