import { durationPipe } from './duration.pipe';

describe('ProfilePipe', () => {
  it('create an instance', () => {
    const pipe = new durationPipe();
    expect(pipe).toBeTruthy();
  });
});
