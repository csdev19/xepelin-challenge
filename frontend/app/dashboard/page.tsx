'use client';

import { accountsService, localStorageService } from "@/services";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter()
  const [accounts, setAccounts] = useState([]);

  const [userName, setUserName] = useState('');
  useEffect(() => {
    (async () => {
      const accounts = await accountsService.getAccounts();
      setAccounts(accounts);
    })()
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      balance: { value: string };
      name: { value: string };
    };

    // const email = target.email.value;
    // const password = target.password.value;

    // if (!email || !password) {
    //   return;
    // }

    // const res = await authenticationService.login({ email, password })
    // console.log('⚡ ~ handleSubmit ~ res:', res);

    // if (res.code == 200) {
    //   router.push('/dashboard');
    //   localStorageService.setPerson(res.payload);
    // }

  }

  return (
    <main>
      <div className="flex flex-col justify-center h-screen w-screen items-center">
        <div>
          <h1>Welcome { userName }</h1>
        </div>

        <div>
          <button className="bg-indigo-500" onClick={() => router.push('dashboard/create-account')} type="button">
            Create an account
            </button>
        </div>

        <div>
          {(accounts || []).map((account: any) => ( 
            <div key={account.id}>
              <h1>Account name: {account.name}</h1>
              <h2>Account balance{account.balance}</h2>
              <button type="button">Go to edit account</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Dashboard;