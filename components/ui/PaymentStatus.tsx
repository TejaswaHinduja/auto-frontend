export default function PaymentStatus() {
  return (
    <div className="border p-4 rounded-xl mt-4">
        Features
      <p className="flex justify-between mb-3">
        Payment Status
        <span className="uppercase font-medium text-black">Unpaid</span>
      </p>

      <div className="relative mt-6 h-[6px] bg-[linear-gradient(90deg,#000_75%,#eee_75%)]">
  
        <Checkpoint pending icon="fa-circle-check"right=""  left="0%" />

        <Checkpoint icon="fa-circle-check" pending right="" left="25%" />

        <Checkpoint icon="fa-circle-check" pending right="" left="50%" />

        <Checkpoint icon="" right="" pending left="75%" />

        <Checkpoint left icon="fa-stamp" pending right />

      </div>

    </div>
  );
}
//@ts-ignore
function Checkpoint({ icon, left, right, pending }) {

  const position = right ? "right-0" : `left-[${left}]`;

  return (
    <div
      className={`absolute ${position} -translate-y-1/2 w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center shadow border`}
    >

      {pending ? (
        <span className="w-[15px] h-[15px] bg-black rounded-full"></span>
      ) : (
        <i className={`fa-solid ${icon}`}></i>
      )}

    </div>
  );
}