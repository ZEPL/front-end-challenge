export class ChangeStateAction {
  constructor(public state: any) {
  }
}

export type Action = ChangeStateAction;
