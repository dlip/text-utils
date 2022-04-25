import readline from 'readline';
import {Command} from './lib/types';
import {yamltojson} from './commands/yamltojson';
const commands: Record<string, Command> = {
  yamltojson,
};

/** Main function */
function main() {
  const commandName = process.argv[2];
  if (!commandName) {
    throw new Error(`Command missing in arguments`);
  }
  if (!commands.hasOwnProperty(commandName)) {
    throw new Error(`Unknown command '${commandName}'`);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  const command = commands[commandName];

  rl.on('line', command.onLine);
  rl.on('close', command.onClose);
}

main();
