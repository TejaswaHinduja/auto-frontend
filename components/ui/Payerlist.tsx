

export default function PayerList() {
  return (
    <ul className="my-2">
      {payers.map((payer, index) => (
        <li key={index} className="flex items-center border-b">

          <div className="p-2 border-r">
            <img src={payer.img} className="w-9 rounded-full" />
          </div>

          <p className="flex-grow flex justify-between items-center text-sm p-2">

            {payer.name}

            <span className="border rounded-md px-2 py-[2px]">

              {payer.paid ? (
                <>
                  <i className="fa-solid fa-circle-check text-green-500"></i> Paid
                </>
              ) : (
                <>
                  <i className="fa-solid fa-clock text-orange-500"></i> Unpaid
                </>
              )}

            </span>

          </p>

        </li>
      ))}
    </ul>
  );
}