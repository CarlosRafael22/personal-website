import { getPostFileContent } from '../posts';

describe('getPostFileContent', () => {
  it('should get the files content correctly', () => {
    const content = getPostFileContent('redesign-1');

    expect(content).not.toBeUndefined();
  });
});
