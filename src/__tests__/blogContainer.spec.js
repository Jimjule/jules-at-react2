import React from 'react';
import { render } from '@testing-library/react';
import BlogContainer from '../components/BlogContainer';

describe('Rendering the blog container', () => {

  let getByTestId;

  beforeEach(() => {
    ({getByTestId} = render(<BlogContainer title="Test Title" body={["Test Body"]} />))
  })

  test('Displays title of posts', () => {  
    expect(getByTestId('Test Title').innerHTML).toContain('Test Title');
  })

  test('Displays body of blogs', () => {
    expect(getByTestId('Test Title_0').innerHTML).toContain('Test Body');
  })
})
