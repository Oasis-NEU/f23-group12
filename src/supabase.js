import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://bhhhuiwpokecohcaplyb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoaGh1aXdwb2tlY29oY2FwbHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODY0ODIsImV4cCI6MjAxMjk2MjQ4Mn0.9RQGguj5F5H51m6ntCx4iM56hKCagKtcj0aUWyMpJXM"


export const supabase = createClient(supabaseURL, supabaseKey);