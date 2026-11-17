import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [username, setUsername] = useState('SoundVault Explorer');
    // Default favorites: tracks '1', '2', and '3'
    const [favorites, setFavorites] = useState(['1', '2', '3']);

    const toggleFavorite = (trackId) => {
        setFavorites((prev) =>
            prev.includes(trackId)
                ? prev.filter((id) => id !== trackId)
                : [...prev, trackId]
        );
    };

    return (
        <AppContext.Provider value={{ username, setUsername, favorites, toggleFavorite }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);