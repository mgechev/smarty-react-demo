import * as React from 'react';
import * as Loadable from 'react-loadable';

const LoadingComponent = ({ isLoading, error }: { isLoading: boolean; error: Error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default LoadingComponent;

export const AsyncComponent = (loader: any) => {
  return Loadable({
    loader: loader,
    loading: LoadingComponent
  });
};
