import findBy from '../basic';

const arrForSearch = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

describe('findBy', () => {
  test('name: урон', () => {
    const result = arrForSearch.filter(findBy('name', 'урон'));
    const expected = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];
    expect(result).toEqual(expected);
  });
  test('type: attack', () => {
    const result = arrForSearch.filter(findBy('type', 'attack'));
    const expected = [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }];
    expect(result).toEqual(expected);
  });
});
