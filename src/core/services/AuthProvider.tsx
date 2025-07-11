"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { db } from "@/lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

// Dados extras do Firestore para o usuário
export type UserProfileData = {
 displayName?: string | null;
 photoURL?: string | null;
 // Adicione outros campos customizados do Firestore aqui
};

export type UserWithProfile = User & UserProfileData;

interface AuthContextType {
 user: UserWithProfile | null;
 isLogged: boolean;
 loading: boolean;
 setUser: React.Dispatch<React.SetStateAction<UserWithProfile | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
 undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const [user, setUser] = useState<UserWithProfile | null>(null);
 const [isLogged, setIsLogged] = useState(false);
 const [loading, setLoading] = useState<boolean>(true);

 console.log("[AuthProvider] render", { loading, user, isLogged });

 useEffect(() => {
  console.log("[AuthProvider] useEffect mounted");
  const unsubscribe = onAuthStateChanged(auth, (userState) => {
   console.log("[AuthProvider] onAuthStateChanged fired", userState);
   if (userState) {
    const userDoc = doc(db, "users", userState.uid);
    const unsubscribeSnapshot = onSnapshot(
     userDoc,
     (docSnapshot) => {
      const userData = docSnapshot.exists()
       ? (docSnapshot.data() as UserProfileData)
       : {};
      console.log("[AuthProvider] Firestore userData", userData);
      setUser({ ...userState, ...userData });
      setIsLogged(true);
      setLoading(false);
     },
     (err) => {
      console.error("[AuthProvider] Firestore onSnapshot error", err);
      setUser({ ...userState });
      setIsLogged(true);
      setLoading(false);
     }
    );
    // Limpa o snapshot listener ao deslogar
    return () => {
     console.log("[AuthProvider] Unsubscribing Firestore snapshot");
     unsubscribeSnapshot();
    };
   } else {
    setUser(null);
    setIsLogged(false);
    setLoading(false);
   }
  });
  return () => {
   console.log("[AuthProvider] Unsubscribing onAuthStateChanged");
   unsubscribe();
  };
 }, []);

 useEffect(() => {
  console.log("[AuthProvider] useEffect", { loading, user, isLogged });
 }, [loading, user, isLogged]);

 return (
  <AuthContext.Provider value={{ user, isLogged, loading, setUser }}>
   {loading ? <LoadingScreen /> : children}
  </AuthContext.Provider>
 );
};

const LoadingScreen = () => (
 <div className="h-screen w-full flex justify-center items-center bg-gray-100">
  <div className="flex gap-2">
   {[...Array(3)].map((_, i) => (
    <div
     key={i}
     className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
     style={{ animationDelay: `${i * 0.2}s` }}
    />
   ))}
  </div>
 </div>
);

export const useAuth = () => {
 const context = useContext(AuthContext);
 if (!context) throw new Error("useAuth must be used within an AuthProvider");
 return context;
};
