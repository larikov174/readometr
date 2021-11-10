import data from "../../app/data.json";

export const getInitText = (userLevel) => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const textBlocks = data[0][userLevel];
  const textBlock = JSON.stringify(textBlocks[getRandomInt(textBlocks.length)]);
  return textBlock;
};
