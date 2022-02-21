import { writable } from "svelte/store";

const dataStore = writable({
    "encrypted": true,
    "mykey": localStorage.getItem('mykey') || ""
});


// https://dev.to/danawoodman/svelte-quick-tip-connect-a-store-to-local-storage-4idi

// Anytime the store changes, update the local storage value.
dataStore.subscribe((value) => localStorage.setItem('mykey', value.mykey));

export default dataStore;