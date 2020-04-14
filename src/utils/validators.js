export const maxLength = (max) => (value) => 
  (value && value.length > max) ? `Error! Max Length is ${max} symbols` : undefined;

export const minLength = (min) => (value) => 
  (value && value.length < min) ? `Error! Min Length is ${min} symbols` : undefined;

export const required = (value) => {
  if (value) return undefined;
  return 'Required field!';
}
