import { Repository } from './repos';

describe('Repository',() => {
  it('should create an instance', () => {
   expect(new Repository(0, '','','')).toBeTruthy();
  });
});
