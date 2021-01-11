import React from 'react';
import logo from '../assets/svg/profile.svg';
import key from '../assets/svg/key.svg';
import chico from '../assets/img/chico.png';
import link from '../assets/svg/link.svg';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { DatePicker, Switch } from 'antd';
import { ManOutlined, WomanOutlined} from '@ant-design/icons';

function onChange(date, dateString) {
	console.log(date, dateString);
}

const styles = {
	zoomIn: {
		animation: 'x 0.5s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
}

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			age: '',
			gender: '',
		}
	}

	onNameChange = (event) => {
		this.setState({ username: event.target.value });
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	}

	onAgeChange = (event) => {
		this.setState({ age: event.target.value });
	}

	onGenderChange = (event) => {
		this.setState({ gender: event.target.value });
	}

	onProfileChange = (event) => {
		this.setState({ profile: event.target.value });
	}

	onSubmitSignIn = () => {
		/*fetch('http://139.224.252.240:8000/register/', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				account: this.state.account,
				name: this.state.name,
				password: this.state.password,
				age: this.state.age,
				gender: this.state.gender,
			})
		}).then(function (response) {
			return response.json()
		}).then(function (json) {
			if (json.result) {
				this.props.onRouteChange('home');
			} else {
				alert("该用户已被创建！");
			}
		}).catch(err => {
			alert("服务器有问题")
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
								<p className="white pv1 ph5" style={{ fontSize: '1.5em' }}>
									你好，约约为交大学生提供一个能够在短时间内进行集体活动的申请及参加的平台，如打球、打游戏、约自习教室等，希望你可以在这里找到最喜欢的活动！
								</p>
								<p className="white" style={{ fontFamily: 'Righteous', fontSize: '1em' }}>如果您有什么建议，欢迎联系我们：</p>
								<a href="https://github.com/Fight-against-wmy">
									<img className="ba dib b--black-10 v-mid mh2 br-100 pointer w1 w4-ns h1 h4-ns"
										src={chico} alt='Face' width='500px' height='auto'
									/>
								</a>
								<div>
									<p className="dib mr2" style={{ fontFamily: 'Righteous' }}>
										Made with Love by
									</p>
									<a href="https://github.com/Fight-against-wmy">
										<p className="dib white" style={{ fontFamily: 'Luckiest Guy' }}>
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
									style={{ fontFamily: 'Luckiest Guy' }}>注  册</h1>

								<div>
									<div className="v-mid">
										<img className="ba dib b--black-10 v-mid br-100 w1 w3-ns h1 h3-ns"
											src={link} alt='Face' width='500px' height='auto' />
										<input type='email' placeholder="user-email" name="email"
											onChange={this.onEmailChange}
											className="input-reset dib f3 ba bw1 mw-100 p5 black b ma3 pv2 ph3 bg-white hover-bg-white-70 hover-gray outline-0 bn br2" />
									</div>

									<div className="v-mid">
										<img className="ba dib b--black-10 v-mid br-100 w1 w3-ns h1 h3-ns"
											src={logo} alt='Face' width='500px' height='auto' />
										<input placeholder="user-name" name="name"
											onChange={this.onNameChange}
											className="input-reset dib f3 ba bw1 mw-100 p5 black b ma3 pv2 ph3 bg-white hover-bg-white-70 hover-gray outline-0 bn br2" />
									</div>

									<div className="v-mid">
										<img className="ba dib b--black-10 v-mid br-100 w1 w3-ns h1 h3-ns"
											src={key} alt='Face' width='500px' height='auto' />
										<input
											type="password"
											name="password"
											placeholder="password"
											onChange={this.onPasswordChange}
											className="input-reset f3 ba dib mw-100 black b ma3 p5 pv2 ph3 bg-white hover-bg-white-70 hover-gray outline-0 bn br2" />
									</div>

									<span className="mb3 v-mid fl w-50 pa2">
										<p className="dib white">生日：</p>
										<DatePicker onChange={onChange} placeholder="选择日期" style={{marginInline:'2em'}}
										/>
									</span>

									<span className="mb3 v-mid fl w-50 pa2">
										<p className="dib white">性别：</p>
										<Switch style={{ width:'50%', height:'2em',fontSize:'1.3em', marginInline:'2em'}}
											checkedChildren={<ManOutlined style={{fontSize:'1.5em'}} />}
											unCheckedChildren={<WomanOutlined style={{fontSize:'1.5em'}}/>}
											defaultChecked
										/>
									</span>

									<div className="tc">
										<input className="input-reset tc white f6 b ttu mh2 w-70 pa3 pointer bg-black hover-bg-near-black bn br-pill"
											value="Register"
											onClick={this.onSubmitSignIn}
											type="submit" />
									</div>

								</div>
								<hr className="mt4" />
								<div className="tc b f6 mt2 glow pa2 i">
									Already Registered ?
									<p
										className="white pointer bg-black pa2 mh5 br4"
										onClick={() => onRouteChange('signin')}>
										Sign In
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

export default Register;