import { Outlet } from "react-router-dom";

const KitchenLayout = () => {
  return (
    <div>
      <h2>Kitchen Panel</h2>
      {/* Add sidebar/navbar here */}
      <Outlet />
    </div>
  );
};

export default KitchenLayout;
