import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComponentType } from "react";

type PassedProps = {
  location: any;
  navigation: any;
  paramsKey: string;
};

type ComponentProps = {
  Component: ComponentType<PassedProps>;
};

export const NavigationProvider = ({ Component }: ComponentProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return <Component location={location} navigation={navigation} paramsKey={id} />;
};
