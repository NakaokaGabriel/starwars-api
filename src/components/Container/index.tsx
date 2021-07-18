import React from 'react';

import styled from './Container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
