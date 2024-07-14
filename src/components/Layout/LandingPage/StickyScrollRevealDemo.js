import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import image1 from "../../../Assets/image1.png";
import image2 from "../../../Assets/image2.png";
import image3 from "../../../Assets/image3.jpg";

const StickyScrollRevealDemo = () => {
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
          `${this.sections.length + 1}00vh`
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
            section.style.setProperty("--stick-scale", "1");
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
    <div className="relative font-inter antialiased">
      <main className="relative h-auto flex flex-col justify-center bg-slate-50 overflow-hidden supports-[overflow:clip]:overflow-clip">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div
            className="max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]"
            ref={containerRef}
          >
            <div className="lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0">
              {[
                "A Cloud Based Platform",
                "Convenience",
                "Secure and direct",
              ].map((title, index) => {
                const images = [image1, image2, image3];
                return (
                  <section
                    key={index}
                    className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)]"
                  >
                    <div className="flex flex-col lg:h-full lg:flex-row space-y-reverse lg:space-y-0 lg:space-x-20">
                      <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                        <div className="space-y-3">
                          <div className="relative inline-flex text-indigo-500 font-semibold">
                            {title}
                            <svg
                              className="fill-indigo-300 absolute top-full w-full"
                              xmlns="http://www.w3.org/2000/svg"
                              width="166"
                              height="4"
                            >
                              <path d="M98.865 1.961c-8.893.024-17.475.085-25.716.182-2.812.019-5.023.083-7.622.116l-6.554.067a2910.9 2910.9 0 0 0-25.989.38c-4.04.067-7.709.167-11.292.27l-1.34.038c-2.587.073-4.924.168-7.762.22-2.838.051-6.054.079-9.363.095-1.994.007-2.91-.08-3.106-.225l-.028-.028c-.325-.253.203-.463 1.559-.62l.618-.059c.206-.02.42-.038.665-.054l1.502-.089 3.257-.17 2.677-.132c.902-.043 1.814-.085 2.744-.126l1.408-.06c4.688-.205 10.095-.353 16.167-.444C37.413 1.22 42.753.98 49.12.824l1.614-.037C54.041.707 57.588.647 61.27.6l1.586-.02c4.25-.051 8.53-.1 12.872-.14C80.266.4 84.912.373 89.667.354l2.866-.01c8.639-.034 17.996 0 27.322.03 6.413.006 13.168.046 20.237.12l2.368.027c1.733.014 3.653.05 5.712.105l2.068.064c5.89.191 9.025.377 11.823.64l.924.09c.802.078 1.541.156 2.21.233 1.892.233.29.343-3.235.364l-3.057.02c-.446.003-.89.008-1.33.014a305.77 305.77 0 0 1-4.33-.004c-2.917-.005-5.864-.018-8.783-.019l-4.982.003a447.91 447.91 0 0 1-3.932-.02l-4.644-.023-4.647-.014c-9.167-.026-18.341-.028-26.923.03l-.469-.043Z" />
                            </svg>
                          </div>
                          <h2 className="text-4xl text-slate-900 font-extrabold">
                            Support your users with popular topics
                          </h2>
                          <p className="text-lg text-slate-500">
                            Statistics show that people browsing your webpage
                            who receive live assistance with a chat widget are
                            more likely to make a purchase.
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300">
                        <img
                          width="512"
                          height="480"
                          src={images[index]}
                          alt={`Illustration 0${index + 1}`} 
                          className="border-2 border-gray-500 rounded-[30px]"
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
    </div>
  );
};

export default StickyScrollRevealDemo;
