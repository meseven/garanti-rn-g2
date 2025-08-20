import { StaticScreenProps } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { UserDetail } from "../features/user-detail";
import { Suspense } from "react";
import { Spinner } from "../components/spinner";
import { QueryErrorBoundary } from "../components/query-error-boundary";

export type DetailScreenProps = StaticScreenProps<RootStackParamList["Detail"]>;

export function UserDetailScreen({ route }: DetailScreenProps) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* <QueryErrorBoundary> */}
        <Suspense fallback={<Spinner />}>
          <UserDetail userId={userId} />
        </Suspense>
      {/* </QueryErrorBoundary> */}
    </View>
  );
}
