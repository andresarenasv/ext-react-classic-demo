import React from 'react';

const getMockedExtComponent = props => <div {...props} />;

export const RendererCell = props => getMockedExtComponent(props);