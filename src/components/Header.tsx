import "../styles/Reset.scss";
import "../styles/Header.scss";
import HdModal from "../components/Modal";
import { useState } from "react";

function Header() {
	const [isHdModal, setHdModal] = useState(false);

	const handleHdClickModal = () => {
		setHdModal(true);
	}

	const handleHdCloseModal = () => {
		setHdModal(false);
	}

	return (
		<div className="hd">
				<HdModal
					isOpen={isHdModal}
					onClose={handleHdCloseModal}
				>
				</HdModal>
			<div className="smt-bar">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAAsCAYAAACe/vh+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgB7dy9juNUGMbxBwnRUDDQUCEOVFS7rEQ/pqCigGorJIJET+YKJnsFwBVk9gpYaoqEK1iggQbWiIpqBgkamnAenWPZOZMP5wNlk/n/pFdOHPvMrkd5fPzGGQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4I17Q4Y1incc6i1XHehTrB21mnJc3sS6K1zzuMNabsR7HmgrAqfo4L6dKebBOFet+rKA2g1zf52Uf92K9Eesl7ebvWH/E+kUn4CrWLNZ1rEl+7Pp0gzFGnf2eFa9Ved024wI4Lg725r1+uWI7h/hIKXdmK8qZtC4z3ov1QazXY728Y3kMT3Tv6cg1vwgfwLO8Ligd8OtinQP6ywVjhDzGOG/TDfd31Qb+NyLcgVM3UBvM4yXbVJqf8DUZMelUGfoeKywZ76FSMA/VZtC2NVKa/T/UkXNY+8B9tGR9E8SD/PzpgjGagxJ0O9yrPJZPEpci3IFT4yD2+7qZ+A20OtwrzYe2c+H+krGdS0+1vCvQ+CQvZ3uo62LMnbyow2n6YaFYH4rlldJ/+sdiu2HeZqDFvbGp6K8DpyoohbW5C3DRY5+p0udu57HeV8qNSunkEJQmgs6lJ0o99wdKOePXR/r/nRXPP4z1Xax/dWQqtWdEPw6a75+PV+zrba+LbcqZexczd+C4uc3q9qrf8w7BoNuz6oH65cdZromWz6I95rCz/TL7nLnPijG9fEdbOuTMfaoU5q5JXuez5mdKv5h6xb4Oax/wRwJwF3j2XOXHV7F+1/ZuivFu8phe+iTiK4GQt5lq87v39mnrWfshw90czr5Mct/LYf2t2tl13dluoHSQ67zdID/uzsSbs+s4j1sLwDEKavvobrfU2r+L/HOmsb7W7Z9/qcMH+0+xftMRqpSCuGyV+HLIlychP2/uqmkuvYLWX9qcF2NeirYMcCya92vzoadNNP/+Dtq+LVNq7nRpbskOG+zbtFDW3VbZp54VY+7kkDN3nxHdQxsoXQr5A1OHb4j1ldqzdZ23fdJ5vujLV7P82lsCgP6a3LFKKY/qnvv+E+tVpXbyF9qeW0LuYrym9GWmnR36bhl/Yu2AH3bWX2m+l+5gfyAAd0W3n17npXOg6qy/ydXc4dLdtny8jnPIM3aH+kjtRLKPn/O/y98q/Vy781XJr9qD5+HPD5gP6itKs/c+XxkGcNoccn9pvuddrgtKf1akmxuL9uvDJwnf2/5Ym3tbafa+658fMPfY/xQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHhe/Af0ikQd9jqd6QAAAABJRU5ErkJggg==" alt="스마트폰 스테이터스 바 이미지" />
			</div>
			<div className="hd-inner">
				<ul>
					<li className="hd-line"
						onClick={handleHdClickModal}
					>
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgBlZPLUYRAEIZ7Bu4SwhqCEYgZmIHlHXA2As1gx4IDN8oMNAIxAlPYjUDuvPy7GMqZKdyFrppiiu7/o18IsixJklgI8YRrjBPhNDj1OI6vRVHUtGByvmRZpiGuEFwHQXCd57nA8wauDylllabpYQkgZjGEVxDstdaNH6SUioZh4JgfgPcOwKRd8deWxB7kG+fRLkdyzXj5ck7Mxn7OwvTI6UHc9/0XrbAwDN9oavCfoTkjbTA/njNouL41YsTtaBqtA6i7rntYA0CpMcc7AF4SNEZdyoL9iHvGVTsAM5J30A//Qaw9iNq2Pdk+MV/Mpt3zSHkqZVkeWcjlYRMVi2la7yMgd+x3AAZyyx8k71/gtLFoJ8A/AdrZEEEbjKfgQzYBliCbAR6EfgFb28M/aPlVrAAAAABJRU5ErkJggg==" alt="전체 헤드라인 아이콘" />
						<p>전체 헤드라인</p>
					</li>
					<li className="hd-date">
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBzZPfDcIgEMYPSvrcEXADV+kE+ti0KcEJ7Ab6xBodwRF0AztCB+CPdw9NjLFWMDH9JeQI3PeFOwDgibZt77DAaw7DhT3GE44C4hi89x1njB0TxITknJ95CEFCOgXVFCAR0nL4kf8Y1HW9VUpd3+2JOQFFY8yN5kKI3lpbRp0gy7K+aZrdJCazrw0o2TlXokn3STxbwmSCYQMLrOMax6qqJESitZYYBurBIc/zCz5LGWOATR7xN+oHHIJHbV3Q8gsAAAAASUVORK5CYII=" alt="전체 헤드라인 아이콘" />
						<p>전체날짜</p>
					</li>
					<li className="hd-natip">
						<p>전체 국가</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;

/** ToDo-list
 * 3개의 항목들을 눌렀을 때 모달창 등장
 * 
 */