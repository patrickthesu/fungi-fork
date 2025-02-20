import Svg, { SvgProps, Path } from "react-native-svg";

type EatableGradeIconProps = {
  grade: "EATABLE" | "PARTIALLY_EATABLE" | "NOT_EATABLE";
} & SvgProps;

export const EatableGradeIcon = (props: EatableGradeIconProps) => {
  let Icon: (props: SvgProps) => JSX.Element = (p) => <></>;
  if (props.grade === "EATABLE") Icon = EatableIcon;
  if (props.grade === "PARTIALLY_EATABLE") Icon = PartiallyEatableIcon;
  if (props.grade === "NOT_EATABLE") Icon = NotEatableIcon;

  return <Icon {...props} />;
};

const EatableIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#000" {...props}>
    <Path
      fillRule="evenodd"
      d="M22.647 4.265A.75.75 0 0 1 23.25 5v14a.75.75 0 0 1-1.5 0v-4.25H21a.75.75 0 0 1-.75-.765c.061-3.106.226-4.906.495-6.199.233-1.118.543-1.85.885-2.653l.177-.421a.75.75 0 0 1 .84-.447ZM1.5 4.25a.75.75 0 0 1 .75.75v2.537l.5.25V5a.75.75 0 0 1 1.5 0v2.787l.5-.25V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.415.67l-1.585.794V19a.75.75 0 0 1-1.5 0V9.464L1.165 8.67A.75.75 0 0 1 .75 8V5a.75.75 0 0 1 .75-.75Zm11 2.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM5.25 12.5a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0Zm11.28-2.53a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

const NotEatableIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#000" {...props}>
    <Path
      fillRule="evenodd"
      d="M22.647 4.265A.75.75 0 0 1 23.25 5v14a.75.75 0 0 1-1.5 0v-4.25H21a.75.75 0 0 1-.75-.765c.061-3.106.226-4.906.495-6.199.233-1.118.543-1.85.885-2.653l.177-.421a.75.75 0 0 1 .84-.447ZM1.5 4.25a.75.75 0 0 1 .75.75v2.537l.5.25V5a.75.75 0 0 1 1.5 0v2.787l.5-.25V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.415.67l-1.585.794V19a.75.75 0 0 1-1.5 0V9.464L1.165 8.67A.75.75 0 0 1 .75 8V5a.75.75 0 0 1 .75-.75Zm11 2.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM5.25 12.5a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0Zm3.72-3.53a.75.75 0 0 1 1.06 0l2.47 2.47 2.47-2.47a.75.75 0 1 1 1.06 1.06l-2.47 2.47 2.47 2.47a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);

const PartiallyEatableIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#000" {...props}>
    <Path
      fillRule="evenodd"
      d="M22.647 4.265A.75.75 0 0 1 23.25 5v14a.75.75 0 0 1-1.5 0v-4.25H21a.75.75 0 0 1-.75-.765c.061-3.106.226-4.906.495-6.199.233-1.118.543-1.85.885-2.653l.177-.421a.75.75 0 0 1 .84-.447ZM1.5 4.25a.75.75 0 0 1 .75.75v2.537l.5.25V5a.75.75 0 0 1 1.5 0v2.787l.5-.25V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.415.67l-1.585.794V19a.75.75 0 0 1-1.5 0V9.464L1.165 8.67A.75.75 0 0 1 .75 8V5a.75.75 0 0 1 .75-.75Zm7.837 4.5H7.25a2 2 0 0 0 0 4V16A3.75 3.75 0 0 0 11 19.75h3A3.75 3.75 0 0 0 17.75 16v-3.25a2 2 0 0 0 0-4h-2.087a3.251 3.251 0 0 0-6.326 0Zm1.581 0h3.164a1.75 1.75 0 0 0-3.164 0Zm5.332 4h-7.5V16A2.25 2.25 0 0 0 11 18.25h3A2.25 2.25 0 0 0 16.25 16v-3.25Zm-9-2.5a.5.5 0 1 0 0 1h10.5a.5.5 0 0 0 0-1H7.25Z"
      clipRule="evenodd"
    />
  </Svg>
);
