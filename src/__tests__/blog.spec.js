import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Blog from '../containers/Blog';

describe('Rendering the blog page', () => {

  let getByTestId;

  afterEach(cleanup);

  let data = {
    "blogs": [
      {
        "title": "New Blog Title",
        "body": ["And there's text too"]
      },
      {
        "title": "Second title",
        "body": ["Lugubriousness"]
      },
      {
        "title": "It's a long one",
        "body": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
      }
    ]
  };

  beforeEach(() => {
    ({getByTestId} = render(<Blog blogs={data.blogs} />))
  })

  it('Displays title of blogs', () => {
    expect(getByTestId('New Blog Title').innerHTML).toContain('New Blog Title');
    expect(getByTestId('Second title').innerHTML).toContain('Second title');
  })

  it('Displays the body', () => {
    expect(getByTestId('Second title').innerHTML).toContain('Lugubriousness');
  })

  it('Truncates the body preview', () => {
    expect(getByTestId("It's a long one_0_preview").innerHTML).toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq...');
  })
})
