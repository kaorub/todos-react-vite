export class Task {
     public id: string;
     public completed: boolean;
     public readonly createdAt: string;
     public modifiedAt: string;

     constructor(public name: string) {
      this.id = Date.now().toString();
      this.completed = false;
      this.createdAt = new Date().toISOString();
      this.modifiedAt = new Date().toISOString();
     }
}