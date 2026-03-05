const TopBar = ({ sale }) => {
  return (
    <div className="bg-blue-500 text-white flex justify-between px-10 py-2 text-sm">

      <p>Until the end of the sale: 619 Days 15 Hours 39 Minutes</p>

      <div className="flex gap-6">
        <p>{sale}</p>
        <p>Track Order</p>
        <p>About Us</p>
      </div>

    </div>
  );
};

export default TopBar;