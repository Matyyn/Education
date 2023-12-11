import SimpleAreaChart from "../../components/admin/SimpleAreaChart";
import Accordion from "../../components/teacher/Accordion";
import PieChart from "../../components/teacher/PieChart";

const Dashboard = () => {
  return (
    <>
      <div className={"bg-white px-4 py-5 mb-5 rounded-xl sm:px-6 lg:px-8"}>
        <div className="flex flex-wrap justify-around">
          <SimpleAreaChart option="1" />
          <SimpleAreaChart option="2" />
          <SimpleAreaChart option="4" />
        </div>
      </div>
      <div
        className={
          "bg-white py-5 mb-10 rounded-xl flex flex-col sm:flex-col md:flex-row lg:flex-row"
        }
      >
        <div className="lg:w-3/5 md:w-3/5 sm:w-full mb-5 sm:mb-0">
          <Accordion />
        </div>

        <div className="lg:w-2/5 md:w-2/5 sm:w-full border rounded-xl">
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
