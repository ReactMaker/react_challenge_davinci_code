import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Alert, Button, Input } from 'reactstrap';

@observer
export default class Content extends Component {
  @observable code = 0;
  @observable status = 'end';
  @observable min = 1;
  @observable max = 100;
  @observable guess = 1;

  @action
  start = () => {
    this.status = 'start';
    this.code = Math.floor(Math.random() * 100) + 1;
  }

  @action
  handleChange = (e) => {
    this.guess = parseInt(e.target.value, 10);
  }

  @action
  handleSubmit = () => {
    // game over
    if (this.guess === this.code) {
      alert(`終極密碼：${this.code}，恭喜您猜到了！！`);
      this.code = 0;
      this.guess = 1;
      this.min = 1;
      this.max = 100;
      this.status = 'end';
      return;
    }

    // 不在正確範圍內
    if (this.guess < this.min || this.guess > this.max) {
      alert(`請輸入正確範圍：${this.min} ~ ${this.max}`);
      return;
    }

    if (this.guess > this.code) this.max = this.guess;
    if (this.guess < this.code) this.min = this.guess;
  }

  render() {
    return (
      <div className="content">
        <h2>終極密碼</h2>
        <h3>開始遊戲後，電腦會從1~100抽選一個號碼</h3>
        <h3>請輸入數字，直到猜到電腦所選號碼</h3>
        {
          this.status === 'end'
          ? <Button className="game_start" outline color="success" onClick={this.start}>開始遊戲</Button>
          : (
            <div className="gameZone">
              <Alert color="danger">
                { this.min } ~ { this.max }
              </Alert>
              <Input className="guess" value={this.guess} type="number" onChange={this.handleChange} placeholder="請輸入數字" />
              <Button outline color="info" onClick={this.handleSubmit}>送出</Button>
            </div>
          )
        }
      </div>
    );
  }
}
