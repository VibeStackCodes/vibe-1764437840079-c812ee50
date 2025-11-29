export const validateInput = (title: string, description: string): boolean => {
  return title.trim() !== '' && description.trim().length <= 200;
};