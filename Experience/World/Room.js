import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.setModel();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      if (child.name === "Screen") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
    });

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.25, 0.25, 0.25);
    //this.actualRoom.rotation.y = Math.PI;
  }

  resize() {}

  update() {}
}
