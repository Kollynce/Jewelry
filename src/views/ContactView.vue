<template>
  <div class="bg-white">
    <div class="relative isolate bg-gray-50">
      <!-- Background decoration removed for simplicity -->
      
      <!-- Page header -->
      <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            We'd love to hear from you! Let us know how we can help.
          </p>
        </div>

        <div class="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
          <!-- Contact form -->
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div class="mt-2">
                    <input v-model="form.firstName" type="text" id="first-name" autocomplete="given-name" 
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      :class="{ 'ring-red-500': errors.firstName }">
                    <p v-if="errors.firstName" class="mt-2 text-sm text-red-600">{{ errors.firstName }}</p>
                  </div>
                </div>

                <div>
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                  <div class="mt-2">
                    <input v-model="form.lastName" type="text" id="last-name" autocomplete="family-name" 
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      :class="{ 'ring-red-500': errors.lastName }">
                    <p v-if="errors.lastName" class="mt-2 text-sm text-red-600">{{ errors.lastName }}</p>
                  </div>
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <div class="mt-2">
                  <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" 
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.email }">
                  <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium leading-6 text-gray-900">Subject</label>
                <div class="mt-2">
                  <input v-model="form.subject" type="text" id="subject" 
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.subject }">
                  <p v-if="errors.subject" class="mt-2 text-sm text-red-600">{{ errors.subject }}</p>
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                <div class="mt-2">
                  <textarea v-model="form.message" id="message" rows="4" 
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    :class="{ 'ring-red-500': errors.message }"></textarea>
                  <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
                </div>
              </div>

              <div class="flex justify-end">
                <button type="submit" 
                  :disabled="isSubmitting"
                  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </form>

            <div v-if="formSubmitted" class="mt-6 rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact information -->
          <div class="space-y-10">
            <div class="rounded-lg bg-white shadow-sm ring-1 ring-gray-200 p-8">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Contact Information</h3>
              <dl class="mt-4 space-y-4 text-sm leading-6">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                    <MapPinIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p>123 Bead Street</p>
                    <p>Artisan City, AC 12345</p>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <EnvelopeIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="hover:text-gray-900" href="mailto:info@beabedart.com">info@beabedart.com</a>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Opening hours -->
            <div class="rounded-lg bg-white shadow-sm ring-1 ring-gray-200 p-8">
              <h3 class="text-base font-semibold leading-7 text-gray-900">Studio Hours</h3>
              <dl class="mt-4 space-y-4 text-sm leading-6">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Hours</span>
                    <ClockIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p class="mt-1">Monday - Friday: 9AM - 6PM</p>
                    <p class="mt-1">Saturday: 10AM - 4PM</p>
                    <p class="mt-1">Sunday: Closed</p>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Map placeholder -->
            <div class="rounded-lg overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
              <MapPinIcon class="h-12 w-12 text-gray-400" aria-hidden="true" />
              <span class="ml-2 text-gray-500">Map location</span>
              <!-- Replace with actual map embed -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
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
</script>
