<template>
  <div class="admin-users bg-gray-100">
    <div class="container mx-auto px-4 py-8 relative z-10">
      <!-- Page Header -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        <h1 class="text-2xl font-bold mb-2 md:mb-0 text-gray-800">Manage Users</h1>
        <div class="stats flex flex-wrap gap-4">
          <div class="stat bg-white rounded-lg shadow-sm p-3 border border-gray-200">
            <div class="text-sm text-gray-600">Total Users</div>
            <div class="text-xl font-bold text-indigo-700">{{ users.length }}</div>
          </div>
          <div class="stat bg-white rounded-lg shadow-sm p-3 border border-gray-200">
            <div class="text-sm text-gray-600">Admins</div>
            <div class="text-xl font-bold text-indigo-700">{{ adminCount }}</div>
          </div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <!-- Search and Filter Controls -->
        <div class="mb-6 flex flex-col md:flex-row justify-between gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div class="relative flex-grow">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search users by name or email..." 
              class="w-full pl-10 p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-inner"
            >
          </div>
          
          <div class="flex gap-2">
            <Listbox v-model="roleFilter" as="div" class="relative">
              <ListboxButton class="relative w-full border border-gray-300 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer">
                <span class="block truncate">{{ roleFilterLabel }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>
              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  <ListboxOption v-for="option in roleOptions" :key="option.value" :value="option.value" v-slot="{ active, selected }">
                    <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                      <div class="flex items-center">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.label }}</span>
                      </div>
                      <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </Listbox>
            
            <button 
              @click="resetFilters" 
              class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white text-gray-700 shadow-sm"
              title="Reset filters"
            >
              <ArrowPathIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600 border-opacity-75"></div>
        </div>

        <!-- Empty State -->
        <div v-else-if="filteredUsers.length === 0" class="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
          <FaceFrownIcon class="h-12 w-12 mx-auto text-gray-400 mb-4" aria-hidden="true" />
          <p class="text-gray-500 text-lg">No users found matching your criteria.</p>
          <button 
            @click="resetFilters" 
            class="mt-3 px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Reset filters
          </button>
        </div>

        <!-- Users Table -->
        <div v-else class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead class="bg-gray-50 text-gray-700">
              <tr>
                <th 
                  class="py-3 px-4 text-left cursor-pointer hover:bg-blue-100/70 transition-colors border-b border-gray-200"
                  @click="sortUsers('name')"
                >
                  <div class="flex items-center">
                    Name
                    <SortIndicator :active="sortField === 'name'" :direction="sortDirection" />
                  </div>
                </th>
                <th 
                  class="py-3 px-4 text-left cursor-pointer hover:bg-blue-100/70 transition-colors border-b border-gray-200"
                  @click="sortUsers('email')"
                >
                  <div class="flex items-center">
                    Email
                    <SortIndicator :active="sortField === 'email'" :direction="sortDirection" />
                  </div>
                </th>
                <th 
                  class="py-3 px-4 text-left cursor-pointer hover:bg-blue-100/70 transition-colors border-b border-gray-200"
                  @click="sortUsers('createdAt')"
                >
                  <div class="flex items-center">
                    Date Joined
                    <SortIndicator :active="sortField === 'createdAt'" :direction="sortDirection" />
                  </div>
                </th>
                <th class="py-3 px-4 text-left border-b border-gray-200">Role</th>
                <th class="py-3 px-4 text-left border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="user in filteredUsers" 
                :key="user.id" 
                class="border-b hover:bg-blue-50 transition-colors"
                :class="{'bg-yellow-50': isCurrentUser(user)}"
              >
                <td class="py-3 px-4">
                  <div class="flex items-center">
                    <div class="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-semibold text-sm mr-2 shadow-sm">
                      {{ getInitials(user) }}
                    </div>
                    <div>
                      {{ user.firstName }} {{ user.lastName }}
                      <span v-if="isCurrentUser(user)" class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full border border-green-200">You</span>
                    </div>
                  </div>
                </td>
                <td class="py-3 px-4">{{ user.email }}</td>
                <td class="py-3 px-4">{{ formatDate(user.createdAt) }}</td>
                <td class="py-3 px-4">
                  <span 
                    :class="user.isAdmin ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300' : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300'" 
                    class="px-2 py-1 rounded-full text-sm"
                  >
                    {{ user.isAdmin ? 'Admin' : 'Customer' }}
                  </span>
                </td>
                <td class="py-3 px-4">
                  <div class="flex space-x-2">
                    <button 
                      :key="'edit-' + user.id"
                      @click="() => viewUserDetails(user)" 
                      class="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-blue-100"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- User Details Modal with HeadlessUI -->
      <TransitionRoot appear :show="showUserModal" as="template">
        <Dialog as="div" @close="closeUserModal" class="relative z-50">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all border border-gray-200">
                  <DialogTitle as="div" class="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
                    <h2 class="text-xl font-bold flex items-center text-gray-800">
                      <div class="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm mr-2 shadow-sm">
                        {{ getInitials(editedUser) }}
                      </div>
                      User Details
                      <span v-if="isCurrentUser(editedUser)" class="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full border border-green-200">Current User</span>
                    </h2>
                    <button @click="closeUserModal" class="text-gray-500 hover:text-gray-700">
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </DialogTitle>
                  
                  <div v-if="loading" class="flex justify-center py-4">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-4 border-indigo-600 border-opacity-75"></div>
                  </div>
                  
                  <form v-else @submit.prevent="saveUserChanges" class="space-y-5">
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          v-model="editedUser.firstName" 
                          class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                          required
                        >
                      </div>
                      
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          v-model="editedUser.lastName" 
                          class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                          required
                        >
                      </div>
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        v-model="editedUser.email" 
                        class="block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                        disabled
                      >
                    </div>
                    
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                      <input 
                        type="tel" 
                        v-model="editedUser.phone" 
                        class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                    </div>
                    
                    <div class="flex items-center space-x-2 bg-gray-50 p-4 rounded-md border border-gray-200">
                      <label class="block text-sm font-medium text-gray-700">Admin Role</label>
                      <Switch
                        v-model="editedUser.isAdmin"
                        :class="editedUser.isAdmin ? 'bg-indigo-600' : 'bg-gray-200'"
                        class="relative inline-flex h-6 w-11 items-center rounded-full"
                      >
                        <span class="sr-only">Admin Role</span>
                        <span
                          :class="editedUser.isAdmin ? 'translate-x-6' : 'translate-x-1'"
                          class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                        />
                      </Switch>
                      <span v-if="isCurrentUser(editedUser)" class="text-xs text-indigo-600 ml-2 font-medium">
                        (You can now change your admin status)
                      </span>
                    </div>
                    
                    <!-- Add special admin button for current user -->
                    <div v-if="isCurrentUser(editedUser) && !editedUser.isAdmin" class="mt-2">
                      <button 
                        type="button"
                        @click="makeCurrentUserAdmin" 
                        class="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-md text-sm font-medium shadow-sm"
                      >
                        Make yourself admin
                      </button>
                      <span class="text-xs text-gray-500 ml-2">
                        (This is a one-time action)
                      </span>
                    </div>
                    
                    <div class="flex justify-end space-x-3 pt-4 mt-3 border-t border-gray-200">
                      <button 
                        type="button"
                        @click="closeUserModal" 
                        class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        class="px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center gap-2"
                        :disabled="updating"
                      >
                        <svg v-if="updating" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span v-if="updating">Saving...</span>
                        <span v-else>Save Changes</span>
                      </button>
                    </div>
                  </form>

                  <div v-if="updateSuccess" class="mt-4 p-4 bg-green-100 text-green-800 rounded-md flex items-center border border-green-200">
                    <CheckCircleIcon class="h-5 w-5 mr-2" aria-hidden="true" />
                    <span>User updated successfully!</span>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Toast Notification -->
      <div 
        v-if="toast.show" 
        class="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
        @click="toast.show = false"
      >
        <CheckCircleIcon class="h-5 w-5 mr-2" aria-hidden="true" />
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive, nextTick, h } from 'vue';
import { firebaseService } from '../services/firebaseService';
import { getAuth } from 'firebase/auth';
import {
  Dialog, 
  DialogPanel, 
  DialogTitle, 
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Switch
} from '@headlessui/vue';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ArrowPathIcon,
  FaceFrownIcon,
  CheckCircleIcon
} from '@heroicons/vue/24/outline';
import { PencilIcon } from '@heroicons/vue/24/solid';

