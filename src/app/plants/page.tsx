import { stackServerApp } from '@/stack';
import { SignUp } from '@stackframe/stack';
import { Dice1 } from 'lucide-react';
import React from 'react';

async function page() {
  const user = await stackServerApp.getUser();
  const app  = stackServerApp.urls;
  
  return (
    <>
    {user ? (
      <h1>Inventory Table</h1>
    ) : (
      <div className="flex justify-center mt-20 items-center">
        <SignUp />
      </div>
    )}
    </>
  )
}

export default page;