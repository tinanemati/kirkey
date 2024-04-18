import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tjexdoxoedoaccfqfizr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqZXhkb3hvZWRvYWNjZnFmaXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzODQ0MDgsImV4cCI6MjAyODk2MDQwOH0.3oAKVJpp_Ohm-N8orsiCCNeXZQDngx981qimL3gWBDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
