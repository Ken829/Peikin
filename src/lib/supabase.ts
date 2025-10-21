import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fhmqbmijaxwyicxlqwmm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZobXFibWlqYXh3eWljeGxxd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyNjMxODUsImV4cCI6MjA3NTgzOTE4NX0.SNBETJ-ncxswUhGdUVPfAdyn7T8iXW-VKs55OrZZ2wQ';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
