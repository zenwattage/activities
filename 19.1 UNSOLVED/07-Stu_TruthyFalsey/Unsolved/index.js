// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉


const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
 
logMessage('');

const logMessage = message => {
  // if (!message) {
  //   message = "Hello World!";
  // }
  message = message || 'Hello World!';
  console.log(message);
};


logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)



const logTired = (beenWorkingAllDay) => {
  // let message;

  // if (beenWorkingAllDay) {
  //   message = "I'm feeling really tired";
  // } else {
  //   message = "I'm wide awake!";
  // }

  const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";

  console.log(message);
};

logTired(true);
