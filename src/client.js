import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://fdpvvgicddjpvrtnplci.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkcHZ2Z2ljZGRqcHZydG5wbGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNTE5ODIsImV4cCI6MTk5MjgyNzk4Mn0.WnXYCh6dv7u2a5t2GUknE0iTPe2a9M-yE4sbYnl5hT4"
);
