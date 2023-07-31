import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComponentType } from "react";

type locationType = {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

export type navigationProviderType = {
  location: locationType;
  navigation: (arg: string) => void;
  paramsKey?: string;
};

type ComponentProps = {
  Component: ComponentType<navigationProviderType>;
};

export const NavigationProvider = ({ Component }: ComponentProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return <Component location={location} navigation={navigation} paramsKey={id} />;
};
