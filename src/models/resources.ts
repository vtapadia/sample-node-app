
export interface iMessage{
  message: string;
}

export class Message implements iMessage {
  constructor(public message: string) {}
}