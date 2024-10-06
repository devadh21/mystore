import React from "react";
interface buttonProps {
  onClick?:any ;
  label?: string;
  title?: string;
  className?: string;
  childrenn?: any;
}
const ButtonAction: React.FC<buttonProps> = ({ onClick,label, title, className,childrenn }) => {
  //onClick={e=>{onClick && onClick(true)}
  return (
    <button title={title} className={`style_btn ${className}`} onClick={e=>{onClick && onClick(true)}}>      
        {label}
        {childrenn}
    </button>
  );
};
export default ButtonAction;
