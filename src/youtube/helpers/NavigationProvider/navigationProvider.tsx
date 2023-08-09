import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComponentProps } from "./types";

export const NavigationProvider = ({ Component }: ComponentProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return <Component 
            location={location}
            navigation={navigation} 
            paramsKey={id} 
          />;
};
