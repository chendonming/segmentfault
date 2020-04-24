// eslint-disable-next-line import/prefer-default-export,camelcase
export const $_dispathEvent = (name, data) => {
  const event = new Event(name);
  event.data = data;
  document.dispatchEvent(event);
};
