import Card from "components/user/Card.tsx";
import users_icon from "assets/figma/users.svg";
import active from "assets/figma/active.svg";
import loans from "assets/figma/loans.svg";
import savings from "assets/figma/savings.svg";
import DataTableComponent from "components/table/DataTable.tsx";
import { useState, useEffect } from "react";
import Loader from "components/Loader.tsx";
import FilterDrawer from "components/table/FilterDrawer.tsx";
import { USER } from "types/user";

const Users = () => {
  const [data, setData] = useState<USER[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://69653c4ee8ce952ce1f498f3.mockapi.io/lendsqr/api/v1/users"
        );
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader message="Loading" />;

  if (error) {
    return (
      <div className="center">
        <p>Network Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="users">
      <div className="name">
        <h1>Users</h1>
      </div>

      <Card name="Users" icon={users_icon} id="c1" fig={data.length} />
      <Card name="Active Users" icon={active} id="c2" fig={data.length} />
      <Card name="Users With Loans" icon={loans} id="c3" fig={data.length} />
      <Card name="Users With Savings" icon={savings} id="c4" fig={data.length} />

      <FilterDrawer />

      <div className="table">
        <DataTableComponent data={data} />
      </div>
    </div>
  );
};

export default Users;