const users = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const showUserModal = ref(false);
const selectedUserId = ref(null);
const editedUser = ref({});
const updating = ref(false);
const currentUser = ref(null);
const updateSuccess = ref(false);
const toast = reactive({
  show: false,
  message: '',
  timeout: null
});

// New state for UI improvements
const sortField = ref('name');
const sortDirection = ref('asc');
const roleFilter = ref('all');

// Fetch users and current user when component mounts
onMounted(async () => {
  try {
    loading.value = true;
    
    // Get current logged in user using Firebase Auth
    const auth = getAuth();
    currentUser.value = auth.currentUser;
    console.log("Current auth user:", currentUser.value); // Debug current user
    
    // Get all users
    users.value = await firebaseService.getAllUsers();
    
    // Make sure the current user has all needed properties for display
    if (currentUser.value) {
      // Find the current user in the users list to get their full profile data
      const currentUserInList = users.value.find(user => 
        user.id === currentUser.value.uid || 
        user.uid === currentUser.value.uid || 
        user.email === currentUser.value.email
      );
      
      if (currentUserInList) {
        console.log("Current user found in database:", currentUserInList);
      } else {
        // If not found, ensure the current Firebase auth user has all required display fields
        console.log("Current user not found in database, enriching auth data");
        users.value.push({
          id: currentUser.value.uid,
          uid: currentUser.value.uid,
          email: currentUser.value.email,
          firstName: currentUser.value.displayName?.split(' ')[0] || 'Current',
          lastName: currentUser.value.displayName?.split(' ')[1] || 'User',
          isAdmin: true, // Assume admin since they can access this page
          createdAt: currentUser.value.metadata?.creationTime || new Date()
        });
      }
    }
    
    // Log all users to debug
    console.log("All users:", users.value);
    
  } catch (error) {
    console.error('Failed to load users:', error);
  } finally {
    loading.value = false;
  }
});

