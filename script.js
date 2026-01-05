// let pac_man
let start
let dinners = [] 
let ghosts = []
function preload() {
    // pac_man =  loadImage("man.png")
    // blue_ghost = loadImage("blue_ghost.png")    
    // orange_ghost = loadImage("orange_ghost.png")
    pink_ghost = loadImage("pink_ghost.png")
    // red_ghost = loadImage("red_ghost.png")
    print('done')
}
let game_over = false
let game_won = false
let game_winner_decided = false
// screen
let screen = 600 
let num_of_ghosts = 1
let ghost_size_w = 50 
let ghost_size_h = 50 
// char pacMan
let char_x =  screen/2
let char_y =  screen/2
let char_width = screen/10
let char_speed =  char_width/12

screen = screen - screen%char_speed

let score = 0 
let rotation_of_pac_man = 0
/*
char_ = 
char_ = 
*/ 
let total_points = 0
let immune = false
let most  =  {
            left:-14,
            right:600+14,
            up:0,
            down:600,
 
        }
let handleWalls; 
function setup() { // ////////////////////////////////////////////// yes
    walls = [] 
    most  =  {
            left:0,
            right:600,
            up:0,
            down:600,
            // // right:1,
            // up:1,
            // down:1,
        }
    
    // walls.push(new Wall(200,200,50,100))
frameRate(100000000000000000000000000000000000000000) 
     game_over = false
     game_won = false
     game_winner_decided = false
// screen
 screen = 600 
immune = false
 ghost_size_w = 50 
 ghost_size_h = 50 
// char pacMan
 // char_x =  screen/2
 // char_y =  screen/2
 // char_width = screen/10
 // char_speed =  char_width/12
 //    pac = new Pac(char_x,char_y,char_width,char_width)
    // pac.w = 12
    // // pac.h = 12
    // walls.push(new Floor(300,579,610,50,color(255,0,0)))
    // walls.push(new Floor(300,600-579,610,50,color(255,0,0)))
    // walls.push(new Floor(600-579,300,50,610,color(255,0,0)))
    // walls.push(new Floor(579,300,50,610,color(255,0,0)))


    
    // walls.push(new Floor(200,200,50,100,color(255,0,0))) 
    // walls.push(new Floor(426,310,144,47,color(255,0,0))) 
screen = screen - screen%char_speed

 score = 0 
 rotation_of_pac_man = 0
/*
char_ = 
char_ = 
*/ 
 total_points = 0
    dinners = [] 
ghosts = []
	createCanvas(screen,screen);
// 
//  dinners.push(new food(50,50,20,20,10,0))
//  dinners.push(new food(50,550,20,20,10,0))
//  dinners.push(new food(550,50,20,20,10,0))
//  dinners.push(new food(550,550,20,20,10,0))
// for (let i=0;i<60;i++) {
//     dinners.push(new food(i*10+10,100,8,8,1,0))
// }
// for (let i=0;i<60;i++) {
//     dinners.push(new food(i*10+10,500,8,8,1,0))
// }
// for (let i=0;i<60;i++) {
//     dinners.push(new food(100,i*10+10,8,8,1,0))
// }
// for (let i=0;i<60;i++) {
//     dinners.push(new food(500,i*10+10,8,8,1,0))
// }
// for (i of dinners) {
//     total_points += i.pac_points
// }
// for (let i=0;i<num_of_ghosts; i++) {
//     ghosts.push(new ghost(random(0,screen),random(0,screen),ghost_size_w,ghost_size_h))
// }
        
    // ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
    // ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
    // ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
    // ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
 lvl_1(5)
   handleWalls = new HandleWalls()
    handleWalls.walls = walls 
  // delete_extra_food(30)
calculate_total_points()
//   for (i of ghosts) {
//            make_sure_dist(i,200) 
//           respawn_ghost(i)
         
//   }
}// 
function random(x,y) {
    Math.round(Math.random()*(y-x) + x)
}
function respawn_ghost(i) {
     i.x = random(50,500)
     i.y = random(50,500)
     // print("RELOAD")
}
function make_sure_dist(i,dist_away_in_px) {
    if (dist(pac.x,pac.y,i.x,i.y) < dist_away_in_px) {
           respawn_ghost(i)
        
    }
}
let walls = [] 
let pac;
function mousePressed() {
  
    // dinners.push(new food(804,309,5,5,1,0))
  
    // if (mouseIsPressed) {
    // if (chosing_pos) {
    //     chosing_pos = false 
    //     chosing_size= false  
    //     x1 = mouseX + 50
    //     y1 = mouseY  + 50
    //     print(`walls.push(new Floor(${x1},${y1},${w1},${h1},color(255,0,0)))`)
        
    // }else if (chosing_size) {
    //     chosing_pos = true 
    //     chosing_size= false   
    //     w1 = mouseX
    //     h1 = mouseY
    //     // print(`new Floor(${x1},${y1},${w1},${h1})`)
    // }
    print(mouseX)
    print(mouseY)
// }
}
let rect1= {
    x:0,
    y:0,
    w:100,
    h:100,
}
function draw() {
    // pac.x = mouseX
    // pac.y = mouseY
    // yes
    // walls =[]
    // rect(rect1.x,rect1.y,rect1.w,rect1.h)
     most  =  {
            left:0+10,
            right:600-10,
            up:0+10,
            down:600-10,
            // // right:1,
            // up:1,
            // down:1,
        }
    // print(mouseX)
//  for (i of ghosts) {
//      window.setInterval(i.start_moving_sec(3),1000)
//  }

    imageMode(CENTER)
    angleMode(DEGREES)
    rectMode(CENTER)
	background(0,0,0);

    // check win 


//          // yes
//      }
// char movement 
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        pac.up()
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        pac.down()
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        pac.right()
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        pac.left()
    }
   //  x = random(0,4)
   //  if (x<1) {
   //      ghosts[0].up()
   //  }else if (x<2) {
   //      ghosts[0].down()
   //  }else if (x<3) {
   //      ghosts[0].left()
   //  }else if (x<4) {
   //      ghosts[0].right()
   //  }
   for (i of ghosts) {
      // i.reset_move()
      // i.random_move_dude(3)
      if (random(0,100)<30 ) {
      i.towards_it_x()
      i.towards_it_y()
      }
      /*} 
      else { 
          if (random(0,3)<2) {
              i.reset_move()
          }
          i.random_move_dude(10)
      }
      */
   }
  
  
 

    // color 
    fill(255,200,0)
    
    fill(255,255,255)

