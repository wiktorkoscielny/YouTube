import { useLocation, useNavigate } from 'react-router-dom';
import FormContainer from '../components/Form/Form.container';
// export default function NavigationProvider<ComponentProps>(Component: React.FunctionComponent<ComponentProps>) {
//     function ComponentWithRouterProp(props: ComponentProps) {
//         const location = useLocation();
//         const navigation = useNavigate();

//         return <Component {...props} navigation={navigation} />;
//     }

//     return ComponentWithRouterProp;
// }

export default function NavigationProvider (){
  const navigation = useNavigate();
  const location = useLocation();
    
  return <FormContainer location={location} navigation={navigation} />    
}
