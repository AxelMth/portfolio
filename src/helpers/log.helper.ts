import type { Command } from "@/interfaces/command.interface";

export const getLogsForCommands = (commands: Command[]): string[] => {
    const commandWithMaxLength = commands.reduce((acc, curr) => {
      return curr.name.length > acc ? curr.name.length : acc;
    }, 0);
    const getHtmlSpacing = (command: string) => {
      return '&nbsp;'.repeat(commandWithMaxLength - command.length);
    }
    const logs: string[] = []
    commands.forEach(command => {
        logs.push(`<span class="command">${command.name}</span>${getHtmlSpacing(command.name)}&nbsp;&nbsp;&nbsp;${command.description}`);
    });
    return logs;
  }
  