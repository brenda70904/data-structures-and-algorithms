const HashTable = require('../index');

describe('HashTable', () => {
  const table = new HashTable(100);
  table.set('Brenda', '1234');
  table.set('Sam', '2468');
  table.set('Janny', '1357');

  it('can successfully store data', () => {

    expect(table.get('Brenda')).toBe('1234');
    expect(table.get('Sam')).toBe('2468');
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    let result = table.key();
    expect(result).toContain('Brenda');
    expect(result).toContain('Sam');
    expect(result).toContain('Janny');

  });

  it('Successfully handle a collision within the hashtable', ()=>{

    expect(table.set('Kevin','0000')).toEqual(table.set('Kevin','9999'));
  });

  it('Successfully returns null for a key that does not exist in the hashtable', ()=>{
    expect(table.has('kevin')).toBeFalsy();
    expect(table.has('Brenda')).toBeTruthy();
  });
});