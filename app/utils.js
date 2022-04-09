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
  const key = await keypress();
  process.exit;

  return key;
};

const pascaleCase = async (string) => {
  return string
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
};

const timeDelay = async (delay) => {
  return await new Promise((resolve) => setTimeout(resolve, delay));
};

const removeLeadingZeros = (stringNum) => {
  if (stringNum.charAt(0) !== "0") return stringNum;

  let cleanedNum = stringNum;
  while (cleanedNum.charAt(0) === "0")
    cleanedNum = cleanedNum.replace(/^0+/, "");
  return cleanedNum;
};

module.exports = { anyKeyPrompt, pascaleCase, timeDelay, removeLeadingZeros };