// ghost showing 
for (i of ghosts) {

// i.circle_show()
	i.ghost_pink();
}
// ghosts[0].ghost_pink()
// ghosts[1].ghost_blue()
// ghosts[2].ghost_orange()
// ghosts[3].ghost_red()
// detecting pac in ghost 
for (i of ghosts) {
    // if (i.collision(pac.x,pac.y,pac.w)== true && game_winner_decided=== false) {
    if (i.collided(pac) && !game_winner_decided) {
      //  print("game over")
	  
        // score = "game over"
        pac.lives -= 1 
	score = 0;
        if (pac.lives === 0) {
		score = "game over"
		noLoop();
	}
	   game_over = true  
        // setup()
        lvl_1(pac.lives)
        draw()
                 
    }
}
// food spawnning 
if (mouseIsPressed) {

    // dinners.push(new food(mouseX,mouseY,5,5,1,0))
    // print(`dinners.push(new food(${mouseX},${mouseY},5,5,1,0))`)
}

   // yes
     
    
    for (let i = 0; i < dinners.length; i++) {
        dinners[i].show()
        if (dinners[i].on_it()== true) {
             dinners[i].collect()
             if (i === 3) {
                  // print(dinners[i])
                  dinners[i].start_time()
                  dinners[i].indistructible()
             }
            dinners.splice(i,1)
            //
//   score += 1
        }
    }

// score 
textSize(20)
fill(255,0,200)
text(score,300,50,500)
fill(255,255,255)
    // yes 
  
    // pac.w = 18
    // pac.most.left=    200


    handleWalls.walls = walls 
    handleWalls.left(pac)
    handleWalls.right(pac)
    handleWalls.up(pac)
    handleWalls.down(pac)
    for (item of ghosts) {
        handleWalls.left(item)
        handleWalls.right(item)
        handleWalls.up(item)
        handleWalls.down(item)

    }
    // ghost collistion to wasalls // yes 
    // for (ghost_everyEx of ghosts) {
    //             // yes 
    //         let down_walls = []
    //         for (var j=0; j<walls.length; j++) { // floor
            
    //           // floors[0].debug()
    //           // floors[1].debug()
    //           // floors[2].debug()
    //           if (walls[j].char_above(ghost_everyEx)) {
    //             // print(`${}`) 
    //               // print('set to ')
    //               // print(j)
    //             // pac.most.down = 
    //               down_walls.push(walls[j].y -  walls[j].h/2-ghost_everyEx.h/2 )
    //               // print(down_walls) 
    //               // find min and set it 
               
    //             // print('ground changed to ' + floors[j].y)
    //           }else {
    //             // print(false)
    //             // characters[0].ground=400
    //           }
    //         }
    //            down_walls.sort()
    //               if (down_walls.length != 0 ) {
    //             ghost_everyEx.most.down = down_walls[0]
    //                   // print(`${down_walls}`)
    //               }
    //         let up_walls = []
    //         for (var j=0; j<walls.length; j++) { // floor
            
    //           // floors[0].debug()
    //           // floors[1].debug()
    //           // floors[2].debug()
    //           if (walls[j].char_below(ghost_everyEx)) {
    //             // print(`${}`) 
    //               // print('set to ')
    //               // print(j)
    //             // pac.most.down = 
    //               up_walls.push(walls[j].y +  walls[j].h/2+ghost_everyEx.h/2 )
    //               // print(down_walls) 
    //               // find min and set it 
               
    //             // print('ground changed to ' + floors[j].y)
    //           }else {
    //             // print(false)
    //             // characters[0].ground=400
    //           }
    //         }
    //            up_walls.sort()
    //               if (up_walls.length != 0 ) {
    //             ghost_everyEx.most.up = up_walls[0]
    //                   // print(`${up_walls}`)
    //                   // print(up_walls)// double chech sort command needing to be reversed
    //               }
    //         let right_walls = []
    //         for (var j=0; j<walls.length; j++) { // floor
            
    //           // floors[0].debug()
    //           // floors[1].debug()
    //           // floors[2].debug()
    //           if (walls[j].char_left(ghost_everyEx)) {
    //             // print(`${}`) 
                  
    //               // print('set to ')
    //               // print(j)
    //             // pac.most.down = 
    //               right_walls.push(walls[j].x -  walls[j].w/2-ghost_everyEx.w/2 )
    //               // print(down_walls) 
    //               // find min and set it 
               
    //             // print('ground changed to ' + floors[j].y)
    //           }else {
    //             // print(false)
    //             // characters[0].ground=400
    //           }
    //         }
    //            right_walls.sort()
    //               if (right_walls.length != 0 ) {
    //             ghost_everyEx.most.right = right_walls[0]
    //               }
         
    //            let left_walls = []
    //         for (var j=0; j<walls.length; j++) { // floor
            
    //           // floors[0].debug()
    //           // floors[1].debug()
    //           // floors[2].debug()
    //           if (walls[j].char_right(ghost_everyEx)) {
    //             // print(`${}`) 
    //               // print('set to ')
    //               // print(j)
    //             // pac.most.down = 
    //               left_walls.push(walls[j].x +  walls[j].w/2+pac.w/2 )
    //               // print(down_walls) 
    //               // find min and set it 
               
    //             // print('ground changed to ' + floors[j].y)
    //           }else {
    //             // print(false)
    //             // characters[0].ground=400
    //           }
    //         }
    //            left_walls.sort()
    //         // print(left_walls)
    //               if (left_walls.length != 0 ) {
    //             // pac.most.left = left_walls[left_walls.length-1]
    //             ghost_everyEx.most.left = left_walls[0]
    //                   // print(`${left_walls}`)
    //                   // print(left_walls)
    //               }
    //         // pac.w = 20
    // }
     for (wall of walls) {
        wall.show(255,255,255)
     }
    // pac.x = mouseX
    

    // score 
    // win 
        if (score-total_points === 0 && game_over=== false) {
      //  text("YOU WIN",100,100)

        game_won = true
        game_winner_decided = true 
    }
    if ((game_over === false && game_won === true) || (dinners.length === 0)) {
        game_winner_decided = true 
    }
    if (game_winner_decided === true) {
        textSize(27) 
        fill(255,0,200)
        stroke(115, 3, 3)
        text("YOU WIN",56,29)
	    noLoop();
    }else if (pac.lives === 0) {
        textSize(27) 
        fill(255,0,200)
        stroke(115, 3, 3)
        text("Game Over",56,29)
	 noLoop();
    
    }else {
    	 textSize(27) 
        fill(255,0,200)
        stroke(115, 3, 3)
        text("Score: "+score,56,29)
    
    }
    pac.show()
    if (pac.x <= 55) {
        // pac.most.left = 55
        pac.most.right = 513
        pac.x = 529
        print('change')
    }
     if (pac.x >530) {
         pac.most.left = 55
        pac.x = 71
        print('change')
    }


    
