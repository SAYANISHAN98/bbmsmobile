import "react-native-url-polyfill/auto";
import * as SecureStore from "expo-secure-store";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";
// Define the adapter for secure storage
const ExpoSecureStoreAdapter = {
  getItem: async (key) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error(`Error getting item with key ${key}:`, error);
      throw error;
    }
  },
  setItem: async (key, value) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error(`Error setting item with key ${key}:`, error);
      throw error;
    }
  },
  removeItem: async (key) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(`Error removing item with key ${key}:`, error);
      throw error;
    }
  },
};

// Replace these with your actual Supabase URL and Anon Key
const supabaseUrl = "https://jjnhevzcwuocsxlqbjoc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqbmhldnpjd3VvY3N4bHFiam9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwODcyMDEsImV4cCI6MjAzNTY2MzIwMX0.BAWrB9HacmcsmiTf2oygl2UG89JX3WmiUykZWN8VEvc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
