import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaptertwo',
  imports: [CommonModule],
  templateUrl: './chaptertwo.html',
  styleUrl: './chaptertwo.scss'
})
export class Chaptertwo {
  constructor(private router: Router) {}
messages = [
    { sender: 'robot', text: 'Just got home, thank you for today!' }
  ];
  nextMessages = [
     { sender: 'user', text: 'I have survived my travels' }
    ,{ sender: 'user', text: 'Thank you so much for today, i really enjoyed it <3' }
    ,{ sender: 'user', text: 'Let me know if you want to go to niki, i can change it around so that we can go' }
  ];
  count = 0;
  showPics: boolean = false;
  nextChapter: boolean = false;
  
  // Remove userInput, use buttons instead

  // Handle button click for user choices
  handleChoice(choice: string) {
    //this.messages.push({ sender: 'user', text: choice });
    //const reply = this.getRobotReply(choice);
    if(this.count == this.nextMessages.length && this.showPics) {
      this.nextChapter = true;
    }
    if (this.count < this.nextMessages.length) {
      this.messages.push(this.getRobotReply(choice));
      this.count++;
    }
    if(this.count == this.nextMessages.length) {
      this.showPics = true;
    }
  }

  public getRobotReply(input: string): any {
    const lower = input.toLowerCase();
    if (lower.includes('next') && this.count < this.nextMessages.length) {
      this.showPics = false; // Reset showPics when a new message is requeste
      return this.nextMessages[this.count]; // "Blue is calming! Do you like the ocean?"
    }
    
    // else {
    //   return `That's interesting! Tell me more about why you like ${input}.`;
    // }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && !this.showPics && !this.nextChapter) {
      this.handleChoice('next');
    }
    else if(event.key == "Enter" && this.showPics) {
      this.handleChoice('next');
      console.log("Navigating to Chapter Three Part A");
      this.router.navigate(['chapterthree/parta']);
    }
    // Add custom logic here based on the pressed key
    // For example, trigger a function or update a property
  }

  
}