textSize(20)
fill(255,0,200)
text(score,300,50,500)
fill(255,255,255)
    // adding walls in simple way 
    // yes
        // if (chosing_pos) {
        //     walls[0].x = mouseX + 50
        //     walls[0].y = mouseY + 50
        // }else if (chosing_size) {
        //     walls[0].w = mouseX 
        //     walls[0].h = mouseY  
        // }else {
        //     walls[0].w = null
        // }
 
 
// }
}
// let chosing_pos = false
// // let chosing_y = false 
// // let chosing_w = false 
// let chosing_size = false


function keyPressed() {
    if (key.toUpperCase()=="E") {
        setup()
        draw()
    }
    if (key.toUpperCase()=="T") {
        num_of_ghosts += 1
        setup()
        draw()
    }
    if (key.toUpperCase()=="G") {
        num_of_ghosts -= 1
        setup()
        draw()
    }
    
 //  if (key.toUpperCase()=="E") {
 //      dinners.push(new food(100,100,20,20,110))
 //      dinners.push(new food(100,500,20,20,110))
 //      dinners.push(new food(500,100,20,20,110))
 //      dinners.push(new food(500,500,40,40,1000))
 //  }
//   if (key.toUpperCase()=== "G") {
//       for (i of ghosts) {
//           i.down()
//       }
//   }
//   if (key.toUpperCase()=== "T") {
//       for (i of ghosts) {
//           i.up()
//       }
//   }
//   if (key.toUpperCase()=== "H") {
//       for (i of ghosts) {
//           i.right()
//       }
//   }
//   if (key.toUpperCase()=== "F") {
//       for (i of ghosts) {
//           i.left()
//       }
//   }
    // forward 
//      if ((key.toUpperCase()=="W")&&(char_y-char_width+char_speed>0)) {
//          char_y -= char_speed
//   //       sphere(100,100)
// rotation_of_pac_man = 270
//      }

     // backward 
   //  if ((key.toUpperCase()=="S")&&(char_y+char_width-char_speed<screen)) {
   //      char_y += char_speed
   //      rotation_of_pac_man = 90
   //  }

   //  // right | letter must be upper case 
   //  if ((key.toUpperCase()=="D")&&(char_x+char_width-char_speed<screen)) {
   //      char_x += char_speed
   //      rotation_of_pac_man = 0
   //  }

 //   // left  
 //   if ((key.toUpperCase()=="A")&&(char_x-char_width+char_speed>0)) {
 //       char_x -= char_speed
 //       rotation_of_pac_man = 180
 //   }




 //     // forward 
 //    if ((keyCode==UP_ARROW)&&(char_y-char_width+char_speed>0)) {
 //        char_y -= char_speed
 // //       sphere(100,100)
 // rotation_of_pac_man = 270
 //    }
//
 //    // backward 
 //    if ((keyCode==DOWN_ARROW)&&(char_y+char_width-char_speed<screen)) {
 //        char_y += char_speed
 //        rotation_of_pac_man = 90
 //    }
//
 //    // right | letter must be upper case 
 //    if ((keyCode==RIGHT_ARROW)&&(char_x+char_width-char_speed<screen)) {
 //        char_x += char_speed
 //        rotation_of_pac_man = 0
 //    }
//
 //    // left  
 //    if ((keyCode==LEFT_ARROW)&&(char_x-char_width+char_speed>0)) {
 //        char_x -= char_speed
 //        rotation_of_pac_man = 180
 //    }  
     if (key.toUpperCase()==="R") {
         rotation_of_pac_man += 90
     }


}
class food {
    constructor(x,y,w,h,bonus_points,immune_time) {
     this.food_x = x                 
     this.food_y = y                                
     this.food_w = w                    
     this.food_h = h
     this.pac_points = bonus_points 
     this.immune_time = immune_time
     start = 0
    }
    white() {
        fill(255,255,255)
    }
    show() {
fill(255)      
        ellipse(this.food_x,this.food_y,this.food_w,this.food_h)
    }
        
    
    on_it() {
        if (dist(pac.x,pac.y,this.food_x,this.food_y)<=this.food_w/2+char_width/2-12) {
            return true;
          
          

        }else {
          
          
          
            return false;
        }
    }
    collect() {
        score += this.pac_points
    }
    indistructible() {
        
        if (start+(this.immune_time*1000)  > millis()) {
            // print("i")
            immune = true
        }
            // print("done") 
            immune = false

   
    }
    start_time() {
        start = millis()
    }
   
}
// yes


