import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
interface Props{
  callToAction: () => void;
  title: string;
  icon: string;
}
const Button = ({ callToAction, title, icon }: Props) => {
  return (
    <button
      className="editor_btn"
      style={icon == "left" ? {flexDirection: 'row-reverse' } : {}
      }
      onClick={() => {
        callToAction();
      }}
    >
      <span>{title}</span>
      <span style={icon == "left" ? {marginRight: '10px',marginTop: '5px' } : {marginLeft: '10px',marginTop: '5px'}}>
        {icon == "left" ? <FaArrowLeft /> : <FaArrowRight />}
      </span>
    </button>
  );
};

export default Button;
