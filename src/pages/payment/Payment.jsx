import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  fullName: z.string(),
  email: z.email(),
  phoneNumber: z.string(),
});

export const Payment = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [isModal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <main className="bg-[#A0A3BD33] h-full py-10 relative">
        <section className="flex flex-row justify-center items-center gap-4 mx-8 mb-4">
          <div className="flex flex-col items-center justify-between w-14 h-16 ">
            <div className="flex items-center justify-center bg-green-600 text-white w-10 h-10 rounded-full">
              ✓
            </div>
            <div className="text-xs text-center w-max font-[Mulish]">
              Dates & Time
            </div>
          </div>
          <div className="border-b border-dashed border-gray-400 h-min w-10"></div>
          <div className="flex flex-col items-center justify-between gap-2 w-14 h-16">
            <div className="flex items-center justify-center bg-green-600 text-white w-10 h-10 rounded-full">
              ✓
            </div>
            <div className="text-xs font-[Mulish]">Seat</div>
          </div>
          <div className="border-b border-dashed border-gray-400 h-min w-10"></div>
          <div className="flex flex-col items-center justify-between gap-2 w-14 h-16">
            <div className="flex items-center justify-center bg-blue-700 text-white w-10 h-10 rounded-full">
              3
            </div>
            <div className="text-xs font-[Mulish]">Payment</div>
          </div>
        </section>

        <form
          className="flex flex-col items-center w-full mb-12 "
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <section className="bg-white border border-black w-[550px] rounded-md">
            {/* payment info */}
            <div className="flex flex-col items-start px-8 py-6">
              <div className="font-bold text-lg font-[Mulish]">
                Payment Info
              </div>

              <div className="w-full py-2">
                <div className="text-xs text-gray-400 font-[Mulish]">
                  DATE & TIME
                </div>
                <div className="border-b border-gray-200 leading-6 font-[Mulish]">
                  Tuesday, 07 July 2020 at 02:00pm
                </div>
              </div>

              <div className="w-full py-2">
                <div className="text-xs text-gray-400 font-[Mulish]">
                  MOVIE TITLE
                </div>
                <div className="border-b border-gray-200 leading-6 font-[Mulish]">
                  Spider-Man: Homecoming
                </div>
              </div>

              <div className="w-full py-2">
                <div className="text-xs text-gray-400 font-[Mulish]">
                  CINEMA NAME
                </div>
                <div className="border-b border-gray-200 leading-6 font-[Mulish]">
                  CineOne21 Cinema
                </div>
              </div>

              <div className="w-full py-2">
                <div className="text-xs text-gray-400 font-[Mulish]">
                  NUMBER OF TICKETS
                </div>
                <div className="border-b border-gray-200 leading-6">
                  3 pieces
                </div>
              </div>

              <div className="w-full py-2">
                <div className="text-xs text-gray-400 font-[Mulish]">
                  TOTAL PAYMENT
                </div>
                <div className="border-b border-gray-200 text-blue-700 text-xs font-bold leading-6 font-[Mulish]">
                  $30,00
                </div>
              </div>
            </div>

            {/* personal info */}
            <div className="relative flex flex-col items-start px-8">
              <div className="font-bold text-lg font-[Mulish]">
                Personal Information
              </div>

              <div className="flex flex-col w-full py-2 gap-1">
                <label className="text-xs text-gray-500 font-[Mulish]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Input Name"
                  className="h-10 pl-6 border rounded-md w-full"
                  {...register("fullName")}
                />
              </div>

              <div className="flex flex-col w-full py-2 gap-1">
                <label className="text-xs text-gray-500 font-[Mulish]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Input Email"
                  className="h-10 pl-6 border rounded-md w-full"
                  formNoValidate={true}
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col w-full py-2 gap-1 relative">
                <label className="text-xs text-gray-500 font-[Mulish]">
                  Phone Number
                </label>
                <span className="absolute text-xs text-gray-500 left-6 top-[38px] border-r border-gray-300 pr-2">
                  +62
                </span>
                <input
                  type="tel"
                  placeholder="Input Phone Number"
                  className="h-10 pl-16 border rounded-md w-full"
                  {...register("phoneNumber")}
                />
              </div>
            </div>

            {/* payment method */}
            <div className="flex flex-col items-start px-8 py-6">
              <div className="font-bold text-lg py-2 font-[Mulish]">
                Payment Method
              </div>
              <div className="grid grid-cols-4 gap-5 w-full py-2">
                {[
                  "gugel",
                  "visa",
                  "gopay",
                  "peypal",
                  "dana",
                  "baca",
                  "beri",
                  "opo",
                ].map((method) => (
                  <button
                    key={method}
                    className="h-10 w-full border-2 border-gray-300 rounded-md bg-white hover:cursor-pointer"
                  >
                    {method}
                  </button>
                ))}
              </div>
              <div className="w-full py-2">
                <button
                  type="submit"
                  className="h-10 w-full rounded bg-blue-700 text-white font-bold text-sm tracking-wide font-[Mulish]"
                  onClick={openModal}
                >
                  Pay your order
                </button>
              </div>
            </div>
          </section>
        </form>

        {/* modal */}
        {isModal && (
          <div className="w-screen h-full absolute inset-0 z-10 bg-linear-[rgb(0,0,0,0.7)]">
            <section className="flex justify-center items-center absolute inset-0">
              <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
                <div className="text-xl font-semibold mb-4 font-[Mulish]">
                  Payment Info
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600 font-[Mulish]">
                    No Rekening Virtual:
                  </div>
                  <div className="text-sm font-medium font-[Mulish]">
                    1234567890
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">
                    Copy
                  </button>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600 font-[Mulish]">
                    Total Payment:
                  </div>
                  <div className="text-lg font-bold text-blue-700 font-[Mulish]">
                    $30
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4 font-[Mulish]">
                  Pay this payment bill before it is due,{" "}
                  <span className="font-semibold font-[Mulish]">
                    June 23, 2023
                  </span>
                  . If the bill has not been paid by the specified time, it will
                  be forfeited.
                </div>

                <div className="flex gap-4 flex-col">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-[Mulish]">
                    Check Payment
                  </button>

                  <button
                    onClick={closeModal}
                    className="bg-transparent text-[#1D4ED8]"
                  >
                    Pay Later
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
};