class Floor {
    constructor(x,y,w,h,color) {
        
   this.x = x 
  this.y = y
  this.w = w
  this.h = h 
  this.stroke = 5
  this.innerW = this.w - 2*this.stroke
  this.innerH = this.h - 2*this.stroke
  // this.innerH
  // this.sprite = createSprite(this.x,this.y)
  // this.sprite.setAnimation("floor")
  this.x1 = this.x 
  this.y2 = this.y  
  this.x2 = this.x1 + this.w 
  this.y2 = this.y1 + this.h 
  this.color = color
    }
 follow(x,y) {
     if(y== null ) {
         
     this.x = mouseX
     this.y = mouseY
     }else     {
     this.x = x
     this.y = y
         
     }
 }
    follow_() {
     this.w = mouseX
     this.h = mouseY
        
    }
  show() {
    // drawSprites() 
    // this.reCal()
      // recal 
      this.innerW = this.w - 2*this.stroke
  this.innerH = this.h - 2*this.stroke
      strokeWeight(this.stroke)
      fill(0)
      stroke(0,0,250) 
      
      rectMode(CENTER)
      // fill(255,255,255)
// fill(this.color)
      rect(this.x,this.y,this.innerW,this.innerH)
  }
  change(x,y) {
    this.x = mouseX 
    this.y = mouseY 
    this.reCal()
  } 
  char_above(char) {
    // return (char.y < this.y+this.h/2) && (char.x+char.w/2>this.x) &&(char.x-char.w/2<this.x+this.w)
      return (char.x+ char.w/2 >= this.x - this.w /2 ) && (char.x- char.w/2 <= this.x + this.w /2 ) && (char.y +char.h/2<= this.y-this.h/2+10)
  } 
  char_below(char) {
      return (char.x+ char.w/2 >= this.x - this.w /2 ) && (char.x- char.w/2 <= this.x + this.w /2 ) && (char.y +char.h/2>= this.y+this.h/2+10)
   
  }
  char_left(char) {
    // return (char.y < this.y+this.h/2) && (char.x+char.w/2>this.x) &&(char.x-char.w/2<this.x+this.w)
      // return (char.y+ char.h/2 >= this.y - this.h /2 ) && (char.y- char.h/2 <= this.y + this.h /2 ) && (char.x +char.w/2<= this.x-this.w/2)
      return (Math.abs(char.y-this.y) <= this.h/2+char.w/2) && (char.x +char.w/2<= this.x-this.w/2)
  } 
  char_right(char) {
      // return (char.y < this.y+this.h/2) && (char.x+char.w/2>this.x) &&(char.x-char.w/2<this.x+this.w)
      return (char.y+ char.h/2 >= this.y - this.h /2 ) && (char.y- char.h/2 <= this.y + this.h /2 ) && (char.x - char.w/2+5>= this.x+this.w/2)
    } 
    
}