// Get initials for avatar display
const getInitials = (user) => {
  if (!user) return '?';
  const first = user.firstName ? user.firstName[0] : '';
  const last = user.lastName ? user.lastName[0] : '';
  return (first + last).toUpperCase() || '?';
};

// Check if user is the current logged-in user
const isCurrentUser = (user) => {
  if (!user || !currentUser.value) return false;
  const isCurrentUserMatch = 
    user.id === currentUser.value.uid || 
    user.uid === currentUser.value.uid || 
    user.email === currentUser.value.email;
  
  if (isCurrentUserMatch && !user.email && currentUser.value.email) {
    // If email is missing but we know it, add it to the user object
    user.email = currentUser.value.email;
  }
  
  return isCurrentUserMatch;
};

// Show toast notification
const showToast = (message) => {
  if (toast.timeout) {
    clearTimeout(toast.timeout);
  }
  
  toast.message = message;
  toast.show = true;
  
  toast.timeout = setTimeout(() => {
    toast.show = false;
  }, 3000);
};

// Sort users
const sortUsers = (field) => {
  if (sortField.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = field;
    sortDirection.value = 'asc';
  }
};

// Reset filters
const resetFilters = () => {
  searchQuery.value = '';
  roleFilter.value = 'all';
};

// Admin count
const adminCount = computed(() => {
  return users.value.filter(user => user.isAdmin).length;
});

// Sort indicator component for table headers
const SortIndicator = {
  props: {
    active: Boolean,
    direction: String
  },
  setup(props) {
    return () => {
      if (!props.active) {
        return h('span', { class: 'ml-1 text-gray-300' }, '↕');
      }
      return h(
        'span',
        { class: 'ml-1 text-gray-700' },
        props.direction === 'asc' ? '↑' : '↓'
      );
    };
  }
};

