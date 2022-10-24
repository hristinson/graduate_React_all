import React from "react";
import JoyRide from "react-joyride";
const TOUR_STEPS = [
  {
    target: ".tour-step1",
    content: "step 1",
    disableBeacon: true
  },
  {
    target: ".tour-step2",
    content:
      "step 2",
  },
  {
    target: ".tour-step3",
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
];

const Tour = () => {

  

  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          tooltipContainer: {
              textAlign: "center"
            },
          buttonNext: {
              backgroundColor: "red"
            },
          buttonBack: {
              marginRight: 10
            }
        }}
      />
    </>
  );
};


export default Tour;
