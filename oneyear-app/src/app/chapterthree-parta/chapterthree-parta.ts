import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterthree-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterthree-parta.html',
  styleUrls: ['./chapterthree-parta.scss']
})
export class ChapterthreeParta {
  constructor(private router: Router) {}
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  ball = { x: 200, y: 270, radius: 10, vx: 0, vy: 0 };
  hole = { x: 200, y: 30, radius: 15 };
  friction = 0.98;
  isMoving = false;

  aimAngle = -Math.PI / 2;
  power = 20;
  maxPower = 50;
  minPower = 5;
  winMessage = "Puttery Golf Time!";
  hasConfirmedWin = false;

  ngOnInit() {
    // Wait for canvas to be available
    setTimeout(() => {
      const canvas = this.canvasRef?.nativeElement;
      if (canvas) {
        this.ctx = canvas.getContext('2d')!;
        this.resetBall();
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (this.isMoving) return;
    if (this.winMessage === "WIN!!") {
        if (event.key.toLowerCase() === "enter") {
          if (!this.hasConfirmedWin) {
            this.hasConfirmedWin = true;
          } else {
            this.router.navigate(['chapterthree/partb']);
          }
        }
        return;
      }


    if (this.winMessage == "WIN!!" && event.key.toLowerCase() == "enter") {
      this.router.navigate(['chapterthree/partb']);
      return;
    }
    if(this.winMessage == "Puttery Golf Time!") {
      switch (event.key.toLowerCase()) {
        case 'arrowleft':
        case 'a':
          this.aimAngle -= 0.1;
          break;
        case 'arrowright':
        case 'd':
          this.aimAngle += 0.1;
          break;
        case 'arrowup':
        case 'w':
          this.power = Math.min(this.power + 2, this.maxPower);
          break;
        case 'arrowdown':
        case 's':
          this.power = Math.max(this.power - 2, this.minPower);
          break;
        case ' ':
        case 'enter':
          this.shoot();
          break;
      }
    }

    this.draw();
  }

  shoot() {
    this.ball.vx = Math.cos(this.aimAngle) * this.power * 0.1;
    this.ball.vy = Math.sin(this.aimAngle) * this.power * 0.1;
    this.isMoving = true;
    this.animate();
  }

  animate() {
    const loop = () => {
      this.update();
      this.draw();
      if (this.isMoving) requestAnimationFrame(loop);
    };
    loop();
  }

  update() {
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    this.ball.vx *= this.friction;
    this.ball.vy *= this.friction;

    if (Math.abs(this.ball.vx) < 0.1 && Math.abs(this.ball.vy) < 0.1) {
      this.ball.vx = 0;
      this.ball.vy = 0;
      this.isMoving = false;
    }

    const dx = this.ball.x - this.hole.x;
    const dy = this.ball.y - this.hole.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.hole.radius) {
      this.winMessage = "WIN!!";
      this.isMoving = false;
      //setTimeout(() => this.resetBall(), 2000); // Auto-reset after win
    }
  }

  resetBall() {
    this.ball.x = 200;
    this.ball.y = 270;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.isMoving = false;
    this.aimAngle = -Math.PI / 2;
    this.power = 20;
    this.winMessage = "Puttery Golf Time!";
    this.draw();
  }

  draw() {
    if (!this.canvasRef?.nativeElement || !this.ctx) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw hole
    this.ctx.beginPath();
    this.ctx.arc(this.hole.x, this.hole.y, this.hole.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();

    // Draw ball
    this.ctx.beginPath();
    this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.stroke();

    // Draw aim guideline
    if (!this.isMoving) {
      const endX = this.ball.x + Math.cos(this.aimAngle) * this.power * 2;
      const endY = this.ball.y + Math.sin(this.aimAngle) * this.power * 2;

      this.ctx.beginPath();
      this.ctx.moveTo(this.ball.x, this.ball.y);
      this.ctx.lineTo(endX, endY);
      this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([5, 5]);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }
  }



}
