// Each mixin is a traditional ES class
class Jumpable {
  jump() { }
}
 
class Duckable {
  duck() { }
}
 
// Including the base
class Sprite {
  x = 0;
  y = 0;
}
 
// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {}
 
// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);
 
let player = new Sprite();
player.jump();

console.log(player.x, player.y); // 0,  0
console.log(player.jump, player.duck); // jump() { },  duck() { } 
