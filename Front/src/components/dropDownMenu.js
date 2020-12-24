import DropDownItem from "./dropDownItem";
import {CSSTransition} from 'react-transition-group'
export default function DropDownMenu(props){
    return(
            <CSSTransition 
                in={props.activeMenu===props.nameMenu} 
                unmountOnExit
                timeout={500}
                classNames={'menu-primary'}
                >   
                <div className='menu'>
                    {props.subItems.map(e=>(
                        <DropDownItem leftIcon={e.leftIcon} rightIcon={e.rightIcon} goToMenu={e.nombre} setActiveMenu={props.setActiveMenu} key={e.nombre}>{e.nombre}</DropDownItem>
                    ))}
                </div>
            </CSSTransition>
    );
}