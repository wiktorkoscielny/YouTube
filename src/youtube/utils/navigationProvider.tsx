import { useLocation, useNavigate } from "react-router-dom";
import { ComponentType } from "react";

type PassedProps = {
  location: any;
  navigation: any;
};

type ComponentProps = {
  Component: ComponentType<PassedProps>;
};

export const NavigationProvider = ({ Component }: ComponentProps) => {
  const navigation = useNavigate();
  const location = useLocation();

  return <Component location={location} navigation={navigation} />;
};
