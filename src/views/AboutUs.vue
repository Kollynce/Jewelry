<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt="Jewelry crafting"
          class="h-full w-full object-cover object-center"
        />
        <div class="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div class="relative px-6 py-32 sm:py-40 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Beabed Art</h1>
          <p class="mt-6 text-lg leading-8 text-white">Crafting uniquely beautiful jewelry to celebrate life's special moments</p>
        </div>
      </div>
    </div>

    <!-- Our story section -->
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">Our Story</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Handcrafted with passion</p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Beabed Art was born from a simple love of creating beautiful things. What started as a hobby in a small home workshop has grown into a passionate pursuit of craftsmanship and artistic expression.
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Every piece in our collection is handcrafted with meticulous attention to detail, using traditional techniques passed down through generations alongside innovative modern approaches.
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                We believe jewelry should be as unique as the person wearing it, telling a story and creating a connection that lasts a lifetime.
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Jewelry making process"
            class="w-[48rem] max-h-[30rem] object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>

    <!-- Values section -->
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What guides our craft
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            At Beabed Art, these principles guide everything we do, from design to customer service.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                </div>
                Quality Craftsmanship
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Every piece is crafted to the highest standards, using premium materials and meticulous attention to detail.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                Artistic Innovation
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">We blend traditional techniques with contemporary design to create unique pieces that stand out.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                Personalized Experience
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">We believe in creating personal connections with our customers and offering jewelry that tells their unique story.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                </div>
                Sustainable Practices
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">We're committed to environmentally responsible practices, from ethically sourced materials to eco-friendly packaging.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    
    <!-- Team section -->
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Meet the creative minds and skilled hands behind every Beabed Art creation.
          </p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" alt="Team member" />
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Emma Anderson</h3>
            <p class="text-base leading-7 text-indigo-600">Founder & Lead Designer</p>
            <p class="mt-4 text-base leading-7 text-gray-600">Emma brings over 15 years of jewelry design experience and a passion for creating pieces that tell stories.</p>
          </li>
          <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Team member" />
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Daniel Martinez</h3>
            <p class="text-base leading-7 text-indigo-600">Master Craftsman</p>
            <p class="mt-4 text-base leading-7 text-gray-600">Daniel's precision and attention to detail ensure that every piece meets our exacting quality standards.</p>
          </li>
          <li>
            <img class="aspect-[3/2] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="Team member" />
            <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Sophia Chen</h3>
            <p class="text-base leading-7 text-indigo-600">Materials Specialist</p>
            <p class="mt-4 text-base leading-7 text-gray-600">Sophia sources the finest materials from around the world, ensuring both quality and ethical practices.</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Call to action section -->
    <div class="bg-indigo-50">
      <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="relative isolate overflow-hidden bg-indigo-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Visit Our Workshop</h2>
            <p class="mt-6 text-lg leading-8 text-indigo-100">
              See our jewelry making process firsthand and discuss custom pieces with our designers.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <RouterLink to="/contact" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Schedule a Visit
              </RouterLink>
              <RouterLink to="/products" class="text-sm font-semibold leading-6 text-white">
                Shop Our Collection <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8">
            <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://images.unsplash.com/photo-1459247414692-500e1dc323b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Jewelry workshop" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
