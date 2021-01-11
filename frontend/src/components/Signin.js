import React from 'react';
import logo from '../assets/svg/profile.svg';
import key from '../assets/svg/key.svg';
import fb from '../assets/svg/fb.svg';
import ins from '../assets/svg/ins.svg';
import go from '../assets/svg/goo.svg';
import chico from '../assets/img/chico.png';
import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import 'tachyons'

const styles = {
	fadeIn: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(fadeIn, 'fadeIn')
	},
	fadeOut: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(fadeOut, 'fadeOut')
	},
	zoomIn: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
}

class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	onUsernameChange = (event) => {
		this.setState({ username: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmitSignIn = () => {
		/*fetch('http://139.224.252.240:8000/login/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		}).then(function(response) {
			if (response.status==200) {
				this.props.onRouteChange('home');
			} else {
				alert("用户名或密码错误！");
			}
		}).catch(err => {
			alert("Bad Request")
			console.log(err);
		})*/
		this.props.onRouteChange('home');
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<div className="bg">
				<StyleRoot>
					<div className="tc dt pv5 ph7" style={styles.zoomIn}>
						<div className="sans-serif dtc bg-transparent w-40 dib black relative cover bg-top" >
							<div id="overlay" className="absolute ma1 absolute--fill bg-dark-gray o-70 z-unset br4"></div>

							<div className="relative pa4 pa5-m tc">
								<h1 className="serif tracked ma0 mb4 b pa3 white br4 f1 tc bg-black"
									style={{}}>欢迎使用约约交大</h1>
								<hr />
								<p className="white pv1 ph5" style={{fontSize:'1.5em'}}>
									你好，约约为交大学生提供一个能够在短时间内进行集体活动的申请及参加的平台，如打球、打游戏、约自习教室等，希望你可以在这里找到最喜欢的活动！
								</p>
								<p className="white" style={{ fontFamily: 'Righteous', fontSize:'1em' }}>如果您有什么建议，欢迎联系我们：</p>
								<a href="https://docs.google.com/forms/d/e/1FAIpQLSctq5jRd2_uTTuH50QhYL3VSAbzvYF4dFjvYLYaVrQmboivKg/viewform?usp=sf_link">
									<img className="ba dib b--black-10 v-mid mh2 br-100 pointer w1 w4-ns h1 h4-ns"
										src={chico} alt='Face' width='500px' height='auto'
									/>
								</a>
								<div>
									<p className="dib mr2" style={{ fontFamily: 'Righteous' }}>
										Made with Love by
									</p>
									<a href="https://www.facebook.com/profile.php?id=100004252209945">
										<p className="dib white" style={{ fontFamily: 'Luckiest Guy', padding: '20px' }}>
											4DarkSoldiers
										</p>
									</a>
								</div>
							</div>
						</div>

						<div className="sans-serif dtc bg-transparent w-30 dib black relative cover bg-top" >
							<div id="overlay" className="absolute ma1 absolute--fill bg-dark-gray o-70 z-unset br4"></div>

							<div className="relative pa4 pa5-m">
								<h1 className="serif tracked ma0 mb4 pv3 white br4 f1 tc bg-black"
									style={{}}>账  户</h1>
								<div>
									<div className="v-mid">
										<img className="ba dib b--black-10 v-mid br-100 w1 w3-ns h1 h3-ns"
											src={logo} id='inputimage' alt='Face' height='auto' />
										<input placeholder="user-name" name="username"
											onChange={this.onUsernameChange}
											className="input-reset dib f3 ba bw1 mw-100 p5 black b ma3 pv2 ph3 bg-white hover-bg-white-70 hover-gray outline-0 bn br2" />
									</div>
									<div className="mb4 v-mid">
										<img className="ba dib b--black-10 v-mid br-100 w1 w3-ns h1 h3-ns"
											src={key} id='inputimage' alt='Face' width='500px' height='auto' />
										<input type="password" name="password" placeholder="password"
											onChange={this.onPasswordChange}
											className="input-reset f3 ba dib mw-100 black b ma3 p5 pv2 ph3 bg-white hover-bg-white-70 hover-gray outline-0 bn br2" />
									</div>
									<div className="tc">
										<input className="input-reset tc white f6 b ttu mh2 w-70 pa3 pointer bg-black hover-bg-near-black bn br-pill"
											value="登入"
											onClick={this.onSubmitSignIn}
											type="submit" />
										<p className="serif tracked  pv1 f6 tc white"
											style={{ fontFamily: 'Abril Fatface' }}>或用以下方式登录:</p>
										<div className="tc">
											<img className="ba dib b--black-10 v-mid mh2 br-100 pointer w1 w2-ns h1 h2-ns" title="In Beta Mode" src={fb} id='inputimage' alt='Face' width='500px' height='auto' />
											<img className="ba dib b--black-10 v-mid mh2 br-100 pointer w1 w2-ns h1 h2-ns" title="In Beta Mode" src={ins} id='inputimage' alt='Face' width='500px' height='auto' />
											<img className="ba dib b--black-10 v-mid mh2 br-100 pointer w1 w2-ns h1 h2-ns" title="In Beta Mode" src={go} id='inputimage' alt='Face' width='500px' height='auto' />
										</div>
									</div>
								</div>
								<hr className="mt4" />
								<div className="tc b f6 mt2 glow pa2">
									新用户？
									<p
										className="white pointer bg-black pa2 mh5 br4"
										onClick={() => onRouteChange('register')}>
										现在注册！
									</p>
								</div>

							</div>
						</div>
					</div>
				</StyleRoot>
			</div>
		);
	}
}

export default Signin;
