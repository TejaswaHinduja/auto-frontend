import PayerList from "./Payerlist";
import PaymentStatus from "./PaymentStatus";

export default function InvoiceCard() {
  return (
    <section className="w-[min(95%,425px)] mx-auto my-4 font-sans">

      <section className="relative mb-8 h-[630px]">

        {/* Slot */}
        <div className="w-full h-[120px] bg-[#2b2b2b] border-2 border-[#2c2c2c] rounded-xl shadow-[0_0_1px_0_#000,0_5px_15px_0_rgba(0,0,0,0.45)]">
          <div className="bg-black rounded-full w-[90%] h-[25px] mx-auto my-4 border border-[#1b1b1b] shadow-[0_0_1px_0_#000,0_5px_15px_0_rgba(0,0,0,0.45)]"></div>
        </div>

        {/* Invoice */}
        <div className="absolute w-[85%] top-6 left-1/2 -translate-x-1/2 bg-white text-gray-500 p-4 rounded-lg shadow-[0_5px_25px_0_rgba(0,0,0,0.15)]">

          <h2 className="text-lg text-center mb-5 font-medium text-black border-y border-dashed py-2">
            Pricing
          </h2>

          <p className="flex justify-between mb-2">
            Total <span className="font-bold text-black">$5</span>
          </p>
          <hr className="my-3"/>
          <PaymentStatus />
          <div className="flex gap-3 mt-5">
            <button className="flex-1 rounded-full py-2 text-sm bg-white border shadow-md">
              Download Invoice
            </button>

          </div>

        </div>
      </section>

    </section>
  );
}