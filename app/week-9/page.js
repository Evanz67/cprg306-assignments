"use client"
import { useUserAuth } from "./_utils/auth-context.js";
import { Shopping } from "./shopping-list/page.js";
 
export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    async function signIn() {
        try {
            await gitHubSignIn();
        } catch(e) {
            console.log(e);
        }
    }

    // Sign out of Firebase
    async function logout() {
        try {
            await firebaseSignOut();
        } catch(e) {
            console.log(e);
        }
    }

    if (user === null) {
        return (
            <div>
                <h1 className="text-4xl font-bold pb-4">Please log in</h1>
                <button className="border-2 p-1 bg-emerald-500 rounded px-3" onClick={signIn}>Sign In</button>
            </div>
        )
    }
    
    return (     
        <div>
            <h1>Welcome, {user.displayName} ({user.email})</h1>
            <Shopping />
            <button className="border-2 p-1 bg-emerald-500 rounded px-3" onClick={logout}>Logout</button>
        </div>
    );
}


 

 