class Pac {
    constructor(x,y,w,h) {
        this.x = x 
        this.y = y 
        this.w = w 
        this.h = w
        this.lives = 5 
        // this.live_pacs = []
        // for (let i=1; i<=this.lives; i++) {
        //     this.live_pacs.push(new Point(416+mouseX*i,19,5,5))
        // }
        this.live_pacs = []
        for (let i=1; i<=this.lives; i++) {
            this.live_pacs.push(new Point(373+(400/600*50)*i,432/600*30,5,5))
        }
        // this.speed = 4.125; 
        this.speed = 5; 
        this.deg = 0
        this.vel_x = cos(this.deg) *this.speed
        this.vel_y = cos(this.deg) *this.speed
        
        
        this.rotation= 0;
        this.theta = 45
        this.maxAngle = 45
        this.minAngle = 10
        this.angleVel= 8+4
        if (this.theta < this.maxAngle) {
            // this.rotation += 1/
            this.angleVel = 1
        }
        if (this.theta > this.minAngle) {
            // this.rotation += 1/
            this.angleVel = -1
        }

        //       pac.x += char_speed
         // rotation_of_pac_man = 0
        this.most  =  {
            left:0+10,
            right:600-10,
            up:0+10,
            down:600-10,
            // // right:1,
            // up:1,
            // down:1,
        }
    }
    update() {
        // animate 

        this.theta += this.angleVel

        if (this.theta >= this.maxAngle) {
            this.angleVel*= -1
        }else if (this.theta <= this.minAngle) {
            this.angleVel*= -1
 
        }
        // }else if (this.rotation > this.minAngle) {
            
        //     this.rotation -= 1
        // }else {
        //     // this.rotation = this.maxAngle
        // }
    }
    follow() {
        this.x = mouseX 
        this.y = mouseY 
        
    }
    show() {
        this.live_pacs = []
        for (let i=1; i<=this.lives; i++) {
            this.live_pacs.push(new Point(373+(400/600*50)*i,432/600*30,5,5))
        }
        this.h = this.w 
        for (item of this.live_pacs) {
            item.show()
        }
        /////
    noStroke()
        // this.framesAlive += 1 
        fill(255)
        // this.rotation = mouseX/600*360
        arc(this.x,this.y,this.w, this.h, this.theta+this.rotation, 0-this.theta+this.rotation,);
        // if (this.framesAlive%(this.fps/2*4) == 0 ) {
        // if (this.framesAlive%(this.fps*2)== 0&& this.loc_pac.length >this.fps) {
            
        // this.points.push(new Pebble(this.loc_pac[this.loc_pac.length-10].x,this.loc_pac[this.loc_pac.length-10].y)) 
        // }
        // this.loc_pac.push(new Point(this.x,this.y))

        
       // let item
       //  for (item of this.points) {
       //      item.show()
       //  }
        /*
        // this.vel_x = cos(this.deg) *this.speed
        // this.vel_y = cos(this.deg) *this.speed
        
        // this.speed = mouseX/600*5; 
        // this.speed = mouseX/600*5; 
        // print(this.speed)
        translate(this.x,this.y) 
        rotate(this.rotation)
    image(pac_man,0,0,this.w,this.w)    
        
        translate(-1*this.x,-1*this.y) 
        rotate(360+this.rotation)
    // image(pac_man,this.x,this.y,this.w,this.w)    
        rotate(360-this.rotation)
        translate(-1*this.x,-1*this.y) 
        */
    }
    check_border() {
        if (this.x < this.most.left) {
            this.x = this.most.left
        }
        if (this.x > this.most.right) {
            
            this.x = this.most.right
        }
        // if (this.x > 300) {
            
        //     this.x = 300
        // }
        if (this.y < this.most.up) {
            this.y = this.most.up
            
        }
        if (this.y > this.most.down) {
            this.y = this.most.down
            
        }
    }
    right() {
        this.update()
               this.x += this.speed
        
         this.rotation = 0
        this.check_border()
    }
    left() {
        this.update()
               this.x -= this.speed
         this.rotation = 180
        this.check_border()
    }
    up() {
        this.update()
               this.y -= this.speed
         this.rotation = 270
        this.check_border()
    }
    down() {
        this.update()
               this.y += this.speed
         this.rotation = 90
        this.check_border()
    }
}
 /*   
        this.check_border()
}

function keyPressed() {
     if (keyCode === UP_ARROW) {
         if (char_y-char_width+char_speed>0) {
             char_y -= char_speed
         }
     }

    if (keyCode === UP_ARROW) {

     }

    if (keyCode === UP_ARROW) {

     }

    if (keyCode === UP_ARROW) {

     }

}
*/
// pac man needs 
/*
1) charcheter || check 
2) moveable w a s d tap where to go and left right down up arrow 
3) dot to colect 
4 big dotsto collect

5 bounder ies || check
6 win when all dot collected 
7 monsters 
 8 add face 
*/ 
// class Wall {
//     constructor(x,y,w,h) {
//         this.x = x
//         this.y = y
//         this.w = w
//         this.h = h
//         this.most = {
//             left:this.x-this.w/2,
//             right:this.x+this.w/2,
//             up:this.y-this.h/2,
//             down:this.y+this.h/2,
//             // // right:1,
//             // up:1,
//             // down:1,
//         }
//     }
//     show(r,g,b) {
//         rectMode(CENTER)
//         fill(r,g,b)
//         noStroke()
//         rect(this.x,this.y,this.w,this.h) 
//     }
    
// }
class Point {
    constructor(x,y) {
        this.x = x 
        this.y=y
        // this.w = 5
        this.w = 23
        this.theta = 45
        this.rotation = 0
    }
    show() {
        noStroke()
        fill(255)
        arc(this.x,this.y,this.w, this.w, this.theta+this.rotation, 0-this.theta+this.rotation,);
    }
}
class ghost {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h    
        this.ghost_speed = 2
        this.random_move = random(0,4)
        this.move = false
        this.secs_in = 0

         this.most  =  {
            left:0+10,
            right:600-10,
            up:0+10,
            down:600-10,
            // // right:1,
            // up:1,
            // down:1,
        }
    }
     check_border() {
        if (this.x < this.most.left) {
            this.x = this.most.left
        }
        if (this.x > this.most.right) {
            
            this.x = this.most.right
        }
        // if (this.x > 300) {
            
        //     this.x = 300
        // }
        if (this.y < this.most.up) {
            this.y = this.most.up
            
        }
        if (this.y > this.most.down) {
            this.y = this.most.down
            
        }
   
    }
    circle_show() {
        fill(143, 7, 0)
        ellipse(this.x, this.y,this.w,this.h)
        this.check_border()
    }
    ghost_blue() {
        // image(blue_ghost,this.x,this.y,this.w,this.h)
        this.check_border()
    }
    ghost_orange() { 
        // image(orange_ghost,this.x,this.y,this.w,this.h)
        // image(orange_ghost,this.x,this.y,this.w,this.h)
        this.check_border()
    }
    ghost_pink() {
        // image(pink_ghost,this.x,this.y,this.w,this.h)
        image(pink_ghost,this.x,this.y,this.w,this.h)
        this.check_border()
    }
    ghost_red() {
        // image(red_ghost,this.x,this.y,this.w,this.h)
        // image(red_ghost,this.x,this.y,this.w,this.h)
        this.check_border()
    }

    // right left bac forward 
    right() {
       
        this.x += this.ghost_speed
        
        //     if ((this.x+this.w-this.ghost_speed<screen) && this.move == true) {
            //      this.x += this.ghost_speed
            
            //  }else {
                //      this.x = screen - this.w/2
                //  }
                
        }
    left() {

        
              
        this.x -= this.ghost_speed
    }
    up() {
        this.y -= this.ghost_speed
    }
    down() {
        this.y += this.ghost_speed
    
    }
    start_moving() {
        this.move = true
    }
    stop_moving() {
        this.move = false 
    } 
    start_moving_sec(seconds) {
        
        if (this.secs_in > seconds) {
            this.start_moving()
        } 
            this.secs_in += 1             
    }
    collision(x,y,w) {
        if (dist(x,y,this.x,this.y)<this.w/2 + w/2-15 && immune===false ) {
            return true;
        }else {
            return false;
        }
    }
    collided(pac) {
        return (dist(pac.x,pac.y,this.x,this.y)<this.w/2 + pac.w/2) 
    }

    reset_move() {
        this.random_move = random(0,16)
    }
    random_move_dude() {
      
            if (this.random_move<4) {
                this.up()
            }else if (this.random_move<8) {
                this.down()
            }else if (this.random_move<12) {
                this.right()
            }else if (this.random_move<16) {
                this.left()
            }
        
        /*
        if (this.random_move<4) {
            this.up()
        }else if (this.random_move<8) {
            this.down()
        }else if (this.random_move<12) {
            this.right()
        }else if (this.random_move<16) {
            this.left()
        }
        */
    }
    indistructible(sec) {
        start = millis()
        while (start+ sec < millis()) {
            // print("i")
            immune = true
        }
            // print("done") 
            immune = false

   
    }
    towards_it_x() {
           if (pac.x > this.x) {
               this.right()
           }else if (pac.x < this.x) {
               this.left()
           }
    }
    towards_it_y() {
        if (pac.y > this.y) {
                     this.down()
        }else if (pac.y < this.y) {
        
              this.up()
         }
    }
    
}
let x1=300;
let y1 = 300;
    let w1 = 100; 
    let h1 = 100;

