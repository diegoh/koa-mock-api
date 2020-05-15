export const delayRequest = async (delay: number): Promise<void> => {
  await new Promise(() => {
    setTimeout(null, delay);
  });
};
