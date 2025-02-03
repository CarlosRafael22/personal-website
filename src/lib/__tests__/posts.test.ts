import { getPostFileContent } from '../posts';

describe('getPostFileContent', () => {
  it('should get the files content correctly', () => {
    const content = getPostFileContent('first-post');

    expect(content).not.toBeUndefined();
  });
});
