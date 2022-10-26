import React from "react";
import JoyRide, { CallBackProps } from "react-joyride";
import { useAppContext } from "./context";
import { useMount } from "react-use";
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const {
    setState,
    state: { steps },
  } = useAppContext();

  useMount(() => {
    setState({
      steps: [
        {
          target: ".tour-step1",
          content:
            "This area is functionality window. Shows history of the Star Wars Universe",
          disableBeacon: false,
        },
        {
          target: ".tour-step2",
          content:
            "You can purchase all stuff of Star Wars personages and vehicles. Turn on Star Wars for yourself!",
        },
        {
          target: ".tour-step3",
          content: "Please use login and password for authenticate yourself...",
        },
        {
          target: ".tour-step4",
          content: "step for!!! Please use login and password for authenticate yourself...",
        },{
          target: ".tour-step5",
          content: "step 5 !!! Please use login and password for authenticate yourself...",
        },
      ],
    });
  });

  const navigate = useNavigate();

  const handleCallback = (data: CallBackProps) => {
    const  { action, index, type } = data;

    if (type === "step:after" && index === 1 && action === 'next' ) {
      setState({ run: false, tourActive: true });
      navigate("/login");
    }
  };

  return (
    <>
      
      <JoyRide
        callback={handleCallback}
        //debug={true}
        continuous
        steps={steps}
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#ffffeb",
            overlayColor: "rgba(79, 79, 79, 3.6)",
            primaryColor: "#f00",
            textColor: "#004a14",
            width: 500,
            zIndex: 100,
          },
          tooltipContainer: {
            textAlign: "center",
          },
          buttonNext: {
            backgroundColor: "blue",
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
