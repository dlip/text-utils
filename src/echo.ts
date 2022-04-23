let data = '';

export const echo = {
  onLine: (line: string) => {
    data += line;
  },
  onClose: () => {
    console.log('done', data);
  },
};
