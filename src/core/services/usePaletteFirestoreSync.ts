// src/core/services/usePaletteFirestoreSync.ts
import { useEffect, useRef } from "react";
import { useAuth } from "./AuthProvider";
import { usePalette } from "@/styles/PaletteProvider";
import { db } from "@/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import type { PaletteName } from "@/styles/PaletteProvider";

export function usePaletteFirestoreSync() {
 const { user } = useAuth();
 const { palette } = usePalette();
 const prevPalette = useRef<PaletteName | null>(null);

 useEffect(() => {
  if (!user) return;
  if (prevPalette.current === palette) return;
  prevPalette.current = palette;
  // Atualiza o campo palette no Firestore
  updateDoc(doc(db, "users", user.uid), { palette }).catch(() => {});
 }, [palette, user]);
}