// Filtered and sorted users
const filteredUsers = computed(() => {
  let result = [...users.value];
  
  // Apply role filter
  if (roleFilter.value !== 'all') {
    const isAdmin = roleFilter.value === 'admin';
    result = result.filter(user => user.isAdmin === isAdmin);
  }
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(user => 
      user.email?.toLowerCase().includes(query) || 
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(query)
    );
  }
  
  // Apply sorting
  result.sort((a, b) => {
    let valA, valB;
    
    if (sortField.value === 'name') {
      valA = `${a.firstName} ${a.lastName}`.toLowerCase();
      valB = `${b.firstName} ${b.lastName}`.toLowerCase();
    } else if (sortField.value === 'email') {
      valA = a.email?.toLowerCase() || '';
      valB = b.email?.toLowerCase() || '';
    } else if (sortField.value === 'createdAt') {
      // Convert to timestamp for comparison
      valA = a.createdAt?.seconds || 0;
      valB = b.createdAt?.seconds || 0;
    }
    
    const comparison = valA > valB ? 1 : valA < valB ? -1 : 0;
    return sortDirection.value === 'asc' ? comparison : -comparison;
  });
  
  return result;
});

// Format date for display
const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  try {
    let date;
    
    if (timestamp.toDate && typeof timestamp.toDate === 'function') {
      date = timestamp.toDate();
    } else if (timestamp.seconds) {
      date = new Date(timestamp.seconds * 1000);
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else {
      return 'N/A';
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'N/A';
  }
};

// View and edit user details - Fixed with defensive programming and nextTick
const viewUserDetails = async (user) => {
  try {
    // Validate user object to prevent errors
    if (!user || !user.id) {
      console.error('Invalid user object:', user);
      return;
    }
    
    // Clean user data to ensure it's safe to use
    const safeUser = {
      id: user.id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      isAdmin: Boolean(user.isAdmin),
      createdAt: user.createdAt || null
    };
    
    // First update the ID, then wait for DOM to update
    selectedUserId.value = safeUser.id;
    
    // Use nextTick to ensure DOM is ready before continuing
    await nextTick();
    
    // Now safely update the editedUser and show modal
    editedUser.value = { ...safeUser };
    showUserModal.value = true;
  } catch (error) {
    console.error('Error opening user details:', error);
    alert('Could not open user details. Please try again.');
  }
};

// Close user modal
const closeUserModal = () => {
  showUserModal.value = false;
  editedUser.value = {};
  selectedUserId.value = null;
  updateSuccess.value = false;
};

// Add function to make current user admin
const makeCurrentUserAdmin = () => {
  if (editedUser.value) {
    editedUser.value.isAdmin = true;
  }
};

// Save user changes
const saveUserChanges = async () => {
  if (!selectedUserId.value) return;
  
  try {
    updating.value = true;
    const userDataToUpdate = {
      firstName: editedUser.value.firstName || '',
      lastName: editedUser.value.lastName || '',
      phone: editedUser.value.phone || '',
      isAdmin: Boolean(editedUser.value.isAdmin)
    };

    // If email is missing but we have currentUser email, add it
    if (!editedUser.value.email && currentUser.value && isCurrentUser(editedUser.value)) {
      userDataToUpdate.email = currentUser.value.email;
    }
    
    console.log('Updating user with data:', userDataToUpdate);
    
    await firebaseService.updateUser(selectedUserId.value, userDataToUpdate);
    
    // Update local user list
    const index = users.value.findIndex(user => user.id === selectedUserId.value);
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...userDataToUpdate };
    }

    updateSuccess.value = true;
    setTimeout(() => {
      closeUserModal();
      showToast(`User ${userDataToUpdate.firstName} ${userDataToUpdate.lastName} updated successfully`);
    }, 1500);
    
    // Show confirmation if admin status was changed for current user
    if (isCurrentUser(editedUser.value)) {
      showToast(`Your admin status has been set to: ${userDataToUpdate.isAdmin ? 'Administrator' : 'Customer'}`);
    }
  } catch (error) {
    console.error('Failed to update user:', error);
    alert('Failed to update user. Please try again.');
  } finally {
    updating.value = false;
  }
};

// Role filter options
const roleOptions = [
  { value: 'all', label: 'All Roles' },
  { value: 'admin', label: 'Admins' },
  { value: 'customer', label: 'Customers' }
];

// Computed label for role filter
const roleFilterLabel = computed(() => {
  return roleOptions.find(option => option.value === roleFilter.value)?.label || 'All Roles';
});
</script>

<style scoped>
.admin-users {
  min-height: 100vh;
}

/* Responsive improvements */
@media (max-width: 640px) {
  table {
    display: block;
    overflow-x: auto;
  }
  
  .stats {
    justify-content: space-around;
    width: 100%;
  }
}
</style>
