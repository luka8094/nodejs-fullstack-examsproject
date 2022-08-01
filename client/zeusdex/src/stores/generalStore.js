import {writable} from "svelte/store"

export const tokens = writable([])

export let loggedin = writable(false)