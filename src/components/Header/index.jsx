import * as S from "./styles"
import logo from "../../assets/logo.png"

function Header(){
    return (
        <S.Header>
            <S.Img src={logo} alt="" srcset="" width={160} height={60}/>
            <S.H2>Pokedex</S.H2>
        </S.Header>
    )
}

export default Header