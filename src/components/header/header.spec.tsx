import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe('Header', () => {
  it('should render correctly', () => {
    const header = renderer.create(
      <Header title="Test" />
    ).toJSON;
    expect(header).toMatchSnapshot();
  });
});
