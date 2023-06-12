'use client'

import { transactionService } from "@/services";
import { TransactionTypes } from "@/types/transaction/transaction.type";
import { FunctionComponent, useState } from "react";

const Transactions: FunctionComponent<{ params: any}> = ({ params }) => {
  const [type, setType] = useState(TransactionTypes.DEPOSIT)
  console.log('⚡ ~ Transactions ~ params:', params);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('⚡ ~ handleSubmit ~ event.target:', event.target);
    const target = event.target as typeof event.target & {
      amount: { value: string };
    };

    const amount = target.amount.value;

    if (!amount) {
      return;
    }
    console.log('⚡ ~ handleSubmit ~ type:', type);
    console.log('⚡ ~ handleSubmit ~ amount:', amount);

  const transaction = await transactionService.createTransaction({ amount: +amount, type: +type, accountId: params.account })
    console.log('⚡ ~ handleSubmit ~ transaction:', transaction);
    // const res = await authenticationService.login({ email, password })

    // if (res.code == 200) {
    //   router.push('/dashboard');
    //   localStorageService.setPerson(res.payload);
    // }

  }

  return (
    <main>
      <div className="flex flex-col justify-center h-screen w-screen items-center">
        <form className="w-full md:w-1/2 flex flex-col items-center " onSubmit={handleSubmit}>
          <h1>transactions</h1>

          <div className="w-3/4 mb-6">
              <input type="number" name="amount" id="amount" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Amount"/>
          </div>
          <div className="w-3/4 mb-6">
            <input 
              checked={type == TransactionTypes.DEPOSIT} 
              type="radio" 
              value={TransactionTypes.DEPOSIT} name="deposito" 
              onClick={() => setType(TransactionTypes.DEPOSIT)}
              id="deposito"
            />
             <label htmlFor="deposito">deposito</label>
            <input 
              checked={type == TransactionTypes.WITHDRAWAL} 
              type="radio" 
              value={TransactionTypes.WITHDRAWAL} name="retiro" 
              onClick={() => setType(TransactionTypes.WITHDRAWAL)}
              id="retiro"
            />
            <label htmlFor="retiro">retiro</label>
          </div>
          <div className="w-3/4 mt-4">
              <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">CREATE TRANSACTION</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Transactions;