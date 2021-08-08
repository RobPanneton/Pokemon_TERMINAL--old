const { anyKeyPrompt } = require("./utils");

const introScreen = async () => {
  console.log(
    "                                 _                                 "
  );
  console.log(
    "                                |/                                  "
  );
  console.log(
    "                     _         |/                                  "
  );
  console.log(
    "                    | |      ___                                   "
  );
  console.log(
    "   ______           | | _  .° _ °.    _______                      "
  );
  console.log(
    "   \\   _ °.   ___   | |/ / | |_//_  .° _   _ °.   ___              "
  );
  console.log(
    "    | |_| | .° _ °. |   <  °._____| | / | | \\ | .° _ °.  ___       "
  );
  console.log(
    "    |  __.° | |_| | |_|\\_\\     ___  |_| |_| |_| | |_| | |   °.     "
  );
  console.log(
    "    | |     °.___.°          .°   °.            °.___.° | |°. |    "
  );
  console.log(
    "    |_|                     /   _   \\                   |_| |_|    "
  );
  console.log(
    "                           |---(_)---|                             "
  );
  console.log(
    "                            \\       /                              "
  );
  console.log(
    "                             °.___.°                               "
  );
  console.log("");
  await setTimeout(() => {
    // anyKeyPrompt("press any key to continue");
  }, 2000);
  anyKeyPrompt("press any key to continue");
};

console.log(introScreen());

module.exports = { introScreen };
