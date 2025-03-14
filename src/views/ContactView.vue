<template>
  <div class="bg-light-primary dark:bg-dark-primary">
    <div class="relative isolate bg-light-secondary dark:bg-dark-secondary">
      <!-- Page header -->
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary sm:text-4xl">Contact Us</h2>
          <p class="mt-4 text-lg leading-8 text-light-text-secondary dark:text-dark-text-secondary">
            We'd love to hear from you! Let us know how we can help.
          </p>
        </div>

        <div class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
          <!-- Contact form -->
          <div class="bg-light-primary dark:bg-dark-primary p-8 rounded-md shadow-sm contact-form">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label for="first-name" class="block text-sm font-medium leading-6 text-light-text-primary dark:text-dark-text-primary">First name</label>
                  <div class="mt-2">
                    <input v-model="form.firstName" type="text" id="first-name" autocomplete="given-name"  
                      class="block w-full rounded-md border-0 py-1.5 text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-light-neutral-300 dark:ring-dark-neutral-700 placeholder:text-light-neutral-400 dark:placeholder:text-dark-neutral-400 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                      :class="{ 'ring-red-500': errors.firstName }">
                    <p v-if="errors.firstName" class="mt-2 text-sm text-red-600">{{ errors.firstName }}</p>
                  </div>
                </div>

                <div>
                  <label for="last-name" class="block text-sm font-medium leading-6 text-light-text-primary dark:text-dark-text-primary">Last name</label>
                  <div class="mt-2">
                    <input v-model="form.lastName" type="text" id="last-name" autocomplete="family-name" 
                      class="block w-full rounded-md border-0 py-1.5 text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-light-neutral-300 dark:ring-dark-neutral-700 placeholder:text-light-neutral-400 dark:placeholder:text-dark-neutral-400 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                      :class="{ 'ring-red-500': errors.lastName }">
                    <p v-if="errors.lastName" class="mt-2 text-sm text-red-600">{{ errors.lastName }}</p>
                  </div>
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-light-text-primary dark:text-dark-text-primary">Email</label>
                <div class="mt-2">
                  <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" 
                    class="block w-full rounded-md border-0 py-1.5 text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-light-neutral-300 dark:ring-dark-neutral-700 placeholder:text-light-neutral-400 dark:placeholder:text-dark-neutral-400 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.email }">
                  <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium leading-6 text-light-text-primary dark:text-dark-text-primary">Subject</label>
                <div class="mt-2">
                  <input v-model="form.subject" type="text" id="subject"  
                    class="block w-full rounded-md border-0 py-1.5 text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-light-neutral-300 dark:ring-dark-neutral-700 placeholder:text-light-neutral-400 dark:placeholder:text-dark-neutral-400 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.subject }">
                  <p v-if="errors.subject" class="mt-2 text-sm text-red-600">{{ errors.subject }}</p>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium leading-6 text-light-text-primary dark:text-dark-text-primary">Message</label>
                <div class="mt-2">
                  <textarea v-model="form.message" id="message" rows="4" 
                    class="block w-full rounded-md border-0 py-1.5 text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-light-neutral-300 dark:ring-dark-neutral-700 placeholder:text-light-neutral-400 dark:placeholder:text-dark-neutral-400 focus:ring-2 focus:ring-inset focus:ring-accent-primary sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.message }"></textarea>
                  <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
                </div>
              </div>

              <div class="flex justify-end">
                <button type="submit" 
                  :disabled="isSubmitting"
                  class="rounded-btn bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-dark text-white py-2.5 px-3.5 text-sm font-semibold shadow-btn hover:shadow-btn-hover transition-btn disabled:bg-light-neutral-300 dark:disabled:bg-dark-neutral-600">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>

            <div v-if="formSubmitted" class="mt-6 rounded-md bg-green-50 dark:bg-dark-neutral-800 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                  <div class="text-sm font-medium text-green-800 dark:text-green-200 text-justify">Thank you for your message! We'll get back to you soon.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact information -->
          <div class="space-y-10 contact-info">
            <div class="bg-light-primary dark:bg-dark-primary rounded-lg shadow-sm ring-1 ring-light-neutral-300 dark:ring-dark-neutral-700 p-8">
              <h3 class="text-base font-semibold leading-7 text-light-text-primary dark:text-dark-text-primary">Contact Information</h3>
              <dl class="mt-4 space-y-4 text-sm leading-6">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                    <MapPinIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd class="text-light-text-secondary dark:text-dark-text-secondary">
                    <p>Nairobi Kenya</p>
                    <p>Kitengela</p>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary" href="tel:+2547 4141 4271">+2547 4141 4261</a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <EnvelopeIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary" href="mailto:hello@kreativekanvas.shop">hello@kreativekanvas.shop</a>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Opening hours -->
            <div class="bg-light-primary dark:bg-dark-primary rounded-lg shadow-sm ring-1 ring-light-neutral-300 dark:ring-dark-neutral-700 p-8">
              <h3 class="text-base font-semibold leading-7 text-light-text-primary dark:text-dark-text-primary">Kreation Studio Hours</h3>
              <dl class="mt-4 space-y-4 text-sm leading-6">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Hours</span>
                    <ClockIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd class="text-light-text-secondary dark:text-dark-text-secondary">
                    <p class="mt-1">Monday - Friday: 9AM - 6PM</p>
                    <p class="mt-1">Saturday: 10AM - 4PM</p>
                    <p class="mt-1">Sunday: Closed</p>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Real Google Map -->
            <div class="rounded-lg overflow-hidden shadow-sm ring-1 ring-light-neutral-300 dark:ring-dark-neutral-700">
              <div class="relative h-72">
                <!-- Map will be rendered here -->
                <div id="map" ref="mapContainer" class="w-full h-full"></div>
                
                <!-- Loading indicator -->
                <div v-if="mapLoading" class="absolute inset-0 flex items-center justify-center bg-light-neutral-100 dark:bg-dark-neutral-800 bg-opacity-75 dark:bg-opacity-75">
                  <div class="text-center">
                    <svg class="animate-spin h-10 w-10 text-accent-primary mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p class="text-light-text-secondary dark:text-dark-text-secondary">Loading map...</p>
                  </div>
                </div>
              </div>
              
              <!-- Find directions link -->
              <div class="p-3 bg-light-primary dark:bg-dark-neutral-700 text-center">
                <a 
                  :href="directionsUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center"
                >
                  <MapPinIcon class="h-4 w-4 mr-1" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const mapContainer = ref(null);
