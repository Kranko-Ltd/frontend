import React, { useContext } from "react";
import { MdOutlineCreditScore } from "react-icons/md";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PROJECT } from "../../mutations/Projects";
import { GET_PROJECTS } from "../../Queries/Projects";
import { userContext } from "../../context/userContext";

const PaymentSuccess = () => {
  const { user } = useContext(userContext);
  const router = useRouter();
  const queryKey = "payment_id";
  const payment_id =
    router.query[queryKey] ||
    router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`))[1];
  console.log("payment", payment_id);

  const [
    updateProject,
    { data: UpdateData, loading: UpdateLoading, error: UpdateError },
  ] = useMutation(UPDATE_PROJECT);
  const { data, loading, error } = useQuery(GET_PROJECTS);

  let payment40;
  let payment40amount;
  let payment60amount;
  let payment60;
  let project;

  if (!loading && !error) {
    console.log(data);
    const allProjects = data.projects.data;
    console.log(allProjects);
    project = allProjects.find((project) => project.id === payment_id);
    if (project.attributes.downpayment60_status === "pending") {
      payment60 = true;
      payment60amount = 0.6 * project.attributes.actual_cost;
    } else if (project.attributes.finalpayment40_status === "pending") {
      payment40 = true;
      payment40amount = 0.4 * project.attributes.actual_cost;
    }
  }

  React.useEffect(() => {
    if (payment60 === true) {
      updateProject({
        variables: {
          id: payment_id,
          data: {
            downpayment60_status: "completed",
            project_status: "active",
            downpayment60: payment60amount,
          },
        },
      });
    } else if (payment40 === true) {
      updateProject({
        variables: {
          id: payment_id,
          data: {
            finalpayment40_status: "completed",
            project_status: "completed",
            finalpayment40: payment40amount,
          },
        },
      });
    }
  }, [project]);

  return (
    <div className=" h-screen flex flex-col items-center bg-white rounded-md">
      <p className="text-xl font-bold text-grey-900  mt-32">
        Payment Successful
      </p>
      <MdOutlineCreditScore size={150} className="mt-4 text-secondary" />
      <p className="text-grey-900">
        Your project will now be activated. Stay tuned for updates
      </p>
      <button
        className="text-white hover:text-secondary border border-secondary bg-secondary hover:bg-white rounded-md px-4 py-2 mt-8"
        onClick={() => {
          router.push("/client-dashboard/projects");
        }}
      >
        Project Page
      </button>
    </div>
  );
};

export default PaymentSuccess;
