import { writable } from 'svelte/store'

export const useAudio = writable(false)

export const handleAudio = () => {
	useAudio.update((state) => !state)
}