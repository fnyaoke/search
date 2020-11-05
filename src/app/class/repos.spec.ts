import { Repository } from './repos';

describe('Repository',() => {
  it('should create an instance', () => {
   return expect(new Repository(0, '','','')).toBeTruthy();
  });
});
