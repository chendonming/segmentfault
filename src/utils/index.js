// eslint-disable-next-line import/prefer-default-export
export const $$dispathEvent = (name, data) => {
  const event = new Event(name);
  event.data = data;
  document.dispatchEvent(event);
};
