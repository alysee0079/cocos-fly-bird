import { _decorator, Component, Node, Vec3 } from 'cc'
import { BirdControl } from './BirdControl'
const { ccclass, property } = _decorator

@ccclass('BgControl')
export class BgControl extends Component {
  @property
  speed: number = 4
  @property
  width: number = 480
  @property(BirdControl)
  birdCtrl: BirdControl = null

  start() {
    // 点击监听
    for (const node of this.node.children) {
      node.on(Node.EventType.TOUCH_START, event => {
        this.birdCtrl.fly()
      })
    }
  }

  update(deltaTime: number) {
    // console.log(deltaTime)
    for (const node of this.node.children) {
      const x = node.getPosition().x - deltaTime * this.speed
      node.setPosition(new Vec3(x, 0))
      if (x <= -this.width) {
        node.setPosition(new Vec3(x + this.width * 2, 0))
      }
    }
  }
}
