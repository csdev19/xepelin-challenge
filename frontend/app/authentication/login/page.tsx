'use client';

import { useRouter } from 'next/navigation'
import { accountsService, authenticationService, localStorageService } from "@/services";

export default function Login() {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    if (!email || !password) {
      return;
    }

    const res = await authenticationService.login({ email, password })

    if (res.code == 200) {
      router.push('/dashboard');
      localStorageService.setPerson(res.payload);
    }

  }

  return (
    <main>
      <div className="flex justify-center h-screen w-screen items-center">
        <form className="w-full md:w-1/2 flex flex-col items-center " onSubmit={handleSubmit}>
          <div className="w-3/4 mb-6">
              {/* <Input type="email" name="email" id="email" placeholder="User name" /> */}
              <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="User Name"/>
          </div>
          <div className="w-3/4 mb-6">
              {/* <Input type="password" name="password" id="password" placeholder="Password" /> */}
              <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" />
          </div>
          <div className="w-3/4 mt-4">
              <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
          </div>
        </form>
      </div>
    </main>
  )
}
