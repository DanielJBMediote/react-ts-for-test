import Layout from "components/Layout";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <div className="w-fit bg-slate-500 h-fit">
        <p>Hello Dev</p>
      </div>
    </Layout>
  );
};

export default Dashboard;
