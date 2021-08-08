const RNG = () => {
  return Math.ceil(Math.random() * 100);
};

for (let i = 0; i < 100; i++) console.log(RNG());
