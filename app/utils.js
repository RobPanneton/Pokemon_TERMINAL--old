const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

const anyKeyPrompt = async (message) => {
  console.log(message);
  await keypress();
  console.log("next");
  process.exit;
};

const pascaleCase = async (string) => {
  return string
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
};

module.exports = { anyKeyPrompt, pascaleCase };
