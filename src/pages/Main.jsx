import React from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "../components/Header/Header.jsx";

const supabase = createClient("https://wjoocdnkngzyrprnnytm.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb29jZG5rbmd6eXJwcm5ueXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzkyMjksImV4cCI6MjAzNjAxNTIyOX0.vBZyH45AvtMWgOzv2fRhMvJMO5xhcgaXpsV5rolYnq4");

function Main() {
  return (
  <>
    <Header></Header>
  </>
  )
}

export default Main;
