import Phaser from "phaser";
import Hero from "../entities/Hero";

// game object factory
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  init(data) {}

  preload() {
    this.load.spritesheet("hero-idle-sheet", "assets/hero/idle.png", {
      frameWidth: 32,
      frameHeight: 64,
    });

    this.load.spritesheet("hero-run-sheet", "assets/hero/run.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.spritesheet("hero-pivot-sheet", "assets/hero/pivot.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.spritesheet("hero-jump-sheet", "assets/hero/jump.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.spritesheet("hero-flip-sheet", "assets/hero/spinjump.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
    this.load.spritesheet("hero-fall-sheet", "assets/hero/fall.png", {
      frameWidth: 32,
      frameHeight: 64,
    });
  }

  create(data) {
    console.log(this.textures.getTextureKeys());
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.space = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.space.on("up", () => {
      console.log("Release Space");
    });

    this.anims.create({
      key: "hero-idle",
      frames: this.anims.generateFrameNumbers("hero-idle-sheet"),
    });

    this.anims.create({
      key: "hero-running",
      frames: this.anims.generateFrameNumbers("hero-run-sheet"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "hero-pivoting",
      frames: this.anims.generateFrameNumbers("hero-pivot-sheet"),
    });

    this.anims.create({
      key: "hero-jumping",
      frames: this.anims.generateFrameNumbers("hero-jump-sheet"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "hero-flipping",
      frames: this.anims.generateFrameNumbers("hero-flip-sheet"),
      frameRate: 30,
      repeat: 0,
    });

    this.anims.create({
      key: "hero-falling",
      frames: this.anims.generateFrameNumbers("hero-fall-sheet"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "hero-dead",
      frames: this.anims.generateFrameNumbers("hero-die-sheet"),
    });

    this.hero = new Hero(this, 250, 160);

    const platform = this.add.rectangle(220, 240, 300, 20, 0x4bcb7c);
    this.physics.add.existing(platform, true);
    this.physics.add.collider(this.hero, platform);

    const platform2 = this.add.rectangle(220, 130, 160, 20, 0x4bcb7c);
    this.physics.add.existing(platform2, true);
    this.physics.add.collider(this.hero, platform2);

    const platform3 = this.add.rectangle(380, 180, 60, 20, 0x4bcb7c);
    this.physics.add.existing(platform3, true);
    this.physics.add.collider(this.hero, platform3);
  }

  // game loop
  update(time, delta) {
    if (this.cursorKeys.space.isDown) {
      console.log("Holding Space");
    }
  }
}

export default Game;
