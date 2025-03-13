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
                    <p>123 Bead Street</p>
                    <p>Artisan City, AC 12345</p>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <EnvelopeIcon class="h-6 w-5 text-light-neutral-500 dark:text-dark-neutral-500" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a class="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary" href="mailto:info@beabedart.com">info@beabedart.com</a>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Opening hours -->
            <div class="bg-light-primary dark:bg-dark-primary rounded-lg shadow-sm ring-1 ring-light-neutral-300 dark:ring-dark-neutral-700 p-8">
              <h3 class="text-base font-semibold leading-7 text-light-text-primary dark:text-dark-text-primary">Studio Hours</h3>
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

            <!-- Map placeholder -->
            <div class="bg-light-neutral-100 dark:bg-dark-neutral-800 rounded-lg overflow-hidden h-64 flex items-center justify-center">
              <MapPinIcon class="h-12 w-12 text-light-neutral-400 dark:text-dark-neutral-500" aria-hidden="true" />
              <span class="ml-2 text-light-text-secondary dark:text-dark-text-secondary">Map location</span>
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

/* Rest of the styles are handled by utility classes in the template */
</style>
