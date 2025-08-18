import { View } from "react-native";

type IProps = {
	children: React.ReactNode;
};

export function Paragraph(props: IProps) {
	return <View>{props.children}</View>;
}
