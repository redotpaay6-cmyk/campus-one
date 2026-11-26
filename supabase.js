
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://rpvoajlzkoynimfowzgl.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_4KCDnpiH2lCjKhKj4s8dmA_Wv71o552";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
