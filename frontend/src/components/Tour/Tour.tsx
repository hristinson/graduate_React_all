import React from "react";
import JoyRide, { ACTIONS, EVENTS } from "react-joyride";
const TOUR_STEPS = [
  {
    target: ".tour-step1",
    content: "step 1",
    disableBeacon: false,
    
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
          options: {
            arrowColor: '#e3ffeb',
            backgroundColor: '#e3ffeb',
            overlayColor: 'rgba(79, 26, 0, 0.4)',
            primaryColor: '#f60',
            textColor: '#004a14',
            width: 500,
            zIndex: 100,
          },
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
