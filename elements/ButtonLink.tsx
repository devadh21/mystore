import Link from "next/link";

interface buttonProps {
  id?: string;
  bt_href: string;
  label: string;
  className?: string;
  }
const ButtonLink: React.FC<buttonProps> = ({id, bt_href, label, className }) => {
  
  return (    
      <Link id={id} href={bt_href} className={`style_btn ${className}`}> 
        {label}
      </Link>    
  );
};
export default ButtonLink;
