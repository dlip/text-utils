import {Command} from './types';

let data: string[] = [];
export const bufferInput = (onInput: (input: string) => void): Command => ({
  onLine: (line: string) => {
    data.push(line);
  },
  onClose: () => {
    onInput(data.join('\n'));
  },
});
