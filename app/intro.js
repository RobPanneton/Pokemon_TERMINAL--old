const { anyKeyPrompt } = require("./utils");

const introScreen = async () => {
  console.log("Pokemon TERMINAL");
  await setTimeout(() => {
    // anyKeyPrompt("press any key to continue");
  }, 2000);
  anyKeyPrompt("press any key to continue");
};

module.exports = { introScreen };
