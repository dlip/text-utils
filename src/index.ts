import readline from 'readline';
import {echo} from './echo';

const commands = {
  echo,
};

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  rl.on('line', echo.onLine);
  rl.on('close', echo.onClose);
}

main();
