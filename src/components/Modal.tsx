import React from 'react';

// HdModalProps 인터페이스 정의
interface HdModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

// HdModal 컴포넌트 정의
const HdModal: React.FC<HdModalProps> = ({ isOpen, onClose }) => (

	<>
		{isOpen && (
			<div className="modal-wrap">
				<div className="modal-container">
					<div className="hd-search modal-content">
						<div className='from-wrap'>
							<h3>헤드라인</h3>
							<form>
								<input type="text"
									placeholder='검색할 헤드라인을 입력해주세요.'
								/>
							</form>
						</div>
					</div>
					<button className='apply-btn' onClick={onClose}>닫기</button>
				</div>

			</div>
		)}
	</>
);

export default HdModal;
