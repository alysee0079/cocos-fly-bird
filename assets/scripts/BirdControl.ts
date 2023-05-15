import { _decorator, Component, Node, RigidBody2D, v2, CircleCollider2D, Contact2DType, IPhysics2DContact } from 'cc'
const { ccclass, property } = _decorator

@ccclass('BirdControl')
export class BirdControl extends Component {
  @property
  movey: number = 8

  start() {
    let rbody = this.getComponent(RigidBody2D)
    // rbody.applyForceToCenter(v2(20, 0), true)
    let collider = this.getComponent(CircleCollider2D)
    collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this)
  }
  update(deltaTime: number) {}
  onBeginContact(self: CircleCollider2D, other: CircleCollider2D, contact: IPhysics2DContact) {
    // 碰撞点
    // console.log(contact.getWorldManifold().points)
    // 法线
    // console.log(contact.getWorldManifold().normal)
  }
  fly() {
    this.getComponent(RigidBody2D).linearVelocity = v2(0, this.movey)
  }
}
