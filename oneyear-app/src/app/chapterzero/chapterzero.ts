import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterzero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chapterzero.html',
  styleUrls: ['./chapterzero.scss']
})
export class ChapterzeroComponent {

  messages = [
    { sender: 'robot', text: 'Hey!! This is Emily :-)' }
  ];
  nextMessages = [
     { sender: 'user', text: 'Heyhey, sorry about the late response. First day kinda crazy with everything going on' },
    { sender: 'user', text: 'How are you doing' },
    { sender: 'robot', text: 'Duuude totally okay, go kill it out there! Lets chat later' }
  ];
  count = 0;
  
  // Remove userInput, use buttons instead

  // Handle button click for user choices
  handleChoice(choice: string) {
    //this.messages.push({ sender: 'user', text: choice });
    //const reply = this.getRobotReply(choice);
    this.messages.push(this.getRobotReply(choice));
    this.count++;
    if (this.count < this.nextMessages.length) {
      this.count++;
    }
  }

  public getRobotReply(input: string): any {
    const lower = input.toLowerCase();
    if (lower.includes('next')) {
      return this.nextMessages[this.count]; // "Blue is calming! Do you like the ocean?"
    }
    // else {
    //   return `That's interesting! Tell me more about why you like ${input}.`;
    // }
  }
  
}
