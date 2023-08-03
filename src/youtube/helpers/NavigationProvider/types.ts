import { ComponentType } from "react";

type locationType = {
  pathname: string;
  search: string;
  hash: string;
  key: string;
};

export type navigationProviderType = {
  location: locationType;
  navigation: (arg: string) => void;
  paramsKey?: string;
};

export type ComponentProps = {
  Component: ComponentType<navigationProviderType>;
};
