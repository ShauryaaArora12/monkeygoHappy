var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"Xd9mKb6X7sxpK9F4XxjnPkGI9_X._wVh","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"KCWRHDLEjWwJPdsiVHtP_f3RcRZCzdys","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"nWYyRdxI5iTvOte0b7Szy0hhjElXp8wO","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey ;
var ground ; 
var bananaGroup ; 
var obstacleGroup ; 
monkey = createSprite(130, 340);
monkey.setAnimation("monkey");
monkey.scale = 0.15; 
ground = createSprite(127,384,520,10);
ground.velocityX = -4 ; 
ground.x = ground.width / 2 ; 
bananaGroup = new Group();
obstacleGroup = new Group();
var SurvivalTime ;



function draw() {

  background(255);
  SurvivalTime = Math.round(frameCount / 80);
  text("SurvivalTime " + SurvivalTime , 190 , 71 )
  if(ground.x < 150 ){
    ground.x = ground.width / 2 ;

}

if(keyDown("SPACE")){
  monkey.velocityY = -7 ; 
}
monkey.velocityY = monkey.velocityY + 0.6 ;  
monkey.collide(ground);
spawnFood();
spawnObstacles();
drawSprites();
    
  
}

function spawnFood(){
  if(World.frameCount%80===0){
   
 
  var banana = createSprite(350,190); 
  monkey.depth = banana.depth + 1 ;                                             
  banana.lifetime = 130 ; 
  banana.scale = 0.1 ; 
  banana.velocityX = -5  ;
  banana.setAnimation("Banana");
  banana.y = random(120,220);
  bananaGroup.add(banana);

  
}
}

function spawnObstacles(){
  if (World.frameCount% 80=== 0){
    
 
  var obstacle = createSprite(340,360) ;
  obstacle.setAnimation("Stone");
  obstacle.scale = 0.1; 
  obstacle.velocityX = -5 ;    
  obstacle.lifetime  = 130 ; 
  obstacleGroup.add(obstacle);
  

  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
