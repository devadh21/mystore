"use client"
import React, {useEffect,useState} from 'react'
import ButtonGoogle from "@/elements/ButtonGoogle";
import { getProviders, signIn } from "next-auth/react";

export default function LoginPage() {
  const [providers, setProviders] = useState()

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      
      setProviders(res);
    };

    fetchProviders();
  }, []);

  const handleClick = ()=>{
    if (providers?.google) {
      signIn(providers.google.id, {
        callbackUrl: '/admin',  // Redirect to home page after login
      });
    } else {
      console.error('Google provider is not available');
    }
  };

  return (
    <div>
            {providers?.google ? (
        <ButtonGoogle onClick={handleClick} />
      ) : (
        <p>Loading providers...</p>
      )}
      
    </div>
  )
}
