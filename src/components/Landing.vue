<script setup>
import Slider from "./Slider.vue";
import DarkButton from "./utilities/DarkButton.vue";
import LightButton from "./utilities/LightButton.vue";

const hero = new URL("../assets/images/hero.jpeg", import.meta.url).href;

function goToElement(element) {
  let target = document.getElementById(element);
  target.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div
    class="h-screen bg-cover bg-center bg-no-repeat -mt-24 flex"
    :style="{
      backgroundImage: `url(${hero})`,
    }"
  >
    <section class="container mx-auto flex items-center">
      <div class="text-white body-font">
        <div
          class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
        >
          <div class="text-center lg:w-2/3 w-full">
            <h1
              class="title-font sm:text-4xl text-3xl mb-16 font-medium text-white"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              Microdosing synth tattooed vexillologist
            </h1>
            <p
              class="mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="400"
            >
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div
              class="flex justify-center"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="600"
            >
              <dark-button @navigate="goToElement('contact-us')">
                Contact Us
              </dark-button>
              <light-button class="ml-4"> Button 2 </light-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section id="info" class="text-white body-font mb-12">
    <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2
          class="text-xs text-slate-800 tracking-widest font-medium title-font mb-1"
        >
          ROOF PARTY POLAROID
        </h2>
        <h1
          class="title"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Master Cleanse Reliac Heirloom
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
      <div class="flex flex-wrap">
        <div
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <h2 class="subtitle">Shooting Stars</h2>
          <p class="leading-relaxed text-base mb-4 text-gray-500">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <a class="text-slate-800 inline-flex items-center"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <h2 class="subtitle">The Catalyzer</h2>
          <p class="leading-relaxed text-base mb-4 text-gray-500">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <a class="text-slate-800 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <h2 class="subtitle">Neptune</h2>
          <p class="leading-relaxed text-base mb-4 text-gray-500">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <a class="text-slate-800 inline-flex items-center"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div
          class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
        >
          <h2 class="subtitle">Melanchole</h2>
          <p class="leading-relaxed text-base mb-4 text-gray-500">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
          <a class="text-slate-800 inline-flex items-center"
            >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex">
        <dark-button
          class="flex mx-auto mt-16"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="200"
        >
          Button 3
        </dark-button>
      </div>
    </div>
  </section>
  <Slider />
  <section id="contact-us" class="text-slate-800 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="title"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Contact Us
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-slate-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-slate-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-slate-300 focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200 h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full flex mt-8">
            <dark-button
              class="mx-auto"
              data-aos="fade-up"
              data-aos-easing="ease"
            >
              Submit
            </dark-button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="team" class="text-white body-font bg-slate-800">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-400"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-delay="400"
        >
          Our Team
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">
                Holden Caulfield
              </h2>
              <p class="text-gray-400">UI Designer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/84x84"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Henry Letham</h2>
              <p class="text-gray-400">CTO</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/88x88"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Oskar Blinde</h2>
              <p class="text-gray-400">Founder</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/90x90"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">John Doe</h2>
              <p class="text-gray-400">DevOps</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/94x94"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Martin Eden</h2>
              <p class="text-gray-400">Software Engineer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="flip-up">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/98x98"
            />
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Boris Kitua</h2>
              <p class="text-gray-400">UX Researcher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.title {
  @apply sm:text-3xl text-2xl font-extrabold  mb-2 text-slate-800;
}
.subtitle {
  @apply text-lg sm:text-xl text-slate-800 font-semibold mb-2;
}
</style>
