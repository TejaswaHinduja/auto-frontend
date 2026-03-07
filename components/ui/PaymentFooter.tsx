export default function PaymentFooter() {
  return (
    <>
      <hr className="my-3" />

      <div className="flex justify-between items-center mx-4 text-gray-500">

        <p>Payment Method</p>

        <div className="flex items-center gap-3">

          <p>Visa Ending 2986</p>

          <span className="w-[35px] h-[26px] bg-[#1a43bf] rounded"></span>

        </div>

      </div>

      <button className="w-full mt-4 py-3 text-lg bg-gray-900 text-white border-2 rounded-xl shadow-md">
        Pay Now
      </button>
    </>
  );
}