function lvl_1(lives) { // yes
        dinners = []
        // dinners.push(new food(300,300,150,150,100,0))
            dinners.push(new food(121,465,20,20,10,0))
            dinners.push(new food(121, 134,20,20,10,0))
            dinners.push(new food(493, 134,20,20,10,0))
            dinners.push(new food(493 ,465,20,20,10,0))


            dinners.push(new food(335,356,5,5,1,0))
            dinners.push(new food(264,356,5,5,1,0))
            dinners.push(new food(264,244,5,5,1,0))
            dinners.push(new food(335,244,5,5,1,0))

    
            dinners.push(new food(300 ,300,40,40,20,0))
    let min = 103+1+4
            for (let i=min; i<502; i+=30) {
                dinners.push(new food(i,180,5,5,1,0))
              }
            for (let i=min; i<502; i+=30) {
                dinners.push(new food(i,420,5,5,1,0))
              }
            for (let i=min; i<502; i+=30) {
                dinners.push(new food(i,505,5,5,1,0))
              }
            for (let i=min; i<502; i+=30) {
                dinners.push(new food(i,95,5,5,1,0))
              }
            //   for (let i=min; i<600-min; i+=50) {
            //     dinners.push(new food(i,420,5,5,1,0))
            //   }
            //   for (let i=min; i<600-min; i+=50) {
            //     dinners.push(new food(i,505,5,5,1,0))
            //   }

           // for (let i=0;i<60;i++) {
           //     dinners.push(new food(i*5+10,100,3,3,1*num_of_ghosts+1,0))
           // }
           // for (let i=0;i<60;i++) {
           //     dinners.push(new food(i*5+10,500,8,8,1*num_of_ghosts+1,0))
           // }
           // for (let i=0;i<60;i++) {
           //     dinners.push(new food(100,i*5+10,8,8,1*num_of_ghosts+1,0))
           // }
           // for (let i=0;i<60;i++) {
           //     dinners.push(new food(500,i*5+10,8,8,1*num_of_ghosts+1,0))
           // }
           // pac 
       
     
    pac = new Pac(287,475,18,18)
    pac.lives = lives;
       
       // walls
    // yes 
       walls = []
    // graound
    // walls.push(new Floor(299,277,249,227,color(0,0,250)))
// let floor = new Floor(x1,y1,w1,h1,color(0,0,250))
       
    // walls.push(floor)
    
       walls.push(new Floor(307.5,57, 430,6, color(255,0,0)))
       walls.push(new Floor(305,520, 405,6, color(255,0,0)))
// 
       
       walls.push(new Floor(96,130, 6, 150, color(255,0,0)))
       walls.push(new Floor(517,130, 6, 150, color(255,0,0)))
       
       walls.push(new Floor(96,470, 6, 150, color(255,0,0)))
       walls.push(new Floor(517,470, 6, 150, color(255,0,0)))
       
          // pac.h = 12
    walls.push(new Floor(300,579,610,50,color(255,0,0)))
    walls.push(new Floor(300,600-579,610,50,color(255,0,0)))
    walls.push(new Floor(600-579,300,50,610,color(255,0,0)))
    walls.push(new Floor(579,300,50,610,color(255,0,0)))
    // walls.push(new Floor(214,269,99,265,color(255,0,0)))
// indoor walls 
    walls.push(new Floor(185,133,77,46,color(255,0,0)))
    walls.push(new Floor(420,133,77,46,color(255,0,0)))
    walls.push(new Floor(185,470,77,46,color(255,0,0)))
    walls.push(new Floor(420,470,77,46,color(255,0,0)))

    walls.push(new Floor(266,124,14,40,color(255,0,0)))
    walls.push(new Floor(334,124,14,40,color(255,0,0)))
    walls.push(new Floor(266,476,14,40,color(255,0,0)))
    walls.push(new Floor(334,476,14,40,color(255,0,0)))

    walls.push(new Floor(302,446,87,17,color(255,0,0)))    
    walls.push(new Floor(302,154,87,17,color(255,0,0)))    
    
    walls.push(new Floor(302,200,87,17,color(255,0,0)))    
    walls.push(new Floor(302,400,87,17,color(255,0,0)))    
    // center 
    walls.push(new Floor(236,289,9,100,color(255,0,0)))
    walls.push(new Floor(360,289,9,100,color(255,0,0)))

    walls.push(new Floor(250,286,30,11,color(255,0,0)))
    walls.push(new Floor(350,286,30,11,color(255,0,0)))

    walls.push(new Floor(298,368,11,79,color(255,0,0)))
    walls.push(new Floor(298,232,11,79,color(255,0,0)))
    // border walls 
    walls.push(new Floor(146,197,108,14,color(255,0,0)))
    walls.push(new Floor(146,250,108,14,color(255,0,0)))
    walls.push(new Floor(146,325,108,14,color(255,0,0)))
    walls.push(new Floor(146,382,108,14,color(255,0,0)))
 
    walls.push(new Floor(203,353,12,70,color(255,0,0)))
    walls.push(new Floor(203,225,12,70,color(255,0,0)))

            // other side
    walls.push(new Floor(450,197,108,14,color(255,0,0)))
    walls.push(new Floor(450,250,108,14,color(255,0,0)))
    walls.push(new Floor(450,325,108,14,color(255,0,0)))
    walls.push(new Floor(450,382,108,14,color(255,0,0)))
 
    walls.push(new Floor(400,353,12,70,color(255,0,0)))
    walls.push(new Floor(400,225,12,70,color(255,0,0)))
    // walls.push(new Floor(200,200,50,100,color(255,0,0))) 
    // walls.push(new Floor(426,310,144,47,color(255,0,0))) 
    // walls.push(new Floor(426,310,144,47,color(255,0,0))) 
    
    //    print(ghost)
    //    for (let i=0;i<num_of_ghosts; i++) {
	ghosts = []
    ghosts.push(new ghost(238,128,20,20))
    ghosts.push(new ghost(360,130,20,20))
    ghosts.push(new ghost(137,284,20,20))
    ghosts.push(new ghost(476,278,20,20))
    // ghosts.(new ghost(random(0,screen),random(0,screen),20,20))  
        // }
    // ghosts = []
          // print(dinners)
//            ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
// ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
// ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
// ghosts.push(new ghost(random(0,screen),random(0,screen),50,50))
    }
    function lvl_2() {
        dinners = []
        //dinners.push()
        for (let i=0; i <64;i++) {
           for (let o=0;o<64;o++) {
                dinners.push(new food(i*10,o*10,10,10,1,0))

            } 
        }
    }
    function lvl_3() {
        dinners = []
        dinners[0] = new food(100,100,150,150,1000,20)
        for (let i=0; i<600;i++) {
            dinners.push(new food(i*10-100,300,50,50,10,0))
        }
    }
