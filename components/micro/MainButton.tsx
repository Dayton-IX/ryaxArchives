import { LoadingCircle } from '../../assets/svgLib';
import Colors from '../../constants/Colors';

type Props = {
    className?: string,
    style?: object,
    children: React.ReactChild,
    onClick: Function,
    disabled?: boolean,
    loading?: boolean
}

const MainButton = ({ className, style, children, onClick, disabled=false, loading=false }: Props) => {
    return (
        <button disabled={disabled} onClick={() => onClick()} className={className} style={style}>
            {loading ? <LoadingCircle className="animate-spin mr-2" color={Colors.dark.textMain} /> : null}
            {children}
            <style jsx>{`
                button {
                    background: linear-gradient(82.79deg, ${Colors.accentSecondary} 0%, ${Colors.accentMain} 97.96%);
                    border-radius: 5px;
                    color: ${Colors.dark.textMain};
                    padding: 8px 15px;
                    display: flex;
                    transition: all 0.1s linear;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                button:disabled {
                    filter: grayscale(1);
                }
                button:disabled:hover {
                    transform: none;
                    box-shadow: none;
                }
                button:disabled:active {
                    transform: none;
                    box-shadow: none;
                }
                button:hover {
                    box-shadow: 0px 3px 9px -2px rgba(145, 0, 182, 0.7);
                    background-position-x: 30%;
                    transform: translateY(-1px)
                }
                button:active {
                    transition: all 0.1s;
                    transform: translateY(1px);
                    box-shadow: none;
                }
            `}</style>
        </button>
    )
};

export default MainButton;