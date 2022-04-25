import {bufferInput} from '../lib/buffer-input';
import yaml from 'js-yaml';

export const yamltojson = bufferInput((input:string) => {
  const doc = yaml.load(input);
  console.log(JSON.stringify(doc));
});
