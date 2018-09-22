import React from 'react'
import './carrousel.scss'
import pic1 from '../static/images/1.jpg'
import pic2 from '../static/images/2.jpeg'
import pic3 from '../static/images/3.jpeg'
import pic4 from '../static/images/4.jpg'
class Carrousel extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    picList: [pic1, pic2, pic3, pic4],
    width: 0,
    left: 0,
    containerTransition: '',
    moveOffset: 0
  }
  num = 0
  startX = 0
  currentX = 0
  lock = false
  componentWillMount() {
    let picList = this.state.picList
    picList.push(picList[0])
    picList.unshift(picList[picList.length - 2])
    this.setState({
      picList
    })
  }

  componentDidMount() {
    const width = parseInt(getComputedStyle(this._carrouselRef).width)
    this.setState({ width }, this.next)
    this._carrouselRef.addEventListener(
      'transitionend',
      this.containerTransitionEnd
    )
    this.auto()
  }
  auto = () => {
    clearInterval(this.intervalId)
    const that = this
    this.intervalId = setInterval(() => {
      this.setState(
        {
          containerTransition: 'left 0.3s ease 0s'
        },
        () => {
          this.lock = true
          that.next()
        }
      )
    }, 2000)
  }
  containerTransitionEnd = () => {
    console.log('containerTransitionEnd', this.lock)
    if (this.num == this.state.picList.length - 1) {
      this.setState(
        {
          containerTransition: ''
        },
        () => {
          this.num = 1
          this.setContainerLeft()
        }
      )
    }

    if (this.num == 0) {
      this.setState(
        {
          containerTransition: ''
        },
        () => {
          this.num = this.state.picList.length - 2

          this.setContainerLeft()
        }
      )
    }
    this.lock = false
  }
  next = () => {
    const that = this
    that.num++
    this.setContainerLeft()
  }
  pre = () => {
    const that = this
    that.num--
    this.setContainerLeft()
  }
  setContainerLeft = callback => {
    this.setState(
      {
        left: -this.num * this.state.width
      },
      callback
    )
  }
  touchStart = event => {
    if (this.lock) return
    clearInterval(this.intervalId)
    this.setState({
      containerTransition: ''
    })
    this.startX = event.touches[0].clientX
  }
  touchMove = event => {
    if (this.lock) return
    this.currentX = event.touches[0].clientX
    this.setState({
      moveOffset: this.currentX - this.startX
    })
  }
  touchEnd = event => {
    if (this.lock) return
    const _offset = this.state.moveOffset
    this.setState(
      {
        containerTransition: 'left 0.3s ease 0s',
        moveOffset: 0
      },
      () => {
        this.lock = true
        if (Math.abs(_offset) > 50) {
          // 切到下一张
          _offset < 0 ? this.next() : this.pre()
        } else {
          // 恢复当前张
          this.setContainerLeft(() => {
            this.auto()
          })
        }
      }
    )
  }
  render() {
    return (
      <div
        className="carrousel"
        onTouchMove={this.touchMove}
        onTouchStart={this.touchStart}
        onTouchEnd={this.touchEnd}
        ref={_ref => (this._carrouselRef = _ref)}
      >
        <div
          className="container"
          style={{
            width: this.state.picList.length * this.state.width + 'px',
            left: this.state.left + this.state.moveOffset + 'px',
            transition: this.state.containerTransition
          }}
        >
          {this.state.picList.map((item, index) => {
            return (
              <div
                className="pic"
                key={index}
                style={{ width: this.state.width + 'px' }}
              >
                <img src={item} alt="" />
              </div>
            )
          })}
        </div>
        <div />
      </div>
    )
  }
}

export default Carrousel
