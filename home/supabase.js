// supabase.js - Central Supabase Connection
const supabase = window.supabase.createClient(
    "https://vdefkqccbueaoylrlsqx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZWZrcWNjYnVlYW95bHJsc3F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxOTY2NDgsImV4cCI6MjA1Mzc3MjY0OH0.NbczYrUd2M1Bxg2XTfC32DCAr5EnNpv3-mePqd1rsiQ"
);

// Function to log errors
function handleError(error) {
    console.error("Supabase Error:", error.message);
    alert("An error occurred: " + error.message);
}