import create from 'zustand';
import { persist } from 'zustand/middleware'
import { generateEmojis } from '../utils';

export const useStore = create(
    persist(
        (set) => ({
            emojis: [],
            matchedEmojis: [],

            setEmojis: (emojis) => set(({ emojis })),
            setMatchedEmojis: (matchedEmojis) => set({ matchedEmojis }),
        })
    )
)