import { writable } from 'svelte/store';

const visitors = writable(0);

export default visitors;