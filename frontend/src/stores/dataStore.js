import { writable } from "svelte/store";

const dataStore = writable({
    "encrypted":true,
    "key":""
});

export default dataStore;