'use client';

import { accountsService } from "@/services";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const CreateAccount = () => {
  const router = useRouter()

  useEffect(() => {

  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      balance: { value: string };
      name: { value: string };
    };

    const balance = +target.balance.value;
    const name = target.name.value;

    if (!balance || !name) {
      return;
    }

    const res = await accountsService.createAccount({ balance, name })
    // console.log('⚡ ~ handleSubmit ~ res:', res);

    // if (res.code == 200) {
    //   router.push('/CreateAccount');
    //   localStorageService.setPerson(res.payload);
    // }

  }

  return (
    <main>
      <div className="flex justify-center h-screen w-screen items-center">
        <div>
          <button type="button" className="py-4 bg-blue-400" onClick={() => router.back()}>
            go back
          </button>
        </div>
        <form className="w-full md:w-1/2 flex flex-col items-center " onSubmit={handleSubmit}>
          <h1>Create account</h1>
          <div className="w-3/4 mb-6">
                <input type="number" name="balance" id="balance" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Initial balance"/>
            </div>
            <div className="w-3/4 mb-6">
                <input type="text" name="name" id="name" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Account name" />
            </div>
            <div className="w-3/4 mt-4">
                <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">Create Account</button>
            </div>
        </form>
      </div>
    </main>
  )
}

export default CreateAccount;