const mapLoading = ref(true);

// Kitengela, Nairobi coordinates
const storeLocation = {
  lat: -1.4774,
  lng: 36.9584,
  address: 'Kitengela, Nairobi, Kenya'
};

// Computed URL for directions
const directionsUrl = computed(() => {
  return `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.lat},${storeLocation.lng}&destination_place_id=Kitengela+Nairobi+Kenya`;
});

const validateForm = () => {
  let valid = true;
  
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '');
  
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required';
    valid = false;
  }
  
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required';
    valid = false;
  }
  
  if (!form.email.trim()) {
    errors.email = 'Email is required';
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    valid = false;
  }
  
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required';
    valid = false;
  }
  
  if (!form.message.trim()) {
    errors.message = 'Message is required';
    valid = false;
  }
  
  return valid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Clear form
    Object.keys(form).forEach(key => form[key] = '');
    
    // Show success message
    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    isSubmitting.value = false;
  }
};

// Initialize Google Maps with standard approach
function initMap() {
  try {
    // Check if the map container exists
    if (!mapContainer.value) {
      console.error('Map container not found');
      mapLoading.value = false;
      return;
    }
    
    // Check if Google Maps is loaded
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API not loaded');
      mapLoading.value = false;
      return;
    }

    // Define map options
    const mapOptions = {
      center: { lat: storeLocation.lat, lng: storeLocation.lng },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "poi",
          "stylers": [{"visibility": "off"}]
        },
        {
          "featureType": "transit",
          "elementType": "labels.icon",
          "stylers": [{"visibility": "off"}]
        }
      ]
    };

    // Create new map instance
    const map = new google.maps.Map(mapContainer.value, mapOptions);

    // Create marker
    const marker = new google.maps.Marker({
      position: { lat: storeLocation.lat, lng: storeLocation.lng },
      map: map,
      title: 'Kreative Kanvas Jewelry',
      animation: google.maps.Animation.DROP
    });

    // Create info window content
    const contentString = `
      <div class="p-3">
        <h3 class="font-bold text-base mb-1">Kreative Kanvas Jewelry</h3>
        <p class="text-sm">${storeLocation.address}</p>
        <p class="text-sm mt-1">
          <a href="tel:+2547 4141 4271" class="text-blue-600 hover:text-blue-800">
            +2547 4141 4271
          </a>
        </p>
      </div>
    `;

    // Create info window
    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 250
    });
    
    // Open info window by default after a short delay
    setTimeout(() => {
      infoWindow.open({
        anchor: marker,
        map
      });
    }, 500);

    // Add event listener to marker
    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map
      });
    });
    
    // Hide loading indicator
    mapLoading.value = false;
  } catch (error) {
    console.error('Error initializing map:', error);
    mapLoading.value = false;
  }
}

// Load Google Maps API
const loadGoogleMapsApi = () => {
  // Check if Google Maps API is already loaded
  if (window.google && window.google.maps) {
    initMap();
    return;
  }
  
  // Create script element
  const googleMapsApiScript = document.createElement('script');
  
  // Use a public API key or replace with your own
  const apiKey = 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk'; // This is a public testing key
  
  // Set script attributes
  googleMapsApiScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
  googleMapsApiScript.async = true;
  googleMapsApiScript.defer = true;
  
  // Set up callbacks
  googleMapsApiScript.onload = () => {
    // Initialize map when API is loaded
    initMap();
  };
  
  googleMapsApiScript.onerror = (event) => {
    console.error('Failed to load Google Maps API:', event);
    mapLoading.value = false;
  };
  
  // Add script to document
  document.head.appendChild(googleMapsApiScript);
};

onMounted(() => {
  // Initialize map
  loadGoogleMapsApi();
});
</script>

<style scoped>
.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--light-primary);
  color: var(--light-text-primary);
  border-color: var(--light-neutral-300);
  outline: none;
  transition: all 0.2s;
  border-radius: 0.375rem;
}

.dark .contact-form input[type="email"],
.dark .contact-form input[type="text"],
.dark .contact-form textarea {
  background-color: var(--dark-primary);
  color: var(--dark-text-primary);
  border-color: var(--dark-neutral-700);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px var(--accent-primary-alpha);
}

.contact-form label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--light-text-primary);
}

.dark .contact-form label {
  color: var(--dark-text-primary);
}

/* Google Maps custom styles */
:deep(.gm-style .gm-style-iw-c) {
  padding: 12px;
  border-radius: 8px;
}

:deep(.gm-style .gm-style-iw-d) {
  overflow: auto !important;
  max-height: none !important;
}

:deep(.gm-style-iw button.gm-ui-hover-effect) {
  top: 2px !important;
  right: 2px !important;
}
</style>
