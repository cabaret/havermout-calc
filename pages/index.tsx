import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [numberOfDays, setNumberOfDays] = useState<string>("2");

  return (
    <>
      <Head>
        <title>havermout</title>
        <meta name="description" content="Havermout calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-center text-2xl pt-10">havermout</h1>

        <div className="text-center pt-8">
          <label className="flex justify-center">
            aantal porties:{" "}
            <input
              type="text"
              className="border w-12 ml-2 pl-2"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </label>

          <pre className="mt-8 p-4 inline-flex border-2 border-gray-600 justify-center text-left flex-col gap-y-2">
            <div className="flex justify-between gap-x-8">
              <span>havermout:</span>
              <strong>
                {numberOfDays === "" ? 0 : parseInt(numberOfDays, 10) * 40}g
              </strong>
            </div>
            <div className="flex justify-between gap-x-8">
              <span>vanillepoeder:</span>
              <strong>
                {numberOfDays === "" ? 0 : parseInt(numberOfDays, 10) * 30}g
              </strong>
            </div>
            <div className="flex justify-between gap-x-8">
              <span>pindakaas:</span>
              <strong>
                {numberOfDays === "" ? 0 : parseInt(numberOfDays, 10) * 20}g
              </strong>
            </div>
            <div className="flex justify-between gap-x-8">
              <span>water:</span>
              <strong>
                {numberOfDays === "" ? 0 : parseInt(numberOfDays, 10) * 50}ml
              </strong>
            </div>
          </pre>
        </div>
      </main>
    </>
  );
}
