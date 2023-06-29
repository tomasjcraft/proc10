var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a640eab0-a424-40a5-a3c9-4216996bc8d7","a32f5b1f-3177-4209-808a-836c77775ccb","23b5a414-ea13-47f4-a0a2-374b87bc18d1","55c482b4-74ec-4187-b077-6b4e873ef891","38e1847d-b436-463f-bddb-3036ed46162d","58018ec7-8d9a-47f9-b3e5-1182c2579d8f","1fcc71b6-934b-4496-a0df-f819f330001f","43763848-c187-40f1-ad14-f277af3d9c91","52e69fed-d8a4-49b6-981f-12f27c6fae49","b580907f-9ff2-4d4e-8a08-09dfc825e6aa","756d2fb6-f153-45c6-ba54-b9fa474a1676","31cce2db-0fea-4551-8174-c38e01fa1b9b","514ad0ab-6227-4063-9304-3e6c87d19585","09890a6d-e462-46f6-be29-abd035f93e19","7310d4e2-7680-4194-ba70-6131f510a2ac"],"propsByKey":{"a640eab0-a424-40a5-a3c9-4216996bc8d7":{"name":"pajaro","sourceUrl":null,"frameSize":{"x":17,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"edsr522XpiJefQbUDJARw2m6GlAPGm.T","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":12},"rootRelativePath":"assets/a640eab0-a424-40a5-a3c9-4216996bc8d7.png"},"a32f5b1f-3177-4209-808a-836c77775ccb":{"name":"tuberia_1","sourceUrl":null,"frameSize":{"x":14,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zOTY4PfISZPJrC61hAd7rwj9twyaI_Na","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":100},"rootRelativePath":"assets/a32f5b1f-3177-4209-808a-836c77775ccb.png"},"23b5a414-ea13-47f4-a0a2-374b87bc18d1":{"name":"tuberia_2","sourceUrl":null,"frameSize":{"x":14,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FhT5xKcdcybTkVsTGOMok.4PXDavWRCd","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":100},"rootRelativePath":"assets/23b5a414-ea13-47f4-a0a2-374b87bc18d1.png"},"55c482b4-74ec-4187-b077-6b4e873ef891":{"name":"muneda","sourceUrl":null,"frameSize":{"x":10,"y":12},"frameCount":1,"looping":true,"frameDelay":12,"version":"ysPoGJi8ZMfpfU3DFwK7DlJY3mJtPsM5","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":12},"rootRelativePath":"assets/55c482b4-74ec-4187-b077-6b4e873ef891.png"},"38e1847d-b436-463f-bddb-3036ed46162d":{"name":"salida","sourceUrl":null,"frameSize":{"x":11,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"FteGnqBlCvZ9IDTr0BQP1pXwRK4Q1O_a","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":11},"rootRelativePath":"assets/38e1847d-b436-463f-bddb-3036ed46162d.png"},"58018ec7-8d9a-47f9-b3e5-1182c2579d8f":{"name":"menu","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"aZLUO_umhFpNe6RQUfzJvtRPd_8GmmJB","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/58018ec7-8d9a-47f9-b3e5-1182c2579d8f.png"},"1fcc71b6-934b-4496-a0df-f819f330001f":{"name":"boton_de_menu","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"elHYhBNy_mWr.b4r1r...bLIQd7D7KGv","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/1fcc71b6-934b-4496-a0df-f819f330001f.png"},"43763848-c187-40f1-ad14-f277af3d9c91":{"name":"skin1","sourceUrl":null,"frameSize":{"x":23,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"s3cDNjaXwvjQ3vB4kNj0DfIhuuc7RsI8","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":19},"rootRelativePath":"assets/43763848-c187-40f1-ad14-f277af3d9c91.png"},"52e69fed-d8a4-49b6-981f-12f27c6fae49":{"name":"blocke _de_skin1","sourceUrl":null,"frameSize":{"x":27,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"t4YXYGrOWYB1NxAXRslGIESwiBY.F8dS","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":27},"rootRelativePath":"assets/52e69fed-d8a4-49b6-981f-12f27c6fae49.png"},"b580907f-9ff2-4d4e-8a08-09dfc825e6aa":{"name":"skin2","sourceUrl":null,"frameSize":{"x":11,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"sBh6e4krtr_xtuPrKXnpHIiMS7_WLpY_","loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":24},"rootRelativePath":"assets/b580907f-9ff2-4d4e-8a08-09dfc825e6aa.png"},"756d2fb6-f153-45c6-ba54-b9fa474a1676":{"name":"blocke _de_skin2","sourceUrl":null,"frameSize":{"x":28,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"DEp6E30JaSioS3YfKhi_oFAl2bH4Hskw","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":28},"rootRelativePath":"assets/756d2fb6-f153-45c6-ba54-b9fa474a1676.png"},"31cce2db-0fea-4551-8174-c38e01fa1b9b":{"name":"skin3","sourceUrl":null,"frameSize":{"x":34,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"8lEcUtCOt9n2431q3ICGjBY895boFYd9","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":8},"rootRelativePath":"assets/31cce2db-0fea-4551-8174-c38e01fa1b9b.png"},"514ad0ab-6227-4063-9304-3e6c87d19585":{"name":"blocke _de_skin3","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZZhwfLZwDMIb6Kxcy3d.fLoqO9rmW7X9","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/514ad0ab-6227-4063-9304-3e6c87d19585.png"},"09890a6d-e462-46f6-be29-abd035f93e19":{"name":"skin4","sourceUrl":null,"frameSize":{"x":20,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"i_tde4KlIH4rfLrQQXxZRbynh6LPB1w5","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":21},"rootRelativePath":"assets/09890a6d-e462-46f6-be29-abd035f93e19.png"},"7310d4e2-7680-4194-ba70-6131f510a2ac":{"name":"blocke _de_skin4","sourceUrl":null,"frameSize":{"x":25,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"1DCwuWdDsTzJ7Xdr6hD3S1tNMNGG2Mv3","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":27},"rootRelativePath":"assets/7310d4e2-7680-4194-ba70-6131f510a2ac.png"}}};
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

var player=createSprite(20, 200, 10, 10);
player.setAnimation("pajaro")

var tuberia1=createSprite(400,300,40,200);
tuberia1.setAnimation("tuberia_2");
var tuberia2=createSprite(400,100,40,200);
tuberia2.setAnimation("tuberia_1");
var tuberia3=createSprite(500,350,40,200);
tuberia3.setAnimation("tuberia_2");
var tuberia4=createSprite(500,150,40,200);
tuberia4.setAnimation("tuberia_1");
var tuberia5=createSprite(600,300,40,200);
tuberia5.setAnimation("tuberia_2");
var tuberia6=createSprite(600,100,40,200);
tuberia6.setAnimation("tuberia_1");
var tuberia7=createSprite(700,270,40,200);
tuberia7.setAnimation("tuberia_2");
var tuberia8=createSprite(700,100,40,200);
tuberia8.setAnimation("tuberia_1");
var moneda1=createSprite(400,200,10,10);
moneda1.setAnimation("muneda")
var moneda2=createSprite(500,250,10,10);
moneda2.setAnimation("muneda")
var moneda3=createSprite(600,200,10,10);
moneda3.setAnimation("muneda")
var moneda4=createSprite(700,190,10,10);
moneda4.setAnimation("muneda")

var suelo=createSprite(200, 390,400,100);
suelo.shapeColor = "green";
var nuves=createSprite(200,40,400,90);
nuves.shapeColor = "white"

var botondemenu=createSprite(25,30,30,30)
botondemenu.setAnimation("boton_de_menu")

var coins=0

var menu1=createSprite(200,200,200,200)
menu1.setAnimation("menu")
var salida1=createSprite(325,70,20,20)
salida1.setAnimation("salida")
var skinpordefecto=createSprite(100,130,30,30)
skinpordefecto.setAnimation("pajaro");
var skin1=createSprite(100,200,30,30)
skin1.setAnimation("blocke _de_skin1")
var skin2=createSprite(150,200,30,30)
skin2.setAnimation("blocke _de_skin2");
var skin3=createSprite(200,200,30,30)
skin3.setAnimation("blocke _de_skin3");
var skin4=createSprite(250,200,30,30)
skin4.setAnimation("blocke _de_skin4");



menu1.visible=false
salida1.visible=false
skinpordefecto.visible=false
skin1.visible=false
skin2.visible=false
skin3.visible=false
skin4.visible=false


tuberia1.velocityX=-3
tuberia2.velocityX=-3
tuberia3.velocityX=-3
tuberia4.velocityX=-3
tuberia5.velocityX=-3
tuberia6.velocityX=-3
tuberia7.velocityX=-3
tuberia8.velocityX=-3

moneda1.velocityX=-3
moneda2.velocityX=-3
moneda3.velocityX=-3
moneda4.velocityX=-3

function draw() {
  //Coloca el fondo de color rosa.
  background("#00abc0");
  textSize(18);
  fill("maroon");
  text("monedas: " + coins,200,100);
  
  
  
  
if(keyDown("space")&&player.y>=100){
  player.y=player.y-8
} 
if(tuberia1.x<=0){
  tuberia1.x=400
  tuberia1.y=300
  tuberia2.x=400
  tuberia2.y=100
}

if(tuberia3.x<=0){
  tuberia3.x=400
  tuberia3.y=350
  tuberia4.x=400
  tuberia4.y=150
}

if(tuberia5.x<=0){
  tuberia5.x=400
  tuberia5.y=300
  tuberia6.x=400
  tuberia6.y=100
}
if(tuberia8.x<=0){
  tuberia7.x=400
  tuberia7.y=270
  tuberia8.x=400
  tuberia8.y=100
}

if(moneda1.x<=0){
  moneda1.visible=true
  moneda1.x=400
  moneda1.y=200
}
if(moneda2.x<=0){
  moneda2.visible=true
  moneda2.x=400
  moneda2.y=250
}
if(moneda3.x<=0){
  moneda3.visible=true
  moneda3.x=400
  moneda3.y=200
}
if(moneda4.x<=0){
  moneda4.visible=true
  moneda4.x=400
  moneda4.y=190
}


if (mousePressedOver(botondemenu)) {
  menu1.visible=true
  salida1.visible=true
  skinpordefecto.visible=true
  skin1.visible=true
skin2.visible=true
skin3.visible=true
skin4.visible=true
  
  tuberia1.velocityX=0
tuberia2.velocityX=0
tuberia3.velocityX=0
tuberia4.velocityX=0
tuberia5.velocityX=0
tuberia6.velocityX=0
tuberia7.velocityX=0
tuberia8.velocityX=0

moneda1.velocityX=0
moneda2.velocityX=0
moneda3.velocityX=0
moneda4.velocityX=0


}
if(mousePressedOver(skinpordefecto)){
  player.setAnimation("pajaro")
}
if(mousePressedOver(skin1)){
  player.setAnimation("skin1")
  coins=coins-5000
}
if(mousePressedOver(skin2)){
  player.setAnimation("skin2")
  coins=coins-3000
}
if(mousePressedOver(skin3)){
  player.setAnimation("skin3")
  coins=coins-2000
}
if(mousePressedOver(skin4)){
  player.setAnimation("skin4")
  coins=coins-1000 
}




if(mousePressedOver(salida1)){
  menu1.visible=false
  salida1.visible=false
  skinpordefecto.visible=false
  skin1.visible=false
skin2.visible=false
skin3.visible=false
skin4.visible=false
  tuberia1.velocityX=-3
tuberia2.velocityX=-3
tuberia3.velocityX=-3
tuberia4.velocityX=-3
tuberia5.velocityX=-3
tuberia6.velocityX=-3
tuberia7.velocityX=-3
tuberia8.velocityX=-3

moneda1.velocityX=-3
moneda2.velocityX=-3
moneda3.velocityX=-3
moneda4.velocityX=-3
}

  





if(player.isTouching(tuberia1)|| player.isTouching(tuberia2)|| player.isTouching(tuberia3)|| player.isTouching(tuberia4)
|| player.isTouching(tuberia5)|| player.isTouching(tuberia6)|| player.isTouching(tuberia7)|| player.isTouching(tuberia8)
|| player.isTouching(suelo)){
   playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  player.x=20
  player.y=200
  tuberia1.x=400
  tuberia1.y=300
  tuberia2.x=400
  tuberia2.y=100
  tuberia3.x=500
  tuberia3.y=350
  tuberia4.x=500
  tuberia4.y=150
  tuberia5.x=600
  tuberia5.y=250
  tuberia6.x=600
  tuberia6.y=50
  tuberia7.x=700
  tuberia7.y=270
  tuberia8.x=700
  tuberia8.y=100
  moneda1.x=400
  moneda1.y=200
  moneda2.x=500
  moneda2.y=250
  moneda3.x=600
  moneda3.y=200
  moneda4.x=700
  moneda4.y=190
  

}
if(player.isTouching(moneda1)){
  moneda1.visible=false
 
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  coins=coins+0.5
}
if (player.isTouching(moneda2)){
  moneda2.visible=false
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  coins=coins+0.5
}


if (player.isTouching(moneda3)){
  moneda3.visible=false
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  coins=coins+0.5
}

if (player.isTouching(moneda4)){  
  moneda4.visible=false
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  coins=coins+0.5
}
  
  
  
  
if (getTime){
  player.velocityY=2
    
}
drawSprites()

  
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
