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
    { sender: 'robot', text: 'Just got home, thank you for today!' }
  ];
  nextMessages = [
     { sender: 'user', text: 'I have survived my travels' }
    ,{ sender: 'user', text: 'Thank you so much for today, i really enjoyed it <3' }
    ,{ sender: 'user', text: 'Let me know if you want to go to niki, i can change it around so that we can go' }
  ];
  count = 0;
  
  // Remove userInput, use buttons instead

  // Handle button click for user choices
  handleChoice(choice: string) {
    //this.messages.push({ sender: 'user', text: choice });
    //const reply = this.getRobotReply(choice);
    
    if (this.count < this.nextMessages.length) {
      this.messages.push(this.getRobotReply(choice));
      this.count++;
    }
  }

  public getRobotReply(input: string): any {
    const lower = input.toLowerCase();
    if (lower.includes('next') && this.count < this.nextMessages.length) {
      return this.nextMessages[this.count]; // "Blue is calming! Do you like the ocean?"
    }
    // else {
    //   return `That's interesting! Tell me more about why you like ${input}.`;
    // }
  }
  
}
