import { _decorator, Component, Node, Vec3 } from 'cc'
const { ccclass, property } = _decorator

@ccclass('PipeContorl')
export class PipeContorl extends Component {
  @property
  speed: number = 50

  start() {}

  update(deltaTime: number) {
    for (const node of this.node.children) {
      const cx = node.getPosition().x - deltaTime * this.speed
      const cy = node.getPosition().y
      if (cx <= 0) {
        const y = Math.random() * 380 - 60
        node.setPosition(new Vec3(cx + 480 * 2, y))
      } else {
        node.setPosition(new Vec3(cx, cy))
      }
    }
  }
}
