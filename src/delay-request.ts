export const delayRequest = async (delay: number): Promise<void> => {
  await new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
