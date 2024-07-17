// src/useAuth.js
import { useState, useEffect } from 'react'
import {supabase} from "./ServerClient.js";

export const useAuth = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('supabase.auth.token'))

        if (session) {
            supabase.auth.setSession(session)
            setUser(session.user)
        }

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session) {
                    localStorage.setItem('supabase.auth.token', JSON.stringify(session))
                    setUser(session.user)
                } else {
                    localStorage.removeItem('supabase.auth.token')
                    setUser(null)
                }
            }
        )

        return () => {
            authListener.unsubscribe();
        }
    }, [])

    const getUserUUID = () => {
        const user = supabase.auth.getUser
        return user ? user.id : null
    }

    return { user, getUserUUID }
}