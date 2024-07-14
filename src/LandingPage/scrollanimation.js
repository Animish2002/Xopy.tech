import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.jpg";

import HeroSection from "../components/Layout/LandingPage/HeroSection";
import XopyFeatures from "../components/Layout/LandingPage/XopyFeatures";
import Team from "../components/Layout/LandingPage/Team";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
const ScrollAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    class StickySections {
      constructor(containerElement) {
        this.container = {
          el: containerElement,
          height: 0,
          top: 0,
          bottom: 0,
        };
        this.sections = Array.from(
          this.container.el.querySelectorAll("section")
        );
        this.viewportTop = 0;
        this.activeIndex = 0;
        this.scrollValue = 0;
        this.onScroll = this.onScroll.bind(this);
        this.initContainer = this.initContainer.bind(this);
        this.handleSections = this.handleSections.bind(this);
        this.remapValue = this.remapValue.bind(this);
        this.init();
      }

      onScroll() {
        this.handleSections();
      }

      initContainer() {
        this.container.el.style.setProperty(
          "--stick-items",
          `${this.sections.length + 4}00vh`
        );
        this.container.el.classList.add("[&_*]:!transition-none");
        setTimeout(() => {
          this.container.el.classList.remove("[&_*]:!transition-none");
        }, 1);
      }

      handleSections() {
        this.viewportTop = window.scrollY;
        this.container.height = this.container.el.clientHeight;
        this.container.top = this.container.el.offsetTop;
        this.container.bottom = this.container.top + this.container.height;

        if (this.container.bottom <= this.viewportTop) {
          this.scrollValue = this.sections.length + 1;
        } else if (this.container.top >= this.viewportTop) {
          this.scrollValue = 0;
        } else {
          this.scrollValue = this.remapValue(
            this.viewportTop,
            this.container.top,
            this.container.bottom,
            0,
            this.sections.length + 1
          );
        }
        this.activeIndex =
          Math.floor(this.scrollValue) >= this.sections.length
            ? this.sections.length - 1
            : Math.floor(this.scrollValue);

        this.sections.forEach((section, i) => {
          if (i === this.activeIndex) {
            section.style.setProperty("--stick-visibility", "1");
            section.style.setProperty("--stick-scale", "1.3");
          } else {
            section.style.setProperty("--stick-visibility", "0");
            section.style.setProperty("--stick-scale", ".8");
          }
        });
      }

      remapValue(value, start1, end1, start2, end2) {
        const remapped =
          ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
      }

      init() {
        this.initContainer();
        this.handleSections();
        window.addEventListener("scroll", this.onScroll);
      }
    }

    const stickySections = new StickySections(containerRef.current);

    return () => {
      window.removeEventListener("scroll", stickySections.onScroll);
    };
  }, []);

  return (
    <>
      <div className="relative font-inter antialiased">
        <main className="relative  flex flex-col justify-center overflow-hidden supports-[overflow:clip]:overflow-clip mt-24">
          <div className="h-[calc(100vh-6rem)] ">
            <Header />
            <HeroSection />
          </div>
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div
              className="max-w-md mx-auto lg:max-w-none md:min-h-[var(--stick-items)]"
              ref={containerRef}
            >
              <div className="lg:sticky lg:top-0 md:h-screen space-y-16 lg:space-y-0">
                {[
                  "A Cloud Based Platform",
                  "Convenience",
                  "Secure and direct",
                ].map((title, index) => {
                  const images = [image1, image2, image3];
                  const newTexts = [
                    "Reduce human errors and interventions and say yes to \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 a streamlined platform for facilitating \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 safe and secure transfer.",
                    "The streamlined process reduces confusion and raises \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 the convenience.",
                    "Adds an added layer of security to the traditional \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 methods with added convenience and \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 straightforward method.",
                  ];
                  return (
                    <section
                      key={index}
                      className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)]"
                    >
                      <div className="flex flex-col lg:h-full lg:flex-row space-y-4 space-y-reverse lg:space-y-0 lg:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                          <div className="space-y-3">
                            <div className="relative inline-flex text-3xl font-bold text-indigo-500 ">
                              {title}
                              <svg
                                className="fill-indigo-300 absolute top-full w-full"
                                xmlns="http://www.w3.org/2000/svg"
                                width="166"
                                height="4"
                              ></svg>
                            </div>
                            <p className="text-lg text-gray-900">
                              {newTexts[index]}
                            </p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300">
                          <img
                            src={images[index]}
                            alt={`Illustration 0${index + 1}`}
                            className="border-2 border-gray-500 rounded-[30px] h-[366px] w-[500px]"
                          />
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <XopyFeatures />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default ScrollAnimation;
