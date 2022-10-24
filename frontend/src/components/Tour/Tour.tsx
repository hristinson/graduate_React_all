import React from "react";
import JoyRide, { CallBackProps } from "react-joyride";
import { useAppContext } from "./context";
import { useMount } from "react-use";
import { Outlet, useNavigate } from "react-router-dom";

const Tour = () => {
  const {
    setState,
    state: { run, stepIndex, steps },
  } = useAppContext();

  useMount(() => {
    setState({
      steps: [
        {
          target: ".tour-step1",
          content: "step 1",
          disableBeacon: false,
        },
        {
          target: ".tour-step2",
          content: "step 2",
        },
        {
          target: "#routeA",
          content: "step 3",
        },
        {
          target: ".tour-step4",
          content: "step 4",
        },
        {
          target: ".tour-step5",
          content: "step5",
        },
      ],
    });
  });

  //useMount(() => handleCallback);

  const navigate = useNavigate();

  const handleCallback = (data: CallBackProps) => {
    const { action, index, lifecycle, type } = data;

    //  if (type === "step:after" && index === 2 /* or step.target === '#home' */)
    //  {
    //  setState({ run: true});
    //  navigate("/login");
    //console.log(`type is -  ${type}`);
    //console.log(`action is -  ${action}`);
    console.log(`index is -  ${type}`);
    //console.log(`lifecycle is -  ${lifecycle}`);

    //  }
    // else if (type === "step:after" && index === 1) {
    //   if (action === "next") {
    //     setState({ run: false });
    //     navigate("/people");

    //   } else {
    //     navigate("/");
    //     setState({ run: true, stepIndex: 0 });
    //   }
    // } else if (type === "step:after" && action === "prev" && index === 2) {
    //   setState({ run: false });

    //   navigate("/multi-route/a");
    // } else if (action === "reset" || lifecycle === "complete") {
    //   setState({ run: false, stepIndex: 0, tourActive: false });
    // }
  };

  return (
    <>
      <Outlet />
      <JoyRide
        callback={handleCallback}
        //stepIndex={stepIndex}
        continuous
        steps={steps}
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#ffffeb",
            overlayColor: "rgba(79, 79, 79, 3.6)",
            primaryColor: "#060",
            textColor: "#004a14",
            width: 500,
            zIndex: 100,
          },
          tooltipContainer: {
            textAlign: "center",
          },
          buttonNext: {
            backgroundColor: "red",
          },
          buttonBack: {
            marginRight: 10,
          },
        }}
      />
    </>
  );
};

export default Tour;
