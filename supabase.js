// supabase.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = '';
const supabaseKey = ''
  const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
