import { getPostFileContent } from '../posts';

describe('getPostFileContent', () => {
  it('should get the files content correctly', () => {
    const content = getPostFileContent('what-are-you-starting-this-year');

    expect(content).not.toBeUndefined();
  });
});
