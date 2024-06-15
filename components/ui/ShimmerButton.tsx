type BaseProps = {
  text: string;
  onClick?: () => void;
  otherClasses?: string;
};

type IconPresentProps = {
  icon: React.ReactNode;
  position: "left" | "right";
};

type IconAbsentProps = {
  icon?: undefined;
  position?: never;
};

type Props = BaseProps & (IconPresentProps | IconAbsentProps);

const ShimmerButton = ({
  text,
  onClick,
  icon,
  position,
  otherClasses,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#11001C,45%,#2f263c,55%,#11001C)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors md:w-60 md:mt-10 ${otherClasses}`}
    >
      {position === "left" ? icon : null}
      {text}
      {position === "right" ? icon : null}
    </button>
  );
};

export default ShimmerButton;
