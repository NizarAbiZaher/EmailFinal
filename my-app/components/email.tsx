'use client'

import { useState, useTransition } from "react"
import toast from "react-hot-toast";
import { FormError } from "./error";



export default function Email() {
  
  const [loading, setLoading] = useState(false)
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("")
  const [error, setError] = useState(""); // New error state

  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true
    setError("");
    const email = event.target.email.value; // Get the email value from the form

    // Send the email to your server
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.message) {
        toast.success(data.message)
         // Show success message
        setEmail(""); 
        setError('Go here')
      } else {
        console.error(data); // Handle error response
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
    
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1">
      

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Web Developer</span> roadmap
        </h1>

        <p className="mt-3 text-xl font-medium">
          The roadmap will be sent to the email you put below
        </p>

        <div className="mt-2 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <div className="mt-2 w-300 rounded-xl border border-slate-100/20 p-6 text-left bg-[#131212]">
            <div className="py-3">
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">Email Address</label>

                <input 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} 
                  name="email" 
                  id="email" 
                  type="email" 
                  required 
                  className="w-full rounded-lg border px-3 py-2 text-md text-[#131212]" 
                  autoComplete="off"
                  placeholder="Email Address" />

    

                <button disabled={isPending || loading} type="submit" className="p-[3px] relative font-semibold w-full mt-4">
                       <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl w-full" />
                        <div className="px-8 py-2  w-full bg-zinc-800 rounded-xl  relative group transition duration-200 text-white hover:bg-transparent text-lg">
                  
                        Get Roadmap 
                      </div>
                </button>

                {error && <FormError />} 

              </form>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}
