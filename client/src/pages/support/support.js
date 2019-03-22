import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './support.css';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// import ic_search_bar from '../../assets/images/ic_global_search_defaul.svg'
import datlich from '../../assets/images/ic_datlich.svg';
import kythuat from '../../assets/images/ic_.svg';
import taikhoan from '../../assets/images/ic_taikhoan.svg';
import tho from '../../assets/images/ic_tho.svg';
class SupportPage extends Component {

	render() {
		let ic_search = <FontAwesomeIcon className="ic-search " icon={faSearch} />
		return (
			<div id="sp-main">
				<div className="sp-search-bar">
					<div className="par">
						Xin chào, Nail Partner có thể giúp gì cho bạn?
					</div>

					<div className="sp-input-form">
						<input type="search" className="input-text" placeholder="Bạn có thắc mắc gì về Nail Partner" />
						<button type="button" className="sp-button-search ic_search">
							{ic_search}
						</button>
					</div>
				</div>

				<div className="sp-menu" >
					<ul className="sp-menu_ul">
						<li>
							<div className="images">
								<img src={datlich} />
							</div>
							<div className="mn_text">
								Đặt lịch
							</div>
						</li>

						<li>
							<div className="images">
								<img src={kythuat} />
							</div>
							<div className="mn_text">
								Kỹ thuật
							</div>
						</li>

						<li>
							<div className="images">
								<img src={taikhoan} />
							</div>
							<div className="mn_text">
								Tài khoản
							</div>
						</li>

						<li>
							<div className="images">
								<img src={tho} />
							</div>
							<div className="mn_text">
								Từ người thợ
							</div>
						</li>

					</ul>
				</div>


				<div className="sp-chatbox sp-contact">
					<div className="sp-contact-slo">Liên hệ với chúng tôi!</div>
					<Button className="sp-contact-Button">Trò chuyện ngay</Button>
				</div>
			</div>
		);
	}
}

export default SupportPage;
