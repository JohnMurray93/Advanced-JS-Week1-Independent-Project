import { Script } from '../src/script.js';

describe('Script', function() {
  var reusableScript;

  beforeEach(function() {
    reusableScript = new Script();
  });
  
  it('should test whether a script constructor works', function() {
    expect(reusableScript.something).toEqual();
  });
});