function delete_extra_food(margin_error) {
    let x = 0
   // print(dinners[100].food_x)
    for (zz of dinners) {
        x += 1
       
        if ((zz.food_x<=margin_error) ) {
            // print(zz)
            dinners.splice(x,1)
        }
        if (  (zz.food_x>=screen - margin_error) ) {
// print(zz)
            dinners.splice(x,1)
        }
        if ( (zz.food_y<=margin_error)) {
 
 // print(zz)
            dinners.splice(x,1)
        }
        if ( (zz.food_y>screen-margin_error)) {
 // print(zz)
            dinners.splice(x,1)            
        }
    }
    // print(screen)
}
function calculate_total_points() {
    total_points = 0
    // print( "total Points = "+total_points)
    for (i of dinners) {
        total_points += i.pac_points
 //      if ((i.food_y>screen- 50) || (i.food_y<=10) || (i.food_x>=screen - 50) || //(i.food_x<=10) ) {
 //         
//
 //      }else {
 //           total_points += i.pac_points
 //       }

//  if ((i.food_y>= screen - 20)) {
//  //    print(1)
// //     print(i)
//       dinners.splice(i,1)
//  }else  if ((i.food_y<=  20)) {
// //      print(2)
// // print(i)
//  dinners.splice(i,1)
//  }else  if ((i.food_x>= screen - 20)) {
// //     print(3)
// //print(i)
//  dinners.splice(i,1)
//  }else  if ((i.food_x <=  20)) {
//   //   print(4)
//   //   print(i)
//  dinners.splice(i,1)
//  }else {
// total_points += i.pac_points
//      // print("say cheese")
//     // dinners.splice(/i,1)
//  }
              
    }
// print( "total Points = "+total_points)


}
// yes
/*   down_walls = []
    for (var j=0; j<walls.length; j++) { // floor
    
      // floors[0].debug()
      // floors[1].debug()
      // floors[2].debug()
      if (walls[j].char_above(pac)) {
        // print(`${}`) 
          // print('set to ')
          // print(j)
        // pac.most.down = 
          down_walls.push(walls[j].y -  walls[j].h/2-pac.h/2 )
          // print(down_walls) 
          // find min and set it 
       
        // print('ground changed to ' + floors[j].y)
      }else {
        // print(false)
        // characters[0].ground=400
      }
    }
       down_walls.sort()
          if (down_walls.length != 0 ) {
        pac.most.down = down_walls[0]
              // print(`${down_walls}`)
          }
    up_walls = []
    for (var j=0; j<walls.length; j++) { // floor
    
      // floors[0].debug()
      // floors[1].debug()
      // floors[2].debug()
      if (walls[j].char_below(pac)) {
        // print(`${}`) 
          // print('set to ')
          // print(j)
        // pac.most.down = 
          up_walls.push(walls[j].y +  walls[j].h/2+pac.h/2 )
          // print(down_walls) 
          // find min and set it 
       
        // print('ground changed to ' + floors[j].y)
      }else {
        // print(false)
        // characters[0].ground=400
      }
    }
       up_walls.sort()
          if (up_walls.length != 0 ) {
        pac.most.up = up_walls[0]
              // print(`${up_walls}`)
              // print(up_walls)// double chech sort command needing to be reversed
          }
    right_walls = []
    for (var j=0; j<walls.length; j++) { // floor
    
      // floors[0].debug()
      // floors[1].debug()
      // floors[2].debug()
      if (walls[j].char_left(pac)) {
        // print(`${}`) 
          
          // print('set to ')
          // print(j)
        // pac.most.down = 
          right_walls.push(walls[j].x -  walls[j].w/2-pac.w/2 )
          // print(down_walls) 
          // find min and set it 
       
        // print('ground changed to ' + floors[j].y)
      }else {
        // print(false)
        // characters[0].ground=400
      }
    }
       right_walls.sort()
          if (right_walls.length != 0 ) {
        pac.most.right = right_walls[0]
          }
    // left_walls = []
    // for (var j=0; j<walls.length; j++) { // floor
    
    //   // floors[0].debug()
    //   // floors[1].debug()
    //   // floors[2].debug()
    //   if (walls[j].char_right(pac)) {
    //     // print(`${}`) 
          
    //       // print('set to ')
    //       // print(j)
    //     // pac.most.down = 
    //       left_walls.push(walls[j].x +  walls[j].w/2+pac.w/2 )
    //       // print(down_walls) 
    //       // find min and set it 
       
    //     // print('ground changed to ' + floors[j].y)
    //   }else {
    //     // print(false)
    //     // characters[0].ground=400
    //   }
    // }
    //    left_walls.sort()
    //       if (left_walls.length != 0 ) {
    //     pac.most.left = left_walls[0]
    //     // pac.most.right = 300
    //           // print(`${right_walls}`)
    //           print(left_walls)
    //       }

       left_walls = []
    for (var j=0; j<walls.length; j++) { // floor
    
      // floors[0].debug()
      // floors[1].debug()
      // floors[2].debug()
      if (walls[j].char_right(pac)) {
        // print(`${}`) 
          // print('set to ')
          // print(j)
        // pac.most.down = 
          left_walls.push(walls[j].x +  walls[j].w/2+pac.w/2 )
          // print(down_walls) 
          // find min and set it 
       
        // print('ground changed to ' + floors[j].y)
      }else {
        // print(false)
        // characters[0].ground=400
      }
    }
       left_walls.sort()
    // print(left_walls)
          if (left_walls.length != 0 ) {
        // pac.most.left = left_walls[left_walls.length-1]
        pac.most.left = left_walls[0]
              // print(`${left_walls}`)
              // print(left_walls)
          }
*/
class HandleWalls {// yes 
    constructor() {
        this.walls = [] 
    }
    left(pac) {// changes most.left barrier of pac by detecting location of walss
        let left_walls = []
        let item
        // find all walls left of pac 
        for (item of this.walls) {
            if (item.x+item.w/2 <= pac.x-pac.w/2 && this.betweenY(pac, item)) {
                left_walls.push(item)
            }
        }
        left_walls.sort()
        // print(left_walls)
        let left_wall_num = []
        for (item of left_walls) {
            left_wall_num.push(item.x + item.w/2 + pac.w/2)
            
        }
        left_wall_num.sort()
        let max = - 69;
        if (left_wall_num.length != 0) {
            
            for (item of left_wall_num) {
                if (item > max) {
                    max = item
                }
            }
            // print(max)
             pac.most.left = max    
        }
        // print(left_wall_num)
        
    }///////////
    right(pac) {// changes most.left barrier of pac by detecting location of walss
         let right_walls = []
        let item
        // find all walls left of pac 
        for (item of this.walls) {
            if (item.x-item.w/2 >= pac.x+pac.w/2 && this.betweenY(pac, item)) {
                right_walls.push(item)
            }
        }
        right_walls.sort()
        // print(right_walls)
        let right_wall_num = []
        for (item of right_walls) {
            right_wall_num.push(item.x - item.w/2 - pac.w/2)
            
        }
        right_wall_num.sort()
        let min =  69*5000;
        if (right_wall_num.length != 0) {
            
            for (item of right_wall_num) {
                if (item < min) {
                    min = item
                }
            }
            // print(min)
             pac.most.right = min    
        }
        // print(left_wall_num)
        
    }
    up(pac) {// changes most.left barrier of pac by detecting location of walss
         let up_walls = []
        let item
        // find all walls left of pac 
        for (item of this.walls) {
            if (item.y+item.h/2 <= pac.y-pac.h/2 && this.betweenX(pac, item)) {
                up_walls.push(item)
            }
        }
        up_walls.sort()
        // print(up_walls)
        let up_wall_num = []
        for (item of up_walls) {
            up_wall_num.push(item.y + item.h/2 + pac.h/2)
            
        }
        up_wall_num.sort()
        let max =  -69;
        if (up_wall_num.length != 0) {
            
            for (item of up_wall_num) {
                if (item > max) {
                    max = item
                }
            }
            // print(max)
             pac.most.up = max    
        }
        // print(left_wall_num)
        
    }
    down(pac) {// changes most.left barrier of pac by detecting location of walss
           let down_walls = []
        let item
        // find all walls left of pac 
        for (item of this.walls) {
            if (item.y-item.h/2 >= pac.y+pac.h/2 && this.betweenX(pac, item)) {
                down_walls.push(item)
            }
        }
        down_walls.sort()
        // print(down_walls)
        let down_wall_num = []
        for (item of down_walls) {
            down_wall_num.push(item.y - item.h/2 - pac.h/2)
            
        }
        down_wall_num.sort()
        let min =  69*500;
        if (down_wall_num.length != 0) {
            
            for (item of down_wall_num) {
                if (item < min) {
                    min = item
                }
            }
            // print(min)
             pac.most.down = min    
        }
        // print(left_wall_num)
    }
    betweenX(pac,wall) {
        return Math.abs(pac.x-wall.x) <= wall.w/2+pac.w/2
    }
    betweenY(pac,wall) {
        return Math.abs(pac.y-wall.y) <= wall.h/2+pac.h/2
        
    }
}
/*
problem w/ game 
1) spawn on ghost / make ghost spawn aleast 100 pixels away 
2) too easy |\ 
3) one color ghost 
4) ghost camp |\
5) object boundries with any shape and any color 
7) lvls 
8) deleteing dot not in screen
9) slide tele porting to other side 
*/
